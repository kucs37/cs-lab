import { createRef, MouseEvent, TouchEvent, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { problemState } from '@store/ProblemState'
import { scrollState } from '@store/ScrollSize'
import WithNavbar from '@layouts/WithNavbar'
import Leftpanel from '@components/Problem/Leftpanel'
import Editor from '@components/Problem/Editor'
import Scroll from '@components/Problem/Scroll'

import useWindowSize from 'hooks/useWindowSize'

import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'

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
                <Leftpanel />
                <Scroll />
                <Editor />
            </div>
        </WithNavbar>
    )
}

export default Problem
