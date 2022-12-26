import { ReactNode, useEffect } from 'react'
import useCodemirror from '@/components/Editor/CodeMirror/hooks/useCodemirror'
import { useAppSelector } from '@/store/hooks'
import { EditorState } from '@codemirror/state'
import { ghcolors, materialDark, materialDarkCode } from '@/themes'
import useDarkMode from '@/hooks/useDarkMode'
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
    variant?: 'problem' | 'lesson'
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
    variant = 'problem',
}: Props) {
    const { fontSize, tabSize } = useAppSelector((state) => state.editor)
    const { isDarkMode } = useAppSelector((state) => state.theme)
    // const isDarkMode = useDarkMode()
    const theme = isDarkMode
        ? variant === 'problem'
            ? materialDarkCode
            : materialDark
        : ghcolors
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
            ref={editorRef}
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
