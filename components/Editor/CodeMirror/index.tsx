import { ReactNode, useEffect } from 'react'
import useCodemirror from '@/components/Editor/CodeMirror/hooks/useCodemirror'
import { useAppSelector } from '@/store/hooks'
import { EditorState, Extension } from '@codemirror/state'
import { ghcolors } from '@/themes'
interface Props {
    initialDoc?: string
    value?: string
    onChange?: (code: string) => void
    onKeyDown?: (key: KeyboardEvent) => void
    height: string
    width?: number
    children?: ReactNode
    readonly?: boolean
    readOnlyRanges?: (
        targetState: EditorState
    ) => Array<{ from: number | undefined; to: number | undefined }>
    theme?: Extension
}

function CodeMirror({
    initialDoc = '',
    value,
    onChange,
    onKeyDown,
    width,
    height,
    children,
    readonly,
    readOnlyRanges,
    theme = ghcolors,
}: Props) {
    const { fontSize, tabSize } = useAppSelector((state) => state.editor)
    const { isDarkMode } = useAppSelector((state) => state.theme)
    const { editorRef, editorView } = useCodemirror({
        initialDoc,
        onChange,
        onKeyDown,
        tabSize,
        readonly,
        readOnlyRanges,
        theme,
    })

    useEffect(() => {
        if (!editorView || value === undefined) return
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
            ref={isDarkMode ? editorRef : null}
            style={{
                width,
                height,
                fontSize,
            }}
            className="overflow-hidden bg-white dark:bg-[#33373A]"
        >
            {children}
        </div>
    )
}

export default CodeMirror
