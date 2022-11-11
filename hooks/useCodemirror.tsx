import { useState, useEffect, useRef, useCallback } from 'react'
import { EditorState } from '@codemirror/state'
import { python } from '@codemirror/lang-python'
import { basicSetup } from 'codemirror'
import { EditorView } from '@codemirror/view'
import { ayuLight } from 'thememirror'

interface Props {
    initialDoc: string
    onChange: (value: string) => void
}

const baseTheme = EditorView.baseTheme({
    '&': {
        height: '100%',
    },
    "&.cm-editor.cm-focused": {
        outline: "none"
    }
})

function useCodemirror({
    initialDoc,
    onChange,
}: Props): [React.RefObject<HTMLDivElement>, EditorView?] {
    const editorRef = useRef<HTMLDivElement>(null)
    const [editorView, setEditorView] = useState<EditorView>()

    useEffect(() => {
        if (!editorRef.current) return

        const state = EditorState.create({
            doc: initialDoc,
            extensions: [basicSetup, python(), baseTheme, ayuLight],
        })

        const view = new EditorView({
            state,
            parent: editorRef.current,
        })

        setEditorView(view)

        return () => view.destroy()
    }, [editorRef, initialDoc])

    return [editorRef, editorView]
}

export default useCodemirror
