import { useRef, useState, useEffect } from 'react'
import BottomBar from './BottomBar'
import CodeMirror from '../CodeMirror'
import { BsCheck2All, BsTerminal } from 'react-icons/bs'
import SaveStatus from '../SaveStatus'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { openConsole } from '@/store/slices/menuSlice'
import { setCode } from '@/store/slices/editorSlice'

import { specialKeyCode } from '@/utils'
import useDrag from '@/hooks/useDrag'

function RightPanel() {
    const zoneRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const [codeMirrorHeight, setCodeMirrorHeight] =
        useState<string>(`calc(100% - 58px)`)
    const [status, setstatus] = useState<'saving' | 'saved'>('saved')

    const { size, setIsDrag } = useDrag(zoneRef, windowHeight, 'height')

    useEffect(() => {
        setWindowHeight(size + 83)
    }, [size])

    const { code } = useAppSelector((state) => state.editor)
    const { isConsoleOpen } = useAppSelector((state) => state.menu)
    const dispatch = useAppDispatch()

    const handleOnKeyDown = (key: KeyboardEvent) => {
        if (!specialKeyCode.includes(key.key)) setstatus('saving')
    }

    const handleOnRun = () => {
        dispatch(openConsole())
    }

    useEffect(() => {
        if (status === 'saving') {
            setTimeout(() => {
                setstatus('saved')
            }, 1000)
        }
    }, [status])

    useEffect(() => {
        setCodeMirrorHeight(`calc(100% - ${windowHeight + 58}px)`)
    }, [windowHeight])

    return (
        <div
            style={{
                minWidth: 400,
            }}
            ref={zoneRef}
            className="flex-1 relative flex flex-col"
        >
            <div className="rounded-xl overflow-hidden flex-1 flex flex-col bg-white">
                <div className="border-b py-2 px-4 flex justify-between flex-1">
                    <SaveStatus status={status} />
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleOnRun}
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

                <CodeMirror
                    value={code}
                    onChange={(value) => dispatch(setCode(value))}
                    onKeyDown={handleOnKeyDown}
                    height='100%'
                />
            </div>

            <div
                className="group w-full h-8 bg-gray-100  cursor-row-resize flex items-center justify-center "
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={() => setWindowHeight(200)}
            >
                <span className="h-1/6 rounded-full w-10 bg-gray-500 group-hover:w-16 transition-all"></span>
            </div>

            <BottomBar zoneRef={zoneRef} windowHeight={windowHeight} />
        </div>
    )
}

export default RightPanel
