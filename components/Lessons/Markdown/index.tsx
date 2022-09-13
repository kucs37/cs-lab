import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'
import CodeEditor from './CodeEditor'
import MDInput from './MDInput'

const mdComponents = {
    code({ node, inline, className, children, ...props }: any) {
        const match = /language-(\w+[^problem])/.exec(className || '')

        return !inline && match ? (
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={nightOwl}
                language={match[1]}
                PreTag="div"
                className="rounded-md shadow-lg"
                {...props}
            />
        ) : (
            <code {...props}>{String(children).replace(/\n$/, '')}</code>
        )
    },

    input({ node, className, children, ...props }: any) {
        return <MDInput node={node} className={className} {...props} />
    },
    problem({ node }: any) {
        return <CodeEditor code={node.children} />
    },
}

const Markdown = ({ labMD }: { labMD: string }) => {
    return (
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={mdComponents}>
            {labMD}
        </ReactMarkdown>
    )
}

export default Markdown
