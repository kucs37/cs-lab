import React from 'react'
import type { NextPage } from 'next'
import Class from '@components/Class'
import Navbar from '@components/Navbar'

const Home: NextPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full flex flex-col">
            <Navbar />
            <div className="container mx-auto max-w-full mt-4">
                <div className="p-4 rounded-lg container mx-auto bg-white shadow-sm">
                    <h2 className="text-2xl font-bold">คลาสเรียน</h2>
                    <div className="mt-4 flex flex-wrap gap-3 justify-center">
                        {[...new Array(20).map((_, i) => i)].map((i) => (
                            <Class />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
