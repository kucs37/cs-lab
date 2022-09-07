import { createRef, MouseEvent, TouchEvent, useEffect } from 'react'
import WithNavbar from '@/HOC/WithNavbar'
import Editor from '@/components/Problem/Editor'
import Scroll from '@/components/Problem/Scroll'
import Leftpanel from '@/components/Problem/Leftpanel'
import Settings from '@/components/Problem/Settings'

// Context
import ProblemContext, { useProblemContext } from '@/Context/Problem'

function Problem() {
    const body = createRef<HTMLDivElement>()
    const { isDrag, setIsDrag, setScrollSize, isSettings } = useProblemContext()

    const handleOnMouseMove = (e: MouseEvent) => {
        if (isDrag && e.pageX < 768) setScrollSize(e.pageX)
    }

    const handleOnTouchMove = (e: TouchEvent) => {
        if (isDrag && e.touches[0].pageX < 768)
            setScrollSize(e.touches[0].pageX)
    }

    const handleOnMouseUp = () => {
        setIsDrag(false)
    }

    useEffect(() => {
        document.addEventListener('mouseup', handleOnMouseUp)
        document.addEventListener('touchend', handleOnMouseUp)

        return () => {
            document.removeEventListener('mouseup', handleOnMouseUp)
            document.removeEventListener('touchend', handleOnMouseUp)
        }
    }, [])

    return (
        <ProblemContext>
            <WithNavbar
                ref={body}
                title="09 Find a, b in which a*b=n and (a+b) is the lowest - CS-LAB"
            >
                {isSettings && <Settings />}
                <div
                    className="flex flex-col md:flex-row min-h-0 h-full  bg-white"
                    onMouseMove={handleOnMouseMove}
                    onTouchMove={handleOnTouchMove}
                >
                    <Leftpanel />
                    <Scroll />
                    <Editor />
                </div>
            </WithNavbar>
        </ProblemContext>
    )
}

export default Problem
