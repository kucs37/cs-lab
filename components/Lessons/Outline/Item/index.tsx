import clsx from 'clsx'
import { useRouter } from 'next/router'
import { IoCheckmark, IoClose } from 'react-icons/io5'

const Item = ({
    name,
    status,
    active,
}: {
    name: string
    status: 'success' | 'failed' | 'none'
    active: boolean
}) => {
    const router = useRouter()

    return (
        <button
            className={clsx(
                'w-full grid grid-cols-12 items-center hover:bg-gray-100 p-2 rounded-xl',
                active && 'text-gray-900 font-bold'
            )}
        >
            <h4 className="col-span-11 text-start text-lg md:text-md">{name}</h4>
            {status === 'success' ? (
                <IoCheckmark className="col-span-1 text-lime-500 text-2xl" />
            ) : null}
            {status === 'failed' ? (
                <IoClose className="col-span-1 text-red-500 text-2xl" />
            ) : null}
        </button>
    )
}

export default Item