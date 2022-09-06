import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

interface Props {
    className?: string
    href: string
}
const Backto = ({ className, href }: Props) => {
    return (
        <Link href={href}>
            <a
                className={`inline-flex items-center gap-2 ${className} bg-white rounded-lg p-4 shadow-md`}
            >
                <FaChevronLeft />
            </a>
        </Link>
    )
}

export default Backto
