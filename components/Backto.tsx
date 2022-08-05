import { FaChevronLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'

interface Props {
    className?: string
}
const Backto = ({ className }: Props) => {
    const router = useRouter()
    const handleOnClick = () => {
        router.back()
    }
    return (
        <button
            onClick={handleOnClick}
            className={`inline-flex items-center gap-2 ${className} bg-white rounded-lg p-4 shadow-sm`}
        >
            <FaChevronLeft />
        </button>
    )
}

export default Backto
