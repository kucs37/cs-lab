import { HiArrowLongLeft } from 'react-icons/hi2'
import Link from 'next/link'

interface Props {
    className?: string
    href: string
}
const Backto = ({ className, href }: Props) => {
    return (
        <Link href={href}>
            <a
                className={`group inline-flex items-center gap-2 ${className} dark:text-ascent-1 hover:opacity-70 w-fit`}
            >
                <HiArrowLongLeft
                    size="1.45rem"
                    className="group-hover:translate-x-1 duration-300"
                />
                <h4>ย้อนกลับ</h4>
            </a>
        </Link>
    )
}

export default Backto
