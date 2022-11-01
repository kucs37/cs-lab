import { RefObject, useRef, useState } from 'react'
import Window from '../Window'
import CodeMirror from './CodeMirror'

function CodeZone({ tabRef }: { tabRef: RefObject<HTMLDivElement> }) {
    const zoneRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState<number>(200)

    return (
        <div ref={zoneRef} className="flex-1 relative">
            <CodeMirror
                width={`${
                    tabRef.current?.offsetWidth! - zoneRef.current?.offsetLeft!
                }px`}
                maxHeight={`${zoneRef.current?.clientHeight! - windowHeight}px`}
            />

            <Window
                zoneRef={zoneRef}
                windowHeight={windowHeight}
                setWindowHeight={setWindowHeight}
            />
        </div>
    )
}

export default CodeZone
