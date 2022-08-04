import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'

interface Props {
    className?: string
}
const Backto = ({ className }: Props) => {
    return (
        <Link href="../">
            <a>
                <div
                    className={`inline-flex items-center gap-2 ${className} bg-white rounded-lg p-4 shadow-sm`}
                >
                    <FaChevronLeft />
                </div>
            </a>
        </Link>
    )
}

export default Backto
