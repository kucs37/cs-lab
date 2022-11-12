import { useRef, useState } from 'react'
import BottomBar from '../BottomBar'
import CodeMirror from './CodeMirror'

const SaveStatus = () => {
    return (
        <div className="flex items-center">
            <div className="w-1 h-1 rounded-full bg-yellow-500 mr-2 animate-bounce"></div>
            <div className="w-1 h-1 rounded-full bg-yellow-500 mr-2 animate-bounce delay-100"></div>
            <div className="w-1 h-1 rounded-full bg-yellow-500 mr-2 animate-bounce delay-500"></div>
            <span className="text-xs">กำลังเซฟ</span>
        </div>
    )
}
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
