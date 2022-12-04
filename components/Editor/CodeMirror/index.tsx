import { ReactNode, useEffect } from 'react'
import useCodemirror from '@/components/Editor/CodeMirror/hooks/useCodemirror'
import { useAppSelector } from '@/store/hooks'
import { EditorState } from '@codemirror/state'
import { ayuLight, dracula, amy } from 'thememirror'
import { ghcolors } from './themes/ghcolors'
interface Props {
    initialDoc?: string
    value: string
    onChange?: (code: string) => void
    onKeyDown?: (key: KeyboardEvent) => void
    height: string
    width?: number
    children?: ReactNode
    readonly?: boolean
    readOnlyRanges?: (
        targetState: EditorState
    ) => Array<{ from: number | undefined; to: number | undefined }>
}

function CodeMirror({
    initialDoc,
    value,
    onChange,
    onKeyDown,
    width,
    height,
    children,
    readonly,
    readOnlyRanges,
}: Props) {
    const { fontSize, tabSize } = useAppSelector((state) => state.editor)
    const { editorRef, editorView } = useCodemirror({
        initialDoc,
        onChange,
        onKeyDown,
        tabSize,
        readonly,
        readOnlyRanges,
        theme: ghcolors,
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
        <div
            ref={editorRef}
            style={{
                width,
                height,
                fontSize,
            }}
        >
            {children}
        </div>
    )
}

export default CodeMirror
