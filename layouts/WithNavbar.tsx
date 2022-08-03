import Navbar from '@components/Navbar'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const WithNavbar: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div style={{ maxWidth: '90rem' }} className="mx-auto">
                {children}
            </div>
        </>
    )
}

export default WithNavbar
