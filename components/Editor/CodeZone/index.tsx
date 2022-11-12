import { useRef, useState } from 'react'
import Window from '../Window'
import CodeMirror from './CodeMirror'

function CodeZone() {
    const zoneRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const codeMirrorHeight = `calc(100% - ${windowHeight}px)`
    return (
        <div ref={zoneRef} className="flex-1 relative">
            <CodeMirror height={codeMirrorHeight} />

            <Window
                zoneRef={zoneRef}
                windowHeight={windowHeight}
                setWindowHeight={setWindowHeight}
            />
        </div>
    )
}

export default CodeZone
