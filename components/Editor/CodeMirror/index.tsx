import { ReactNode, useEffect } from 'react'
import useCodemirror from '@/hooks/useCodemirror'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

interface Props {
    value: string
    onChange?: (code: string) => void
    onKeyDown?: (key: KeyboardEvent) => void
    height: string
    width?: number
    children?: ReactNode
    readonly?: boolean
}

function CodeMirror({
    value,
    onChange,
    onKeyDown,
    width,
    height,
    children,
    readonly,
}: Props) {
    const { fontSize, tabSize } = useSelector(
        (state: RootState) => state.editor
    )
    const { editorRef, editorView } = useCodemirror({
        onChange,
        onKeyDown,
        tabSize,
        readonly,
    })

    useEffect(() => {
        if (!editorView) return
        const doc = editorView.state.doc.toString()
        if (doc !== value)
            editorView.dispatch(
                editorView.state.update({
                    changes: { from: 0, to: doc.length, insert: value },
                })
            )
    }, [editorView, value])

    return (
        <div ref={editorRef} style={{ width, height, fontSize }}>
            {children}
        </div>
    )
}

export default CodeMirror
