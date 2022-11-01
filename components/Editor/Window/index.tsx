import useDrag from '@/hooks/useDrag'
import React, { RefObject, useEffect, useState } from 'react'
import Tabs from './Tabs'
import { WindowT } from '@/interface/Window'
import Submissions from './Submissions'

interface WindowI {
    windowHeight: number
    setWindowHeight: (height: number) => void
    zoneRef: RefObject<HTMLDivElement>
}

function Window({ zoneRef, windowHeight, setWindowHeight }: WindowI) {
    const [active, setActive] = useState<WindowT>('console')
    const { size, setIsDrag } = useDrag(zoneRef, windowHeight, 'height')
    const width = zoneRef.current?.offsetWidth
    useEffect(() => {
        setWindowHeight(size + 83)
    }, [size, setWindowHeight])

    return (
        <div
            className="absolute bottom-0 bg-gray-50 w-full overflow-y-scroll"
            style={{
                minHeight: 16,
                maxHeight: '100%',
                height: windowHeight,
            }}
        >
            {/* Tab Size */}
            <div
                className="h-4 bg-gray-300 cursor-row-resize flex items-center justify-center"
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={() => setWindowHeight(400)}
            >
                <span className="h-1/4 rounded-full w-10 bg-gray-500"></span>
            </div>

            <div className="p-2 cursor-pointer select-none w-fit">
                <h4 className="text-sm font-medium uppercase">CONSOLE</h4>
                <div
                    className={`border-b-2 ${
                        active ? 'border-gray-900' : 'border-none'
                    } px-2`}
                ></div>
            </div>

            {/* Content */}
            <div className="p-2">
                {active === 'console' && <div>Console</div>}
            </div>
        </div>
    )
}

export default Window
