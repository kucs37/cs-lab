import { useState, useEffect, ChangeEvent } from 'react'
import { scrollState } from '@store/ScrollSize'
import { useRecoilState } from 'recoil'
import useWindowSize from 'hooks/useWindowSize'
import { BsFillPlayFill, BsCheck } from 'react-icons/bs'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import Theme, { themes } from './theme'
import { themesI } from '@interface/Themes'
import dynamic from 'next/dynamic'

import { useLocalStorage } from 'usehooks-ts'
const ThemeSelect = dynamic(() => import('./ThemeSelect'), { ssr: false })

function Editor() {
    const [scrollSize, setScrollSize] = useRecoilState(scrollState)
    const { width } = useWindowSize()
    const [theme, setTheme] = useLocalStorage<themesI>('theme', 'bespin')

    return (
        <div
            className={`bg-white flex flex-col w-full  mt-10 md:mt-0 h-full`}
            style={{ width: `${width! - scrollSize}px` }}
        >
            <div className="flex justify-between items-center gap-2 p-2">
                <ThemeSelect
                    onSelect={(value: themesI) => setTheme(value)}
                    select={theme}
                    options={themes.map(({ name }) => name)}
                />
                <div className="flex items-center gap-2">
                    <button className="self-end flex items-center gap-2 bg-lime-400 w-fit p-2 rounded-md text-white shadow-md">
                        <BsFillPlayFill />
                        Run
                    </button>
                    <button className="self-end flex items-center gap-2 bg-yellow-400 w-fit p-2 rounded-md text-white shadow-md">
                        <BsCheck size="1.5rem" />
                        Submit
                    </button>
                </div>
            </div>

            <CodeMirror
                theme={Theme(theme)}
                minHeight="345px"
                height="100%"
                extensions={[python()]}
                className="h-full overflow-y-scroll md:pl-2"
            />
        </div>
    )
}

export default Editor
