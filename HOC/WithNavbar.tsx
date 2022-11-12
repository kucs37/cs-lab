import Navbar from '@/components/Common/Navbar'
import { forwardRef, LegacyRef, Ref } from 'react'
import Head from 'next/head'

interface Props {
    title: string
    children: React.ReactNode
    navbarRef?: Ref<HTMLDivElement>
    className?: string
}

const WithNavbar: React.FC<Props> = forwardRef(
    (
        { children, title, className = '', navbarRef },
        ref: LegacyRef<HTMLDivElement>
    ) => (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={`flex flex-col w-full h-full  ${className}`} ref={ref}>
                <Navbar ref={navbarRef} />

                {children}
            </div>
        </>
    )
)

WithNavbar.displayName = 'WithNavbar'

export default WithNavbar
