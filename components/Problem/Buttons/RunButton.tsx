import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
interface RunButtonI {
    onRun: () => void
}
function RunButton({ onRun }: RunButtonI) {
    return (
        <div className="absolute right-4 bottom-4 z-40">
            <div className="relative">
                <button
                    className="py-2 px-4 w-14 h-14 bg-lime-600 shadow-md rounded-full inline-flex flex-col justify-center items-center gap-2 text-white active:bg-lime-500 peer"
                    onClick={onRun}
                >
                    <BsFillPlayFill size="1.75rem" />
                </button>
                <span
                    className="absolute top-1/2 left-[-8rem] bg-white shadow-md px-2 rounded-full opacity-0 peer-hover:opacity-100 delay-500 transition-opacity duration-300"
                    style={{ transform: 'translateY(-50%)' }}
                >
                    CMD + Alt + R
                </span>
            </div>
        </div>
    )
}

export default RunButton
