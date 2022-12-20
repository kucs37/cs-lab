import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React from 'react'
import CodeMirror from '../CodeMirror'
import Header from './Header'
import { setCode } from '@/store/slices/editorSlice'

function Editor() {
    const { code } = useAppSelector((state) => state.editor)
    const dispatch = useAppDispatch()

    const handleOnKeyDown = (key: KeyboardEvent) => {
        // if (!specialKeyCode.includes(key.key)) setstatus('saving')
    }
    return (
        <div
            className="rounded-xl overflow-hidden flex-1 flex flex-col bg-white dark:bg-[#33373A]"
            style={{ minHeight: 200 }}
        >
            <Header />

            <CodeMirror
                value={code}
                onChange={(value) => dispatch(setCode(value))}
                onKeyDown={handleOnKeyDown}
                height="100%"
            />
        </div>
    )
}

export default Editor