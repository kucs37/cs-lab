import Navbar from '@/components/Common/Navbar'
import { forwardRef, LegacyRef } from 'react'

interface Props {
    children: React.ReactNode
    ref?: any
}

const WithNavbar: React.FC<Props> = forwardRef(
    ({ children }, ref: LegacyRef<HTMLDivElement>) => (
        <div className="flex flex-col w-full h-screen" ref={ref}>
            <Navbar />

            {children}
        </div>
    )
)

export default WithNavbar
