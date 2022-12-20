import { useRef } from 'react'
import Editor from '../Editor'
import BottomBar from '../BottomBar'
function Code() {
    const zoneRef = useRef<HTMLDivElement>(null)
    return (
        <div ref={zoneRef} className="flex flex-col h-full">
            <Editor />
            {/* <BottomBar zoneRef={zoneRef} /> */}
        </div>
    )
}

export default Code
