import Navbar from '@/components/Common/Navbar'
import { forwardRef, LegacyRef } from 'react'
import Head from 'next/head'

interface Props {
    title: string
    children: React.ReactNode
    ref?: any
}

const WithNavbar: React.FC<Props> = forwardRef(
    ({ children, title }, ref: LegacyRef<HTMLDivElement>) => (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="flex flex-col w-full h-screen" ref={ref}>
                <Navbar />

                {children}
            </div>
        </>
    )
)

export default WithNavbar
