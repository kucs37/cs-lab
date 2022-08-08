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
const Select = dynamic(() => import('../Common/Select'), { ssr: false })

function Editor() {
    const [scrollSize, setScrollSize] = useRecoilState(scrollState)
    const { width } = useWindowSize()
    const [theme, setTheme] = useLocalStorage<themesI>('theme', 'bespin')
    const [fontSize, setFontSize] = useLocalStorage<string>('fontSize', '16px')

    return (
        <div
            className={`bg-white flex flex-col w-full  mt-10 md:mt-0 h-full`}
            style={{ width: `${width! - scrollSize}px` }}
        >
            <div className="flex justify-between items-center gap-2 p-2">
                <div className="flex items-center gap-2">
                    <Select
                        onSelect={(value) => setTheme(value as themesI)}
                        selected={theme}
                        options={themes.map(({ name }) => name)}
                    />
                    <Select
                        onSelect={(value) => setFontSize(value)}
                        selected={fontSize}
                        options={[
                            '12px',
                            '14px',
                            '16px',
                            '18px',
                            '20px',
                            '22px',
                            '24px',
                            '26px',
                            '28px',
                            '30px',
                            '32px',
                            '34px',
                            '36px',
                            '38px',
                            '40px',
                        ]}
                    />
                </div>
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
                style={{ fontSize }}
                className="h-full overflow-y-scroll md:pl-2"
            />
        </div>
    )
}

export default Editor
