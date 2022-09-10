import useWindowSize from 'hooks/useWindowSize'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import Theme from '@/editorTheme/theme'
import { themesI } from '@/interface/Themes'
import { useLocalStorage, useMediaQuery, useElementSize } from 'usehooks-ts'

import { useState, useCallback, useEffect } from 'react'
import { ViewUpdate } from '@codemirror/view'
import RunButton from './Buttons/RunButton'
import SubmitButton from './Buttons/SubmitButton'
import { IoSettingsOutline } from 'react-icons/io5'
import { useProblemContext } from '@/Context/Problem'

function Editor() {
    const [theme] = useLocalStorage<themesI>('theme', 'bespin')
    const [fontSize] = useLocalStorage<string>('fontSize', '16px')
    const { scrollSize, code, setIsSettings } = useProblemContext()

    const { width } = useWindowSize()
    const isMd = useMediaQuery('(min-width: 768px)')
    const [sourceCode, setSourceCode] = useState<string>(code)
    const [frame, { height: frameHeight }] = useElementSize()
    const [topSection, { height: topSectionHeight }] = useElementSize()

    useEffect(() => {
        setSourceCode(code)
    }, [code])

    const handleOnChange = useCallback((value: string, update: ViewUpdate) => {
        setSourceCode(value)
    }, [])

    const handleOnRun = () => {
        console.log(frameHeight)
        console.log(topSectionHeight)
    }

    return (
        <div
            className="flex-1 md:flex-auto flex flex-col"
            style={{
                width: isMd ? `${width! - scrollSize}px` : '100%',
            }}
            ref={frame}
        >
            <RunButton onRun={handleOnRun} />
            <div className="flex justify-between" ref={topSection}>
                <button
                    className="block md:hidden self-end m-2 p-2 rounded-full shadow-md text-gray-600 bg-white"
                    onClick={() => setIsSettings(true)}
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
                maxHeight={`${frameHeight - topSectionHeight}px`}
                extensions={[python()]}
                style={{ fontSize }}
                className="h-full"
            />
        </div>
    )
}

export default Editor
