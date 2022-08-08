import { createRef, useEffect } from 'react'
import WithNavbar from '@layouts/WithNavbar'
import Description from '@components/Problem/Description'
import Editor from '@components/Problem/Editor'
import Scroll from '@components/Problem/Scroll'
import { useRecoilState } from 'recoil'
import { problemState } from '@store/ProblemState'
import { scrollState } from '@store/ScrollSize'

function Problem() {
    const body = createRef<HTMLDivElement>()
    const [isDrag, setIsDrag] = useRecoilState(problemState)
    const [_, setScrollSize] = useRecoilState(scrollState)
    const handleOnMouseMove = (e: MouseEvent) => {
        if (isDrag) setScrollSize(e.pageX)
    }

    const handleOnMouseUp = () => {
        setIsDrag(false)
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleOnMouseMove)
        document.addEventListener('mouseup', handleOnMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleOnMouseMove)
            document.removeEventListener('mouseup', handleOnMouseUp)
        }
    }, [])

    if (typeof window !== undefined) {
        return (
            <WithNavbar ref={body}>
                <div
                    className="flex min-h-0 h-full"
                    onMouseMove={handleOnMouseMove}
                >
                    <Description />
                    <Scroll />
                    <Editor />
                </div>
            </WithNavbar>
        )
    }
}

export default Problem
