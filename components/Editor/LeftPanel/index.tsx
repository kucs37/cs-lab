import { useRef, useState, useEffect } from 'react'
import useDrag from '@/hooks/useDrag'
import Problem from './Problem'
import { useDispatch } from 'react-redux'
import { Dispatch } from '@/store'
import { useResizeDetector } from 'react-resize-detector'

function LeftPanel() {
    const [windowWidth, setWindowWidth] = useState<number>(320)
    const { width, ref } = useResizeDetector()
    const { size, setIsDrag } = useDrag(ref, windowWidth, 'width')

    const dispatch = useDispatch<Dispatch>()

    useEffect(() => {
        if (size >= 320) setWindowWidth(size)
    }, [size])

    useEffect(() => {
        if (width) dispatch.editorWindow.setLeftPanelWidth(width)
    }, [width])

    const onDoubleClick = () => {
        setWindowWidth(400)
        dispatch.editorWindow.setLeftPanelWidth(400)
    }

    return (
        <div
            ref={ref}
            className="flex justify-between"
            style={{
                minWidth: 320,
                width: windowWidth,
                maxWidth: 'max-content',
            }}
        >
            <Problem />

            {/* Tab Resize */}
            <div
                className="flex-shrink-0 w-3 h-full bg-slate-200 cursor-col-resize flex items-center justify-center"
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={onDoubleClick}
            >
                <span className="h-10 rounded-full w-1/3 bg-gray-500"></span>
            </div>
        </div>
    )
}

export default LeftPanel
