import React from 'react'
import Card from '@components/Class/Lab'
import Header from '@components/Class/Header'
import Backto from '@components/Backto'
import WithNavbar from '@layouts/WithNavbar'

function Class() {
    return (
        <>
            <WithNavbar>
                <div className="px-3 flex flex-col">
                    <Header />
                    {/* <h3 className="text-2xl font-medium">แลป</h3>
                    <div className="grid grid-cols-6 mt-4">
                        <Card />
                    </div> */}
                </div>
            </WithNavbar>
        </>
    )
}

export default Class
