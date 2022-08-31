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

function Editor() {
    const [theme] = useLocalStorage<themesI>('theme', 'bespin')
    const [fontSize] = useLocalStorage<string>('fontSize', '16px')
    const [scrollSize] = useRecoilState(scrollState)
    const [{ code }] = useRecoilState(problemState)
    const { width } = useWindowSize()
    const isMd = useMediaQuery('(min-width: 768px)')
    const [sourceCode, setSourceCode] = useState<string>(code)

    const handleOnChange = useCallback((value: string, update: ViewUpdate) => {
        setSourceCode(value)
    }, [])

    useEffect(() => {
        setSourceCode(code)
    }, [code])

    return (
        <div
            className={`bg-white flex flex-col w-full h-full border-t-2`}
            style={{ width: isMd ? `${width! - scrollSize}px` : '100%' }}
        >
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
