import { ChangeEvent } from 'react'
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5'
import clsx from 'clsx'
import { LabStatus } from '@/interface/LabStatus'
interface InputProps {
    status: LabStatus
    value: string
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void
    size?: number
    wFull?: boolean
}

function Input({ status, value = '', size, onChange, wFull }: InputProps) {
    return (
        <div className={clsx('flex items-center gap-2', wFull && 'w-full')}>
            <div
                className={clsx(
                    status === 'not-attempted' && 'hidden',
                    status === 'success' && 'md:text-lime-500',
                    status === 'failed' && 'text-red-500',
                    'text-2xl'
                )}
            >
                {status === 'success' ? <IoCheckmarkSharp /> : <IoClose />}
            </div>
            <input
                className={clsx(
                    'rounded-md p-2 bg-white dark:bg-secondary-2/20 dark:border-secondary-2/10 border outline-none focus:dark:outline-slate-300',
                    wFull && 'w-full',
                    status === 'not-attempted' && 'border-gray-200',
                    status === 'success' && 'border-lime-500',
                    status === 'failed' && 'border-red-500'
                )}
                size={size}
                value={value}
                type="text"
                onChange={onChange}
            />
        </div>
    )
}

export default Input
