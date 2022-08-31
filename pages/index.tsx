import React from 'react'
import type { NextPage } from 'next'
import Class from '@/components/Class'
import Labs from '../fakeData'
import WithNavbar from '@/layouts/WithNavbar'

const Home: NextPage = () => {
    return (
        <WithNavbar title="Class - CS-LAB">
            <div className="px-3 container mx-auto mt-2 my-10">
                <div className="p-4 flex flex-col items-center">
                    <div>
                        <h2 className="text-2xl font-bold">คลาสเรียน</h2>
                        <div className="mt-4 grid grid-cols-12 gap-4 w-full">
                            <Class
                                title="Fundamental Programming Concepts"
                                code="CS112"
                                section={11}
                                labs={Labs}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </WithNavbar>
    )
}

export default Home
