import useDrag from '@/hooks/useDrag'
import Console from './Console'
import { RefObject, useEffect, useState } from 'react'
import { useAppSelector } from '@/store/hooks'

interface WindowI {
    zoneRef: RefObject<HTMLDivElement>
}

function Window({ zoneRef }: WindowI) {
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const { size, setIsDrag } = useDrag(zoneRef, windowHeight, 'height')
    const { isConsoleOpen } = useAppSelector((state) => state.menu)

    useEffect(() => {
        setWindowHeight(size + 83)
    }, [size])

    if (!isConsoleOpen) return null
    return (
        <>
            <div
                className="group w-full h-8 bg-gray-100  cursor-row-resize flex items-center justify-center "
                style={{ minHeight: '2rem' }}
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={() => setWindowHeight(200)}
            >
                <span className="h-1/6 rounded-full w-10 bg-gray-500 group-hover:w-16 transition-all"></span>
            </div>
            <div
                className="bg-white w-full flex flex-col rounded-xl"
                style={{
                    minHeight: 183,
                    maxHeight: '100%',
                    height: windowHeight,
                }}
            >
                {/* Console */}
                <Console />
            </div>
        </>
    )
}

export default Window
