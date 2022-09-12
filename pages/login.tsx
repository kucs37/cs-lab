import type { NextPage } from 'next'
import AsyncBtn from '@/components/Common/AsynBtn'
import { signIn } from 'next-auth/react'
import Head from 'next/head'

const Login: NextPage = () => {
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
                            onClick={() =>
                                signIn('google', { callbackUrl: '/' })
                            }
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
