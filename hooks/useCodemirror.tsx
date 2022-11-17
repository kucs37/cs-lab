import { useEffect, useRef } from 'react'
import { basicSetup } from 'codemirror'
import { EditorState, Compartment } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { python } from '@codemirror/lang-python'
import { indentLess, insertTab } from '@codemirror/commands'
import { ayuLight, dracula } from 'thememirror'

interface Props {
    onChange?: (value: string) => void
    onKeyDown?: (key: KeyboardEvent) => void
    tabSize?: number
    readonly?: boolean
}

const baseTheme = EditorView.baseTheme({
    '&': {
        height: '100%',
    },
    '&.cm-editor.cm-focused': {
        outline: 'none',
    },
})

const _tabSize = new Compartment(),
    _readonly = new Compartment()

function useCodemirror({ onChange, onKeyDown, tabSize, readonly }: Props): {
    editorRef: React.RefObject<HTMLDivElement>
    editorView: EditorView | undefined
} {
    const editorRef = useRef<HTMLDivElement>(null)
    const viewRef = useRef<EditorView>()
    useEffect(() => {
        if (!editorRef.current) return
        const state = EditorState.create({
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
                _tabSize.of(EditorState.tabSize.of(4)),
                _readonly.of(EditorState.readOnly.of(false)),
                EditorView.updateListener.of((update) => {
                    if (update.docChanged) {
                        if (onChange) onChange(update.state.doc.toString())
                    }
                }),
                EditorView.domEventHandlers({
                    keydown: (key) => onKeyDown && onKeyDown(key),
                }),
            ],
        })
        const view = new EditorView({
            state,
            parent: editorRef.current,
        })

        viewRef.current = view

        return () => view.destroy()
    }, [editorRef])

    //  Tab Size Change Detect
    useEffect(() => {
        if (!viewRef.current || !tabSize) return
        viewRef.current.dispatch({
            effects: _tabSize.reconfigure(EditorState.tabSize.of(tabSize)),
        })
    }, [viewRef, _tabSize, tabSize])

    //  Readonly Change Detect
    useEffect(() => {
        if (!viewRef.current || !readonly) return
        viewRef.current.dispatch({
            effects: _readonly.reconfigure(EditorState.readOnly.of(readonly)),
        })
    }, [viewRef, _readonly, readonly])

    return { editorRef, editorView: viewRef.current }
}

export default useCodemirror
