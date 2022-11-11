import { useRef, useState } from 'react'
import Window from '../Window'
import CodeMirror from './CodeMirror'

function CodeZone() {
    const zoneRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState<number>(200)

    return (
        <div ref={zoneRef} className="w-full relative">
            <CodeMirror />
            
            <Window
                zoneRef={zoneRef}
                windowHeight={windowHeight}
                setWindowHeight={setWindowHeight}
            />
        </div>
    )
}

export default CodeZone
