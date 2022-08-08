import useCodemirror from 'hooks/useCodemirror'
import { useRef } from 'react'
import { scrollState } from '@store/ScrollSize'
import { useRecoilState } from 'recoil'
import useWindowSize from 'hooks/useWindowSize'

function Editor() {
    const [editor, view] = useCodemirror()
    const [scrollSize, setScrollSize] = useRecoilState(scrollState)
    const { width } = useWindowSize()
    if (typeof window !== undefined) {
        return (
            <div
                className="min-h-0 bg-white"
                style={{ width: `${width! - scrollSize}px` }}
            >
                <div ref={editor}></div>
            </div>
        )
    }
}

export default Editor
