import { useState, useEffect, ChangeEvent } from 'react'
import { scrollState } from '@store/ScrollSize'
import { useRecoilState } from 'recoil'
import useWindowSize from 'hooks/useWindowSize'
import { BsFillPlayFill } from 'react-icons/bs'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import Theme, { themes } from './theme'
import { themesI } from '@interface/Themes'
import dynamic from 'next/dynamic'

import 'react-dropdown/style.css'

import { useLocalStorage } from 'usehooks-ts'
const ThemeSelect = dynamic(() => import('./ThemeSelect'), { ssr: false })

function Editor() {
    const [scrollSize, setScrollSize] = useRecoilState(scrollState)
    const { width } = useWindowSize()
    const [theme, setTheme] = useLocalStorage<themesI>('theme', 'bespin')

    return (
        <div
            className="bg-white flex flex-col w-full ml-2"
            style={{ width: `${width! - scrollSize}px` }}
        >
            <div className="flex justify-between items-center gap-2 p-2">
                <ThemeSelect
                    onSelect={(value: themesI) => setTheme(value)}
                    select={theme}
                    options={themes.map(({ name }) => name)}
                />

                <button className="m-2 self-end flex items-center gap-2 bg-lime-400 w-fit p-2 rounded-md text-white shadow-md">
                    <BsFillPlayFill />
                    Run
                </button>
            </div>

            <CodeMirror
                theme={Theme(theme)}
                height="100%"
                extensions={[python()]}
                className="w-full h-full overflow-scroll"
            />

            <div className="w-full h-24 bg-gray-500"></div>
        </div>
    )
}

export default Editor
