import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import ProfileImage from './ProfileImage'

interface Props {}

const Navbar: NextPage<Props> = () => {
    const { status, data: session } = useSession()

    return (
        <div className="w-full bg-white border-b-[1px]">
            <div className="container mx-auto max-w-5xl px-2 py-3 flex justify-between items-center">
                <Link href={'/'}>
                    <h1 className="text-xl cursor-pointer font-bold">CS Lab</h1>
                </Link>
                {status === 'authenticated' ? (
                    <div>
                        <div className="flex w-full items-center gap-2">
                            <div className="flex flex-col">
                                <h2 className="text-md font-bold">
                                    {session.user?.name}
                                </h2>
                                <div className="inline-flex gap-2 items-center">
                                    <FaGraduationCap />
                                    <p>นิสิตชั้นปีที่ 1</p>
                                </div>
                            </div>
                            <div onClick={() => signOut()}>
                                <ProfileImage />
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default Navbar
