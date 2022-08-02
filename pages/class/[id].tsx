import React from 'react'
import Card from '@components/Class/Lab'
import Header from '@components/Class/Header'
import Navbar from '@components/Navbar'
import Backto from '@components/Backto'

function Class() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <Backto href="/" text="กลับสู่หน้าหลัก" className="py-10" />
                <div className="bg-white h-screen rounded-t-lg shadow-lg relative mt-12">
                    <Header />
                    <div className="pt-32 px-6">
                        <h3 className="text-2xl font-medium">แลป</h3>
                        <div className="grid grid-cols-6 mt-4">
                            {/* <Card /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Class
