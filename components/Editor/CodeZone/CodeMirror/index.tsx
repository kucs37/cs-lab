import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { RefObject } from 'react'
interface CodeMirrorI {
    width: string
    maxHeight: string
}

function CodeMirrorComponent({ width, maxHeight }: CodeMirrorI) {
    console.log(width);
    
    return (
        <CodeMirror
            // value={sourceCode}
            // onChange={handleOnChange}
            // theme={Theme(theme)}
            placeholder="Write your code here..."
            width={width}
            minHeight="345px"
            height="100%"
            maxHeight={maxHeight}
            extensions={[python()]}
            className="h-full"
        />
    )
}

export default CodeMirrorComponent
