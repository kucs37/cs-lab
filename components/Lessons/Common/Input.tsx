import { ChangeEvent } from 'react'
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5'
import { LessonQuizzesStatus } from '@/Context/Lessons/interface'
interface InputProps {
    status: LessonQuizzesStatus
    value: string
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void
    size?: number
    wFull?: boolean
}

function Input({ status, value = '', size, onChange, wFull }: InputProps) {
    return (
        <div className={`flex items-center gap-2 ${wFull && 'w-full'}`}>
            <div
                className={`${status === 'not-answered' && 'hidden'} ${
                    status === 'correct' ? 'md:text-lime-500' : 'text-red-500'
                }   text-2xl`}
            >
                {status === 'correct' ? <IoCheckmarkSharp /> : <IoClose />}
            </div>
            <input
                className={`${
                    status === 'not-answered'
                        ? 'border-gray-200'
                        : status === 'correct'
                        ? 'border-lime-500'
                        : 'border-red-500'
                }  border-2 rounded-md px-2 py-1 ${wFull && 'w-full'}`}
                size={size}
                value={value}
                type="text"
                onChange={onChange}
            />
        </div>
    )
}

export default Input
