import { initialDoc } from '@/fakeData/initialDoc'
import useCodemirror from '@/hooks/useCodemirror'
import { Extension } from '@codemirror/state'
import { ReactNode } from 'react'

interface Props {
    width?: number
    height: string
    extensions?: Extension[]
    children?: ReactNode
    [key: string]: any
}

function CodeMirror({
    width,
    height,
    extensions = [],
    children,
    ...props
}: Props) {
    const [editorRef, editorView] = useCodemirror(
        {
            initialDoc,
            onChange: (value) => console.log(value),
        },
        ...extensions
    )

    return (
        <div ref={editorRef} style={{ width, height }} {...props}>
            {children}
        </div>
    )
}

export default CodeMirror
