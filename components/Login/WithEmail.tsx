import { FormEvent, useState, useRef, useEffect, ChangeEvent } from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
import clsx from 'clsx'
import { useRouter } from 'next/router'

function WithEmail() {
    const [step, setStep] = useState<'email' | 'password'>('email')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState<string | null>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault()
        switch (step) {
            case 'email':
                setStep('password')
                break
            case 'password':
                // if (email === '' || password === '') return
                // console.log(email, password)
                // router.replace("/class")
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
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="อีเมล"
                    className={clsx(
                        'py-3 px-4 w-full border dark:border-secondary-2 outline-gray-700 dark:bg-secondary-1 dark:text-ascent-1',
                        step === 'email' ? 'rounded-lg' : 'rounded-t-lg'
                    )}
                />
                {step === 'email' ? (
                    <button onClick={handleOnSubmit}>
                        <BsArrowRightCircle className="absolute top-1/2 -translate-y-1/2 right-3 text-lg text-ascent-1" />
                    </button>
                ) : null}
            </div>
            {step === 'password' ? (
                <div className="relative w-full">
                    <input
                        ref={passwordRef}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="รหัสผ่าน"
                        className="py-3 px-4 w-full rounded-b-lg border dark:border-secondary-2 outline-gray-700 dark:bg-secondary-1 dark:text-ascent-1"
                    />

                    <button>
                        <BsArrowRightCircle className="absolute top-1/2 -translate-y-1/2 right-3 text-lg text-ascent-1" />
                    </button>
                </div>
            ) : null}
        </form>
    )
}

export default WithEmail
