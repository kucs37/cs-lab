import { RefObject, useRef, useState, useEffect, useCallback } from 'react'
import Window from '../Window'
import CodeMirror from './CodeMirror'

function CodeZone({ tabRef }: { tabRef: RefObject<HTMLDivElement> }) {
    const zoneRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const [width, setWidth] = useState<string>('100%')
    const [maxHeight, setMaxHeight] = useState<string>('100%')
    const handleResize = useCallback(() => {
        setWidth(
            `${tabRef.current?.offsetWidth! - zoneRef.current?.offsetLeft!}px`
        )
        setMaxHeight(`${zoneRef.current?.clientHeight! - windowHeight}px`)
    }, [zoneRef, tabRef, windowHeight])

    useEffect(() => {
        document.addEventListener('resize', handleResize)
        return () => document.removeEventListener('resize', handleResize)
    }, [handleResize])

    return (
        <div ref={zoneRef} className="flex-1 relative">
            <CodeMirror width={width} maxHeight={maxHeight} />

            <Window
                zoneRef={zoneRef}
                windowHeight={windowHeight}
                setWindowHeight={setWindowHeight}
            />
        </div>
    )
}

export default CodeZone
