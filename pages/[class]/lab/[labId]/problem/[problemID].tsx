import { createRef, MouseEvent, TouchEvent, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { problemState } from '@store/ProblemState'
import { scrollState } from '@store/ScrollSize'
import WithNavbar from '@layouts/WithNavbar'
import Editor from '@components/Problem/Editor'
import Scroll from '@components/Problem/Scroll'
import Leftpanel from '@components/Problem/Leftpanel'
import Settings from '@components/Problem/Settings'
import Description from '@components/Problem/Leftpanel/Description'

import useWindowSize from 'hooks/useWindowSize'

function Problem() {
    const body = createRef<HTMLDivElement>()
    const [problem, setProblem] = useRecoilState(problemState)
    const [scrollSize, setScrollSize] = useRecoilState(scrollState)
    const { width } = useWindowSize()

    const handleOnMouseMove = (e: MouseEvent) => {
        console.log(width! - scrollSize)

        if (problem.isDrag && e.pageX < 768) setScrollSize(e.pageX)
    }

    const handleOnTouchMove = (e: TouchEvent) => {
        if (problem.isDrag && e.touches[0].pageX < 768)
            setScrollSize(e.touches[0].pageX)
    }

    const handleOnMouseUp = () => {
        setProblem((prev) => ({ ...prev, isDrag: false }))
    }

    useEffect(() => {
        document.addEventListener('mouseup', handleOnMouseUp)
        document.addEventListener('touchend', handleOnMouseUp)

        return () => {
            document.removeEventListener('touchend', handleOnMouseUp)
        }
    }, [])

    return (
        <WithNavbar ref={body}>
            {problem.isSettings && <Settings />}
            <div
                className="flex flex-col md:flex-row min-h-0  h-full"
                onMouseMove={handleOnMouseMove}
                onTouchMove={handleOnTouchMove}
            >
                <Leftpanel />
                <Scroll />
                <Editor />
            </div>
        </WithNavbar>
    )
}

export default Problem
