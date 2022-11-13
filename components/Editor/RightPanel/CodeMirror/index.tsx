import useCodemirror from '@/hooks/useCodemirror'
import { Extension } from '@codemirror/state'

interface Props {
    height: string
    extensions?: Extension[]
}
function CodeMirror({ height, extensions = [] }: Props) {
    const [editorRef, editorView] = useCodemirror(
        {
            initialDoc: "print('Hello World') #test",
            onChange: (value) => console.log(value),
        },
        ...extensions
    )

    return <div ref={editorRef} style={{ height }}></div>
}

export default CodeMirror
