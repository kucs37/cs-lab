import useDrag from '@/hooks/useDrag'
import Console from './Console'
import { RefObject, useEffect } from 'react'
import { useAppSelector } from '@/store/hooks'

interface WindowI {
    windowHeight: number
    zoneRef: RefObject<HTMLDivElement>
}

function Window({ zoneRef, windowHeight }: WindowI) {
    const { size, setIsDrag } = useDrag(zoneRef, windowHeight, 'height')
    const { isConsoleOpen } = useAppSelector((state) => state.menu)

    return (
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
    )
}

export default Window
