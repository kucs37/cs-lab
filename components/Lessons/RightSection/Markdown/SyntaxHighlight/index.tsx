import { CSSProperties } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from './styles/index.module.css'
interface Props {
    children: string
    language: string
}
function SyntaxHighlight({ children, language }: Props) {
    return (
        <SyntaxHighlighter
            language={language}
            style={materialDark}
            customStyle={{ margin: '10px 0px' , borderRadius: '10px'}}
        >
            {children}
        </SyntaxHighlighter>
    )
}

export default SyntaxHighlight
