import { useRef } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { useProblemContext } from '@/Context/Problem'
function Scroll() {
    const scroll = useRef<HTMLDivElement | null>(null)
    const { isDrag, setIsDrag } = useProblemContext()

    const handleOnMouseDown = () => setIsDrag(true)

    return (
        <div
            ref={scroll}
            className="hidden md:flex w-full md:w-4 h-full border-x-2 bg-gray-50  flex-col justify-center items-center cursor-ew-resize"
            onMouseDown={handleOnMouseDown}
            onTouchStart={handleOnMouseDown}
        >
            <BsThreeDotsVertical />
        </div>
    )
}

export default Scroll
