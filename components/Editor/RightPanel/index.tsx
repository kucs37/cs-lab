import { useRef, useState, useEffect } from 'react'
import BottomBar from '../BottomBar'
import CodeMirror from './CodeMirror'
import { BsCheck2All, BsTerminal, BsPlay } from 'react-icons/bs'
import { EditorState } from '@codemirror/state'
import SaveStatus from '../SaveStatus'

function CodeZone() {
    const zoneRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const codeMirrorHeight = `calc(100% - ${windowHeight + 68}px)`
    const [status, setstatus] = useState<'saving' | 'saved'>('saving')

    const onClick = () => {
        if (status == 'saving') setstatus('saved')
        else setstatus('saving')
    }

    return (
        <div ref={zoneRef} className="flex-1 relative">
            <div className="bg-white border-b-1 py-2 px-4 flex justify-between">
                <SaveStatus status={status} />
                <div className="flex items-center gap-2">
                    <button
                        onClick={onClick}
                        className="bg-lime-400 border-b-4 active:border-b-2 transition-all duration-50 border-lime-500 text-lime-800  py-2 px-4 rounded-lg flex items-center gap-1"
                    >
                        <BsTerminal />
                        Run
                    </button>

                    <button className="bg-yellow-400 border-b-4 active:border-b-2  transition-all duration-50 border-yellow-500 text-yellow-800 py-2 px-4 rounded-lg flex items-center gap-1 ">
                        <BsCheck2All />
                        Submit
                    </button>
                </div>
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
