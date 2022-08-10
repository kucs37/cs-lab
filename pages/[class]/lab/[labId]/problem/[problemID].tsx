import { createRef, MouseEvent, TouchEvent, useEffect } from 'react'
import WithNavbar from '@layouts/WithNavbar'
import Description from '@components/Problem/Description'
import Editor from '@components/Problem/Editor'
import Scroll from '@components/Problem/Scroll'
import { useRecoilState } from 'recoil'
import { problemState } from '@store/ProblemState'
import { scrollState } from '@store/ScrollSize'
import useWindowSize from 'hooks/useWindowSize'

function Problem() {
    const body = createRef<HTMLDivElement>()
    const [isDrag, setIsDrag] = useRecoilState(problemState)
    const [scrollSize, setScrollSize] = useRecoilState(scrollState)
    const { width } = useWindowSize()

    const handleOnMouseMove = (e: MouseEvent) => {
        if (isDrag && (width! - scrollSize > 478 || e.pageX < scrollSize))
            setScrollSize(e.pageX)
    }

    const handleOnTouchMove = (e: TouchEvent) => {
        if (
            isDrag &&
            (width! - scrollSize > 478 || e.touches[0].pageX < scrollSize)
        )
            setScrollSize(e.touches[0].pageX)
    }

    const handleOnMouseUp = () => {
        setIsDrag(false)
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
            <div
                className="flex flex-wrap md:flex-nowrap min-h-0  h-full"
                onMouseMove={handleOnMouseMove}
                onTouchMove={handleOnTouchMove}
            >
                <Description />
                <Scroll />
                <Editor />
            </div>
        </WithNavbar>
    )
}

export default Problem
