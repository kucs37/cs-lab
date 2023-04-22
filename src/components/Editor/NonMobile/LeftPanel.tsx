import { useRef, useState, useEffect } from 'react'
import useDrag from '@/hooks/useDrag'
import Description from '../Description'
import Badge from '@/components/Common/Badge'

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
            <div className="p-4 overflow-y-scroll bg-white dark:bg-secondary-1 border dark:border-secondary-2 rounded-xl overflow-hidden">
                <div className="break-words">
                    <Badge title="อ่านอย่างเดียว" />
                    <h4 className="text-lime-600 mt-2">
                        CS Python Lab 01 Problems
                    </h4>
                </div>
                <Description />
            </div>

            {/* Tab Resize */}

            <div
                className="group flex-shrink-0 w-6 h-full dark:bg-primary-1 cursor-col-resize flex items-center justify-center"
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={onDoubleClick}
            >
                <span className="h-10 rounded-full w-1/5 bg-gray-500 group-hover:h-16 transition-all"></span>
            </div>
        </div>
    )
}

export default LeftPanel
