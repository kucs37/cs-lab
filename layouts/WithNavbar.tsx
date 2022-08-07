import Navbar from '@components/Common/Navbar'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const WithNavbar: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-screen">
            <Navbar />

            {children}
        </div>
    )
}

export default WithNavbar
