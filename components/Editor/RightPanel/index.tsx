import { useRef, useState } from 'react'
import BottomBar from '../BottomBar'
import CodeMirror from './CodeMirror'

function CodeZone() {
    const zoneRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const codeMirrorHeight = `calc(100% - ${windowHeight}px)`
    return (
        <div ref={zoneRef} className="flex-1 relative">
            <div className="bg-white border-b-1 p-2 flex justify-center">
                {/* <button className='px-4 py-2 border-2 border-lime-500 rounded-lg'>Run</button> */}
            </div>
            <CodeMirror height={codeMirrorHeight} />
            <BottomBar
                zoneRef={zoneRef}
                windowHeight={windowHeight}
                setWindowHeight={setWindowHeight}
            />
        </div>
    )
}

export default CodeZone
