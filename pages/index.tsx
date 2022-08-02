import React from 'react'
import type { NextPage } from 'next'
import Class from '@components/Class'
import Navbar from '@components/Navbar'
import WithNavbar from '@layouts/WithNavbar'

const Home: NextPage = () => {
    return (
        <WithNavbar>
            <div className="p-4 rounded-lg container mx-auto bg-white shadow-sm">
                <h2 className="text-2xl font-bold">คลาสเรียน</h2>
                <div className="mt-4 flex flex-wrap gap-3 justify-center">
                    {[...new Array(20).map((_, i) => i)].map((i) => (
                        <Class />
                    ))}
                </div>
            </div>
        </WithNavbar>
    )
}

export default Home
