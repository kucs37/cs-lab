import Navbar from '@components/Navbar'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const WithNavbar: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto max-w-full mt-4">{children}</div>
        </>
    )
}

export default WithNavbar
