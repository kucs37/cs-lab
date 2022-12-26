import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React from 'react'
import CodeMirror from '../CodeMirror'
import Header from './Header'
import { setCode } from '@/store/slices/editorSlice'
import { ghcolors, materialDarkCode } from '@/themes'
import useDarkMode from '@/hooks/useDarkMode'

function Editor() {
    const { code } = useAppSelector((state) => state.editor)
    const dispatch = useAppDispatch()
    const isDarkMode = useDarkMode()

    const handleOnKeyDown = (key: KeyboardEvent) => {
        // if (!specialKeyCode.includes(key.key)) setstatus('saving')
    }

    return (
        <div
            className="rounded-xl overflow-hidden flex-1 flex flex-col bg-white dark:bg-[#33373A] border dark:border-[#6B6B6B]"
            style={{ minHeight: 200 }}
        >
            <Header />

            <CodeMirror
                theme={true ? materialDarkCode : ghcolors}
                initialDoc={code}
                value={code}
                onChange={(value) => dispatch(setCode(value))}
                onKeyDown={handleOnKeyDown}
                height="100%"
            />
        </div>
    )
}

export default Editor
