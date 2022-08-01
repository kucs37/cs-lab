import React from 'react'
import type { NextPage } from 'next'
import { FaGraduationCap } from 'react-icons/fa'
import ProfileImage from '@components/ProfileImage'
import Class from '@components/Class'
import Navbar from '@components/Navbar'

const Home: NextPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full flex flex-col pt-4">
           <Navbar />
            <div className="my-10 bg-white p-4 rounded-lg h-full">
                <h2 className="text-2xl font-bold">คลาสเรียน</h2>
                <Class />
            </div>
        </div>
    )
}

export default Home
