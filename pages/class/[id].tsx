import React from 'react'
import Card from '@components/Lab/Card'
import Header from '@components/Class/Header'
import Backto from '@components/Backto'
import WithNavbar from '@layouts/WithNavbar'

function Class() {
    return (
        <>
            <WithNavbar>
                <div className="px-3 container mx-auto mt-10">
                    <Backto href="/" text="กลับหน้าหลัก" className="my-6" />
                    <Header />
                    <div className="bg-white p-4 rounded-lg">
                        <div className="my-6">
                            <h2 className="text-2xl font-bold">แลป</h2>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <Card
                                title="Fundamental Programming Concepts"
                                problems={[
                                    { name: '01', status: 'success' },
                                    { name: '02', status: 'failed' },
                                    { name: '03', status: 'failed' },
                                    { name: '04', status: 'not-attempted' },
                                    { name: '05', status: 'not-attempted' },
                                    { name: '06', status: 'success' },
                                    { name: '07', status: 'not-attempted' },
                                    { name: '08', status: 'success' },
                                    { name: '09', status: 'success' },
                                ]}
                                readonly
                            />
                            {/* <Card />
                            <Card />
                            <Card />
                            <Card /> */}
                        </div>
                    </div>
                </div>
            </WithNavbar>
        </>
    )
}

export default Class
