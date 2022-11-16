import { useState, useEffect, useRef } from 'react'
import { basicSetup } from 'codemirror'
import { EditorState, Extension } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { python } from '@codemirror/lang-python'
import {
    defaultKeymap,
    indentMore,
    indentLess,
    insertTab,
} from '@codemirror/commands'
import { ayuLight } from 'thememirror'

interface Props {
    initialDoc: string
    onChange: (value: string) => void
}

const baseTheme = EditorView.baseTheme({
    '&': {
        height: '100%',
    },
    '&.cm-editor.cm-focused': {
        outline: 'none',
    },
})

function useCodemirror(
    { initialDoc, onChange }: Props,
    ...extensions: Extension[]
): [React.RefObject<HTMLDivElement>, EditorView?] {
    const editorRef = useRef<HTMLDivElement>(null)
    const [editorView, setEditorView] = useState<EditorView>()

    useEffect(() => {
        if (!editorRef.current) return
        const state = EditorState.create({
            doc: initialDoc,
            extensions: [
                basicSetup,
                baseTheme,
                ayuLight,
                python(),
                keymap.of([
                    {
                        key: 'Tab',
                        preventDefault: true,
                        run: insertTab,
                    },
                    {
                        key: 'Shift-Tab',
                        preventDefault: true,
                        run: indentLess,
                    },
                ]),
                ...extensions,
            ],
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
