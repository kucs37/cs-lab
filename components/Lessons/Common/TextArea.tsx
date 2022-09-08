import { ChangeEvent, useState, useEffect } from 'react'
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5'
import { useLessonCTX } from '@/Context/Lessons'

interface InputProps {
    status: 'correct' | 'incorrect' | 'not-answered'
    value: string
    rows: number
    onChange: (ev: ChangeEvent<HTMLTextAreaElement>) => void
}

function Input({ status, value = '', rows, onChange }: InputProps) {
    return (
        <div className="flex items-center gap-2 w-full">
            <div
                className={`${status === 'not-answered' && 'hidden'} ${
                    status === 'correct' ? 'md:text-lime-500' : 'text-red-500'
                }   text-2xl`}
            >
                {status === 'correct' ? <IoCheckmarkSharp /> : <IoClose />}
            </div>
            <textarea
                className={`${
                    status === 'not-answered'
                        ? 'border-gray-200'
                        : status === 'correct'
                        ? 'border-lime-500'
                        : 'border-red-500'
                }  border-2 rounded-md px-2 py-1 w-full`}
                rows={rows}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input
