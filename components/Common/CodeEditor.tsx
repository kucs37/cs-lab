import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import Theme from '@/editorTheme/theme'

function CodeEditor() {
    return (
        <CodeMirror
            value={`total = 0
while     
print(total)`}
            theme={Theme('material-dark')}
            placeholder="Write your code here..."
            height="100%"
            extensions={[python()]}
            className="h-full overflow-auto"
        />
    )
}

export default CodeEditor
