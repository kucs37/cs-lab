import { useAppSelector } from '@/store/hooks'
import CodeMirror from '../CodeMirror'

function Output() {
    const { output } = useAppSelector((state) => state.editor)

    return (
        <CodeMirror
            height="100%"
            initialDoc={output ? output : ''}
            value={output ? output : ''}
            readonly
        />
    )
}

export default Output
