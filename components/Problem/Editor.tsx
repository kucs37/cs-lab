import { scrollState } from '@/store/ScrollSize'
import { problemState } from '@/store/ProblemState'
import { useRecoilState } from 'recoil'
import useWindowSize from 'hooks/useWindowSize'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import Theme from './theme'
import { themesI } from '@/interface/Themes'
import { useLocalStorage } from 'usehooks-ts'
import { useMediaQuery } from 'usehooks-ts'
import { useState, useCallback, useEffect } from 'react'
import { ViewUpdate } from '@codemirror/view'
import { BsCheckLg, BsFillPlayFill } from 'react-icons/bs'

function Editor() {
    const [theme] = useLocalStorage<themesI>('theme', 'bespin')
    const [fontSize] = useLocalStorage<string>('fontSize', '16px')
    const [scrollSize] = useRecoilState(scrollState)
    const [{ code }] = useRecoilState(problemState)
    const { width } = useWindowSize()
    const isMd = useMediaQuery('(min-width: 768px)')
    const [sourceCode, setSourceCode] = useState<string>(code)

    useEffect(() => {
        setSourceCode(code)
    }, [code])

    const handleOnChange = useCallback((value: string, update: ViewUpdate) => {
        setSourceCode(value)
    }, [])

    const handleOnRun = () => {}

    return (
        <div
            className={`bg-white flex flex-col w-full h-full border-t-2 relative`}
            style={{ width: isMd ? `${width! - scrollSize}px` : '100%' }}
        >
            <div className="absolute right-4 bottom-4 z-40">
                <div className="relative">
                    <button
                        className="py-2 px-4 w-14 h-14 bg-lime-600 shadow-md rounded-full inline-flex flex-col justify-center items-center gap-2 text-white active:bg-lime-500 peer"
                        onClick={handleOnRun}
                    >
                        <BsFillPlayFill size="1.75rem" />
                    </button>
                    <span
                        className="absolute top-1/2 left-[-8rem] bg-white shadow-md px-2 rounded-full opacity-0 peer-hover:opacity-100 delay-500 transition-opacity duration-300"
                        style={{ transform: 'translateY(-50%)' }}
                    >
                        CMD + Alt + R
                    </span>
                </div>
            </div>
            <div className="flex justify-end p-2 relative">
                <button
                    className="py-2 px-4  bg-yellow-400 rounded-full shadow-md  inline-flex items-center gap-2 text-white active:bg-yellow-500 w-fit peer"
                    onClick={handleOnRun}
                >
                    <BsCheckLg />
                    <h3>Submit</h3>
                </button>
                <div className="z-40 absolute right-4 -bottom-7 bg-white shadow-md rounded-lg px-2 opacity-0 peer-hover:opacity-100 delay-500 transition-opacity duration-300">
                    CMD + ALT + S
                </div>
            </div>

            <CodeMirror
                value={sourceCode}
                onChange={handleOnChange}
                theme={Theme(theme)}
                placeholder="Write your code here..."
                minHeight="345px"
                height="100%"
                extensions={[python()]}
                style={{ fontSize }}
                className="h-full"
            />
        </div>
    )
}

export default Editor
