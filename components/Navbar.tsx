import { NextComponentType } from 'next'
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import ProfileImage from './ProfileImage'

interface Props {}

const Navbar: NextComponentType<Props> = () => {
    return (
        <>
            <div className="container mx-auto max-w-5xl flex justify-between items-center">
                <h1 className="text-xl">CS Lab</h1>
                <div className="bg-white pl-4 pr-2 py-2  rounded-full shadow-sm w-fit">
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
        </>
    )
}

export default Navbar
