import React from 'react'
import Card from '@components/Class/Lab'
import Header from '@components/Class/Header'
import Backto from '@components/Backto'
import WithNavbar from '@layouts/WithNavbar'

function Class() {
    return (
        <>
            <WithNavbar>
                <Header />
                <div className="container mx-auto bg-white h-screen rounded-t-lg shadow-lg relative mt-24">
                    <div className="pt-32 px-6">
                        <h3 className="text-2xl font-medium">แลป</h3>
                        <div className="grid grid-cols-6 mt-4">
                            <Card />
                        </div>
                    </div>
                </div>
            </WithNavbar>
        </>
    )
}

export default Class
