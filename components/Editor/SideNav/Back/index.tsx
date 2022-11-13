import { useRouter } from 'next/router'
import { IoArrowBackOutline } from 'react-icons/io5'

function Button() {
    const router = useRouter()
    return (
        <button
            className="h-fit m-2 p-2 rounded-lg shadow-md text-gray-600 bg-white"
            onClick={() => router.back()}
        >
            <IoArrowBackOutline size="1.75rem" />
        </button>
    )
}

export default Button
