import useDrag from '@/hooks/useDrag'
import Console from './Console'
import React, { RefObject, useEffect } from 'react'
import SaveStatus from './SaveStatus'

interface WindowI {
    windowHeight: number
    setWindowHeight: (height: number) => void
    zoneRef: RefObject<HTMLDivElement>
}

function Window({ zoneRef, windowHeight, setWindowHeight }: WindowI) {
    const { size, setIsDrag } = useDrag(zoneRef, windowHeight, 'height')

    useEffect(() => {
        if (size > 16) setWindowHeight(size + 83)
    }, [size, setWindowHeight])

    return (
        <div
            className="absolute bottom-0 bg-gray-50 w-full flex flex-col"
            style={{
                minHeight: 16,
                maxHeight: '100%',
                height: windowHeight,
            }}
        >
            {/* Tab Resize */}
            <div
                className="w-full h-4 bg-slate-200 cursor-row-resize flex items-center justify-center"
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={() => setWindowHeight(200)}
            >
                <span className="h-1/4 rounded-full w-10 bg-gray-500"></span>
            </div>

            {/* Console */}
            <Console />
        </div>
    )
}

export default Window
