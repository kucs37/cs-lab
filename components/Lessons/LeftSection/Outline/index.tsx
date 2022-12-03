import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoCheckmark, IoClose } from 'react-icons/io5'
import { fakeLabs } from '@/fakeData'
import clsx from 'clsx'

const EachProblem = ({
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
                'grid grid-cols-12 items-center',
                active && 'text-gray-900 font-bold'
            )}
        >
            <h4 className="col-span-11 text-start">{name}</h4>
            {status === 'success' ? (
                <IoCheckmark className="col-span-1 text-lime-500 text-2xl" />
            ) : null}
            {status === 'failed' ? (
                <IoClose className="col-span-1 text-red-500 text-2xl" />
            ) : null}
        </button>
    )
}
function Outline() {
    return (
        <div className="text-gray-400 flex flex-col gap-3 px-2 mb-20">
            {fakeLabs[0].problems.map(({ name, status }, index) => (
                <EachProblem
                    key={name}
                    name={name}
                    status={status}
                    active={index === 0}
                />
            ))}
        </div>
    )
}

export default Outline
