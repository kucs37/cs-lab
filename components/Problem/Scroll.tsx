import { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { problemState } from '@/store/ProblemState'
import { BsThreeDotsVertical } from 'react-icons/bs'
function Scroll() {
    const scroll = useRef<HTMLDivElement | null>(null)
    const [_, setProblem] = useRecoilState(problemState)

    const handleOnMouseDown = () =>
        setProblem((prev) => ({ ...prev, isDrag: true }))

    return (
        <div
            ref={scroll}
            className="md:flex w-full md:w-4 h-full border-x-2 bg-gray-50  flex-col justify-center items-center cursor-ew-resize"
            onMouseDown={handleOnMouseDown}
            onTouchStart={handleOnMouseDown}
        >
            <BsThreeDotsVertical />
        </div>
    )
}

export default Scroll
