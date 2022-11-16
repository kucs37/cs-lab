import { useRef, useState, useEffect } from 'react'
import useDrag from '@/hooks/useDrag'
import Problem from './Problem'
import Settings from './Settings'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from '@/store'

function LeftPanel() {
    const [windowWidth, setWindowWidth] = useState<number>(400)
    const leftPanelRef = useRef<HTMLDivElement>(null)
    const { size, setIsDrag } = useDrag(leftPanelRef, windowWidth, 'width')
    const isSettingsOpen = useSelector(
        (state: RootState) => state.menus.isSettingsOpen
    )
    const dispatch = useDispatch<Dispatch>()

    useEffect(() => {
        setWindowWidth(size)
        dispatch.editorWindow.setLeftPanelWidth(size)
    }, [size])

    const onDoubleClick = () => {
        setWindowWidth(400)
        dispatch.editorWindow.setLeftPanelWidth(400)
    }

    return (
        <div
            ref={leftPanelRef}
            className="flex justify-between"
            style={{ minWidth: 320, width: windowWidth }}
        >
            <Problem />

            {/* Tab Resize */}
            <div
                className="flex-shrink-0 w-3 h-full bg-slate-200 cursor-col-resize flex items-center justify-center"
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={onDoubleClick}
            >
                <span className="h-10 rounded-full w-1/3 bg-gray-500"></span>
            </div>
        </div>
    )
}

export default LeftPanel
