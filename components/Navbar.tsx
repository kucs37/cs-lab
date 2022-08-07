import { NextPage } from 'next'
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import ProfileImage from './ProfileImage'

interface Props {}

const Navbar: NextPage<Props> = () => {
    return (
        <>
            <div className="w-full bg-white border-b-[1px]">
                <div className="container mx-auto max-w-5xl px-2 py-3 flex justify-between items-center ">
                    <h1 className="text-xl font-bold">CS Lab</h1>
                    <div>
                        <div className="flex w-full items-center gap-2">
                            <div className="flex flex-col">
                                <h2 className="text-md font-bold">
                                    นายศรชัย สมสกุล
                                </h2>
                                <div className="inline-flex gap-2 items-center">
                                    <FaGraduationCap />
                                    <p>นิสิตชั้นปีที่ 1</p>
                                </div>
                            </div>
                            <ProfileImage />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
