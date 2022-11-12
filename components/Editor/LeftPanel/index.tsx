import Description from '../Description'
import Navigation from '../Navigation/SideNav'
import useDrag from '@/hooks/useDrag'
import { useRef, useState, useEffect } from 'react'
function LeftPanel() {
    const [windowWidth, setWindowWidth] = useState<number>(688)
    const leftPanelRef = useRef<HTMLDivElement>(null)
    const { size, setIsDrag } = useDrag(leftPanelRef, windowWidth, 'width')

    useEffect(() => {
        setWindowWidth(size)
    }, [size])

    return (
        <div
            ref={leftPanelRef}
            className="flex justify-between  max-w-max"
            style={{ minWidth: 320, width: windowWidth }}
        >
            <div className="p-4 h-full overflow-y-scroll">
                <Navigation />
                <hr className="h-4" />
                <Description />
            </div>
            <div
                className="flex-shrink-0 w-3 h-full bg-slate-200 cursor-col-resize flex items-center justify-center"
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={() => setWindowWidth(400)}
            >
                <span className="h-10 rounded-full w-1/3 bg-gray-500"></span>
            </div>
        </div>
    )
}

export default LeftPanel
