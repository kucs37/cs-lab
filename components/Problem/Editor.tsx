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
import { MenuItem } from '@mui/material'
const Console = dynamic(() => import('./Console'), { ssr: false })
const Select = dynamic(() => import('@mui/material/Select'), { ssr: false })

function Editor() {
    const [scrollSize, setScrollSize] = useRecoilState(scrollState)
    const { width } = useWindowSize()
    const [theme, setTheme] = useLocalStorage<themesI>('theme', 'bespin')
    const [fontSize, setFontSize] = useLocalStorage<string>('fontSize', '16px')

    const handleChangeTheme = (event: any) => {
        const {
            target: { value },
        } = event
        setTheme(value)
    }

    const handleChangeFont = (event: any) => {
        const {
            target: { value },
        } = event
        setFontSize(value)
    }

    return (
        <div
            className={`bg-white flex flex-col w-full  mt-10 md:mt-0 h-full`}
            style={{ width: `${width! - scrollSize}px` }}
        >
            <div className="flex flex-wrap md:justify-between justify-center items-center gap-2 p-2">
                <div className="flex items-center gap-2">
                    <Select
                        size="small"
                        value={theme}
                        sx={{ maxWidth: 300 }}
                        onChange={handleChangeTheme}
                    >
                        {themes.map(({ name }, id) => (
                            <MenuItem key={id} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                    <Select
                        size="small"
                        value={fontSize}
                        sx={{ width: 100 }}
                        onChange={handleChangeFont}
                    >
                        {[
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
                        ].map((size, id) => (
                            <MenuItem key={id} value={size}>
                                {size}
                            </MenuItem>
                        ))}
                    </Select>
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
            <div className="relative h-full flex flex-col">
                <CodeMirror
                    theme={Theme(theme)}
                    minHeight="345px"
                    height="100%"
                    extensions={[python()]}
                    style={{ fontSize }}
                    className="h-full overflow-y-scroll"
                />
                <Console />
            </div>
        </div>
    )
}

export default Editor
