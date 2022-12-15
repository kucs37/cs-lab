import { CSSProperties } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
    materialDark,
    tomorrow,
    ghcolors,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
interface Props {
    children: string
    language: string
}
function SyntaxHighlight({ children, language }: Props) {
    return (
        <SyntaxHighlighter
            language={language}
            style={materialDark}
            showLineNumbers
            customStyle={{
                fontSize: 18,
                margin: '10px 0px',
                borderRadius: '10px',
                boxShadow:
                    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
        >
            {children}
        </SyntaxHighlighter>
    )
}

export default SyntaxHighlight
