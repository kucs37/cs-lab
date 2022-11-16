import { useState, useEffect, useRef, useMemo } from 'react'
import { basicSetup } from 'codemirror'
import { EditorState, Extension, Compartment } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { python } from '@codemirror/lang-python'
import { indentLess, insertTab } from '@codemirror/commands'
import { ayuLight, dracula } from 'thememirror'

interface Props {
    initialDoc: string
    onChange: (value: string) => void
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

function useCodemirror({
    initialDoc,
    onChange,
    tabSize,
    readonly,
}: Props): [React.RefObject<HTMLDivElement>, EditorView?] {
    const editorRef = useRef<HTMLDivElement>(null)
    const viewRef = useRef<EditorView>()

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
                _tabSize.of(EditorState.tabSize.of(4)),
                _readonly.of(EditorState.readOnly.of(true)),
            ],
        })
        const view = new EditorView({
            state,
            parent: editorRef.current,
        })

        viewRef.current = view

        return () => view.destroy()
    }, [editorRef, initialDoc])

    useEffect(() => {
        if (!viewRef.current || !tabSize) return
        viewRef.current.dispatch({
            effects: _tabSize.reconfigure(EditorState.tabSize.of(tabSize)),
        })
    }, [viewRef, _tabSize, tabSize])

    useEffect(() => {
        if (!viewRef.current || !readonly) return
        viewRef.current.dispatch({
            effects: _readonly.reconfigure(EditorState.readOnly.of(readonly)),
        })
    }, [viewRef, _readonly, readonly])

    return [editorRef, viewRef.current]
}

export default useCodemirror
