import useCodemirror from '@/hooks/useCodemirror'

function CodeMirror() {
    const [editorRef, editorView] = useCodemirror({
        initialDoc: "print('Hello World') #test",
        onChange: (value) => console.log(value),
    })

    return <div ref={editorRef} className="h-full"></div>
}

export default CodeMirror
