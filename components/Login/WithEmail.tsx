import { FormEvent, useState, useRef, useEffect, ChangeEvent } from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
import { BiLoaderCircle } from 'react-icons/bi'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { signInWithEmail } from '@/services/signin'

function WithEmail() {
    const [step, setStep] = useState<'email' | 'password'>('email')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<'email' | 'failed' | null>(null)
    const [isSubmit, setIsSubmit] = useState(false)
    const passwordRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault()
        setError(null)

        switch (step) {
            case 'email':
                if (
                    /^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$/.test(email) ===
                    false
                ) {
                    setError('email')
                    break
                }
                setStep('password')
                break
            case 'password':
                setIsSubmit(true)
                signInWithEmail({ email, password })
                    .then(({ status }) => {
                        if (status === 'failed') {
                            setIsSubmit(false)
                            return setError('failed')
                        }

                        router.push('/')
                    })
                    .catch((e) => console.log(e))
                break
        }
    }

    useEffect(() => {
        if (step === 'password') passwordRef.current?.focus()
    }, [step])

    return (
        <form onSubmit={handleOnSubmit} className="w-full">
            <div className="relative w-full">
                <input
                    inputMode="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="อีเมล"
                    className={clsx(
                        'py-3 px-4 w-full border outline-none focus:ring-1 dark:bg-secondary-1 dark:text-ascent-1',
                        step === 'email' ? 'rounded-lg' : 'rounded-t-lg',
                        error && ['email', 'failed'].includes(error)
                            ? 'border-red-500 focus:ring-red-500'
                            : 'dark:border-secondary-2'
                    )}
                />
                {step === 'email' ? (
                    <button
                        type="submit"
                        className="absolute top-1/2 -translate-y-1/2 right-3 rounded-full"
                    >
                        <BsArrowRightCircle className="text-lg text-ascent-1" />
                    </button>
                ) : null}
            </div>
            {error === 'email' ? (
                <p className="text-sm my-2 text-red-500">
                    รูปแบบอีเมลไม่ถูกต้อง
                </p>
            ) : null}
            {step === 'password' ? (
                <>
                    <div className="relative w-full">
                        <input
                            ref={passwordRef}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="รหัสผ่าน"
                            className={clsx(
                                'py-3 px-4 w-full border outline-none dark:bg-secondary-1 dark:text-ascent-1 rounded-b',
                                error === 'failed'
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'dark:border-secondary-2'
                            )}
                        />

                        <button
                            type="submit"
                            className="absolute top-1/2 -translate-y-1/2 right-3 rounded-full"
                        >
                            {isSubmit ? (
                                <BiLoaderCircle className="text-lg text-ascent-1 animate-spin" />
                            ) : (
                                <BsArrowRightCircle className="text-lg text-ascent-1" />
                            )}
                        </button>
                    </div>

                    {error === 'failed' ? (
                        <p className="text-sm my-2 text-red-500">
                            อีเมลหรือรหัสผ่านไม่ถูกต้อง
                        </p>
                    ) : null}
                </>
            ) : null}
        </form>
    )
}

export default WithEmail
