import { scrollState } from '@store/ScrollSize'
import { useRecoilState } from 'recoil'
import useWindowSize from 'hooks/useWindowSize'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import Theme from './theme'
import { themesI } from '@interface/Themes'
import { useLocalStorage } from 'usehooks-ts'
import { useMediaQuery } from 'usehooks-ts'

function Editor() {
    const [theme] = useLocalStorage<themesI>('theme', 'bespin')
    const [fontSize] = useLocalStorage<string>('fontSize', '16px')
    const [scrollSize] = useRecoilState(scrollState)
    const { width } = useWindowSize()
    const isMd = useMediaQuery('(min-width: 768px)')

    return (
        <div
            className={`bg-white flex flex-col w-full md:mt-0 h-full border-t-2`}
            style={{ width: isMd ? `${width! - scrollSize}px` : '100%' }}
        >
            <CodeMirror
                theme={Theme(theme)}
                placeholder="เขียนโค้ดตรงนี้..."
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
