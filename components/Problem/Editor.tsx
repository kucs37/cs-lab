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
import RunButton from './Buttons/RunButton'
import SubmitButton from './Buttons/SubmitButton'
import { IoSettingsOutline } from 'react-icons/io5'

function Editor() {
    const [theme] = useLocalStorage<themesI>('theme', 'bespin')
    const [fontSize] = useLocalStorage<string>('fontSize', '16px')
    const [scrollSize] = useRecoilState(scrollState)
    const [{ code }, setProblem] = useRecoilState(problemState)
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
            className={`bg-white flex flex-col flex-1 w-full max-h-full h-full border-t-2 relative`}
            style={{ width: isMd ? `${width! - scrollSize}px` : '100%' }}
        >
            <RunButton onRun={() => {}} />
            <div className="flex justify-between">
                <button
                    className="block md:hidden self-end m-2 p-2 rounded-full shadow-md text-gray-600 bg-white"
                    onClick={() =>
                        setProblem((prev) => ({
                            ...prev,
                            isSettings: true,
                        }))
                    }
                >
                    <IoSettingsOutline size="1.75rem" />
                </button>
                <SubmitButton onSubmit={() => {}} />
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
                className="h-full overflow-auto"
            />
        </div>
    )
}

export default Editor
