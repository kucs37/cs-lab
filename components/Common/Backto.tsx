import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

interface Props {
    className?: string
    href: string
}
const Backto = ({ className, href }: Props) => {
    return (
        <Link href={href}>
            <a className={`inline-flex items-center gap-2 ${className} dark:text-ascent-1 w-fit`}>
                <FaChevronLeft />
                <h4>ย้อนกลับ</h4>
            </a>
        </Link>
    )
}

export default Backto
