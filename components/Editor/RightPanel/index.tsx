import { useRef, useState, useEffect } from 'react'
import BottomBar from '../BottomBar'
import CodeMirror from '../CodeMirror'
import { BsCheck2All, BsTerminal } from 'react-icons/bs'
import SaveStatus from '../SaveStatus'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from '@/store'
import { debounce } from 'lodash'
import { specialKeyCode } from '@/utils'

function RightPanel() {
    const zoneRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const codeMirrorHeight = `calc(100% - ${windowHeight + 68}px)`
    const [status, setstatus] = useState<'saving' | 'saved'>('saved')

    const { code } = useSelector((state: RootState) => state.editor)
    const dispatch = useDispatch<Dispatch>()

    const handleOnKeyDown = (key: KeyboardEvent) => {
        if (!specialKeyCode.includes(key.key)) setstatus('saving')
    }

    useEffect(() => {
        if (status === 'saving') {
            setTimeout(() => {
                setstatus('saved')
            }, 1000)
        }
    }, [status])

    return (
        <div
            style={{
                minWidth: 400,
            }}
            ref={zoneRef}
            className="flex-1 relative"
        >
            <div className="bg-white border-b-1 py-2 px-4 flex justify-between">
                <SaveStatus status={status} />
                <div className="flex items-center gap-2">
                    <button className="bg-lime-400 border-b-4 active:border-b-2 transition-all duration-50 border-lime-500 text-lime-800  py-2 px-4 rounded-lg flex items-center gap-1">
                        <BsTerminal />
                        Run
                    </button>

                    <button className="bg-yellow-400 border-b-4 active:border-b-2  transition-all duration-50 border-yellow-500 text-yellow-800 py-2 px-4 rounded-lg flex items-center gap-1 ">
                        <BsCheck2All />
                        Submit
                    </button>
                </div>
            </div>
            <CodeMirror
                value={code}
                onChange={(value) => dispatch.editor.setCode(value)}
                onKeyDown={handleOnKeyDown}
                height={codeMirrorHeight}
            />
            <BottomBar
                zoneRef={zoneRef}
                windowHeight={windowHeight}
                setWindowHeight={setWindowHeight}
            />
        </div>
    )
}

export default RightPanel
