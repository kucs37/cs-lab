import type { NextPage } from 'next'
import AsyncBtn from '@/components/Common/AsynBtn'
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Login: NextPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false) // Test Async Button component
    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status !== 'loading') {
            if (status === 'authenticated') {
                router.push('/')
            }
        }
    }, [status, router])

    const handleSubmit = () => {
        setIsSubmit(true)
        setTimeout(() => {
            setIsSubmit(false)
        }, 1000)
    }
    return (
        <>
            <Head>
                <title>Login - CS-LAB</title>
            </Head>
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="flex flex-col w-full max-w-sm p-4  rounded-2xl bg-white shadow-sm py-6">
                    <div className="w-full mb-6">
                        <h1 className="text-3xl text-center font-semibold mb-2 text-lime-500 mt-4">
                            CS Lab
                        </h1>
                    </div>

                    <div className="my-4 flex flex-col gap-6">
                        <AsyncBtn
                            isLoading={false}
                            onClick={() => signIn('google')}
                        >
                            เข้าสู่ระบบ
                        </AsyncBtn>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
