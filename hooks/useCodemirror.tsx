import { useState, useEffect, useRef } from 'react'
import { basicSetup, EditorView } from 'codemirror'
import { EditorState, Compartment } from '@codemirror/state'
import { python } from '@codemirror/lang-python'
interface Props {}

export default function useCodemirror() {
    const [editorView, setEditorView] = useState<EditorView>()
    const editor = useRef<HTMLDivElement | null>(null)

    let lang = new Compartment(),
        tabSize = new Compartment()

    let state = EditorState.create({
        extensions: [
            basicSetup,
            lang.of(python()),
            tabSize.of(EditorState.tabSize.of(8)),
        ],
    })

    useEffect(() => {
        if (!editor.current) return

        let view = new EditorView({
            state,
            parent: editor.current,
        })

        setEditorView(view)
    }, [editor])

    return [editor, editorView]
}
