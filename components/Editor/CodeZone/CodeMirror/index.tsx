import useCodemirror from '@/hooks/useCodemirror'

interface Props {
    height: string
}
function CodeMirror({ height }: Props) {
    const [editorRef, editorView] = useCodemirror({
        initialDoc: "print('Hello World') #test",
        onChange: (value) => console.log(value),
    })

    return <div ref={editorRef} style={{ height }}></div>
}

export default CodeMirror
