import useDrag from '@/hooks/useDrag'
import Console from './Console'
import React, { RefObject, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

interface WindowI {
    windowHeight: number
    setWindowHeight: (height: number) => void
    zoneRef: RefObject<HTMLDivElement>
}

function Window({ zoneRef, windowHeight, setWindowHeight }: WindowI) {
    const { size, setIsDrag } = useDrag(zoneRef, windowHeight, 'height')
    const { isConsoleOpen } = useSelector((state: RootState) => state.menus)

    useEffect(() => {
        if (size > 100) setWindowHeight(size + 83)
    }, [size, setWindowHeight])

    return (
        <div
            className="absolute z-30 bottom-0 bg-gray-50 w-full flex-col"
            style={{
                minHeight: 183,
                maxHeight: '100%',
                height: windowHeight,
                display: isConsoleOpen ? 'flex' : 'none',
            }}
        >
            {/* Tab Resize */}
            <div
                className="group w-full h-4 bg-slate-200 hover:bg-slate-300 cursor-row-resize flex items-center justify-center "
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={() => setWindowHeight(200)}
            >
                <span className="h-1/4 rounded-full w-10 bg-gray-500 group-hover:w-16 transition-all"></span>
            </div>

            {/* Console */}
            <Console />
        </div>
    )
}

export default Window
