import { useRef, useState, useEffect } from 'react'
import useDrag from '@/hooks/useDrag'
import Outline from './Outline'
import Description from './Description'

function LeftPanel() {
    const [windowWidth, setWindowWidth] = useState<number>(320)
    const leftPanelRef = useRef<HTMLDivElement>(null)
    const { size, setIsDrag } = useDrag(leftPanelRef, windowWidth, 'width')

    useEffect(() => {
        if (size >= 320) setWindowWidth(size + 10)
    }, [size])

    const onDoubleClick = () => {
        setWindowWidth(320)
    }

    return (
        <div
            ref={leftPanelRef}
            className="flex justify-between"
            style={{
                minWidth: 320,
                width: windowWidth,
                maxWidth: 'max-content',
            }}
        >
            <div className="p-4 h-full overflow-y-scroll">
                <Outline />
                <hr className="h-4" />
                <Description />
            </div>

            {/* Tab Resize */}
            <div
                className="group flex-shrink-0 w-3 h-full bg-slate-200 hover:bg-slate-300 cursor-col-resize flex items-center justify-center"
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={onDoubleClick}
            >
                <span className="h-10 rounded-full w-1/3 bg-gray-500 group-hover:h-16 transition-all"></span>
            </div>
        </div>
    )
}

export default LeftPanel
