import type { NextComponentType } from 'next'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

interface Props {
    href: string
    text: string
    className?: string
}
const Backto = ({ href, text, className }: Props) => {
    return (
        <Link href={href}>
            <a>
                <div className={`inline-flex items-center gap-2 ${className}`}>
                    <BsArrowLeft />
                    <p>{text}</p>
                </div>
            </a>
        </Link>
    )
}

export default Backto
