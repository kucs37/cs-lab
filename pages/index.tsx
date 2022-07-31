import React from 'react'
import type { NextPage } from 'next'
import { FaGraduationCap } from 'react-icons/fa'
import ProfileImage from '@components/ProfileImage'
import Class from '@components/Class'

const Home: NextPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full flex flex-col pt-4">
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
            <div className="my-10 bg-white p-4 rounded-lg h-full">
                <h2 className="text-2xl font-bold">คลาสเรียน</h2>
                <Class />
            </div>
        </div>
    )
}

export default Home
