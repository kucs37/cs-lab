import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
function CodeMirrorComponent() {
    return (
        <CodeMirror
            // value={sourceCode}
            // onChange={handleOnChange}
            // theme={Theme(theme)}
            placeholder="Write your code here..."
            minHeight="345px"
            height="100%"
            // maxHeight={`300px`}
            extensions={[python()]}
            className="h-full"
        />
    )
}

export default CodeMirrorComponent
