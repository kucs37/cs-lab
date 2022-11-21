import { MDXRemote } from 'next-mdx-remote'
import Badge from '@/components/Common/Badge'
import MDInput from './MDInput'
import SyntaxHighlighter from 'react-syntax-highlighter'

interface Props {
    labMD: any
}

const components = { Badge, MDInput, SyntaxHighlighter }
const Markdown = ({ labMD }: Props) => {
    return (
        <div className="prose max-w-full">
            <MDXRemote {...labMD} components={components} />
        </div>
    )
}

export default Markdown
