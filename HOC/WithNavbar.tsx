import Navbar from '@/components/Common/Navbar'
import { forwardRef, LegacyRef } from 'react'
import Head from 'next/head'

interface Props {
    title: string
    children: React.ReactNode
    ref?: any
    className?: string
}

const WithNavbar: React.FC<Props> = forwardRef(
    ({ children, title, className = '' }, ref: LegacyRef<HTMLDivElement>) => (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div
                className={`flex flex-col w-full min-h-screen h-screen ${className}`}
                ref={ref}
            >
                <Navbar />

                {children}
            </div>
        </>
    )
)

export default WithNavbar
