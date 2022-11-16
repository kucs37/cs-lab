import { ReactNode } from 'react'
import useCodemirror from '@/hooks/useCodemirror'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

interface Props {
    width?: number
    height: string
    children?: ReactNode
}

function CodeMirror({ width, height, children, ...props }: Props) {
    const { fontSize, tabSize } = useSelector(
        (state: RootState) => state.editor
    )
    const [editorRef, editorView] = useCodemirror({
        initialDoc: '',
        onChange: (value) => console.log(value),
        tabSize,
    })

    return (
        <div ref={editorRef} style={{ width, height, fontSize }} {...props}>
            {children}
        </div>
    )
}

export default CodeMirror
