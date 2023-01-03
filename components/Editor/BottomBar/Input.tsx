import React from 'react'
import CodeMirror from '../CodeMirror'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setInput } from '@/store/slices/editorSlice'

function Input() {
    const { input } = useAppSelector((state) => state.editor)
    const dispatch = useAppDispatch()
    return (
        <CodeMirror
            height="100%"
            initialDoc={input ? input : ''}
            value={input ? input : ''}
            onChange={(value) => dispatch(setInput(value))}
        />
    )
}

export default Input
