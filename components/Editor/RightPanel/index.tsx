import { useRef, useState } from 'react'
import BottomBar from '../BottomBar'
import CodeMirror from './CodeMirror'
import { BsCheck2All, BsTerminal, BsPlay } from 'react-icons/bs'

function CodeZone() {
    const zoneRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const codeMirrorHeight = `calc(100% - ${windowHeight + 58}px)`
    return (
        <div ref={zoneRef} className="flex-1 relative">
            <div className="bg-white border-b-1 p-2 flex justify-end gap-2">
                <button className="bg-lime-400 hover:bg-lime-500  py-2 px-4 rounded-lg flex items-center gap-1 text-gray-800 ">
                    <BsTerminal />
                    Run
                </button>

                <button className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg flex items-center gap-1 text-gray-800">
                    <BsCheck2All />
                    ส่งคำตอบ
                </button>
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
