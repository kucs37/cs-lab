import React from 'react'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '@/store/hooks'
import { toggleConsole } from '@/store/slices/menuSlice'

function Console() {
    const dispatch = useDispatch()
    return (
        <>
            <div className="p-2 cursor-pointer select-none w-fit">
                <div className="border-b-2 border-gray-900 px-2 flex items-start gap-1">
                    <h4 className="text-sm font-medium uppercase">console</h4>
                    <button
                        className=""
                        onClick={() => dispatch(toggleConsole())}
                    >
                        <IoClose className="text-md" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Console
