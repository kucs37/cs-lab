import { useEffect } from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface Props {
    error: string
}
const Login: NextPage<Props> = ({ error }) => {
    const { query } = useRouter()

    useEffect(() => {
        if (query.error) {
            if (query.error === 'not-authorize') {
                toast('กรุณาเข้าสู่ระบบด้วย @ku.th !', {
                    type: 'error',
                })
            } else {
                toast('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง', {
                    type: 'error',
                })
            }
        }
    }, [query])
    return (
        <>
            <Head>
                <title>Login | CS-LAB</title>
            </Head>
            <div className="fixed w-screen bg-white dark:bg-zinc-900">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full flex flex-col items-center p-4 max-w-md">
                        <div className="mb-4">
                            <h1 className="text-3xl text-center font-semibold mb-2 text-gray-900 dark:text-white">
                                CS LAB
                            </h1>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full animate-pulse bg-emerald-500"></div>
                                <p className="text-center dark:text-white">
                                    มีผู้ใช้งานขณะนี้อยู่ 128 คน
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() =>
                                signIn('google', {
                                    redirect: false,
                                    callbackUrl: `${
                                        query.callbackUrl
                                            ? query.callbackUrl
                                            : window.location.origin
                                    }`,
                                })
                            }
                            className="flex justify-center items-center gap-3 hover:bg-zinc-100 hover:dark:bg-zinc-100/10 bg-zinc-50 dark:bg-zinc-50/5 border-2 border-zinc-200 dark:border-zinc-200/10 text-gray-700 dark:text-white py-3 rounded-lg w-3/4"
                        >
                            <FcGoogle size="1.5rem" />
                            เข้าสู่ระบบด้วย Google
                        </button>

                        <a
                            className="absolute bottom-4 flex items-center gap-2 underline dark:text-white"
                            href="https://github.com/kucs37/cs-lab"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsGithub size="1.25rem" />
                            Github Repository
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     console.log(ctx)

//     return {
//         props: {},
//     }
// }
