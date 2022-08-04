import React from 'react'
import type { NextPage } from 'next'
import Class from '@components/Class'

import WithNavbar from '@layouts/WithNavbar'

const Home: NextPage = () => {
    return (
        <WithNavbar>
            <div className="p-10 container mx-auto">
                <div className="p-4 flex flex-col items-center">
                    <div>
                        <h2 className="text-2xl font-bold">คลาสเรียน</h2>
                        <div className="mt-4 grid grid-cols-12 gap-4">
                            <Class />
                            <Class />
                            <Class />
                        </div>
                    </div>
                </div>
            </div>
        </WithNavbar>
    )
}

export default Home
