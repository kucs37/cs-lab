import { MDXRemote } from 'next-mdx-remote'
import Badge from '@/components/Common/Badge'
import MDInput from './MDInput'
import SyntaxHighlight from './SyntaxHighlight'
import CodeBlock from './Codeblock'

interface Props {
    labMD: any
}

const components = { Badge, MDInput, SyntaxHighlight, CodeBlock }
const Markdown = ({ labMD }: Props) => {
    return (
        <div className="prose dark:prose-headings:text-ascent-1 dark:text-ascent-1 dark:prose-code:text-ascent-1 max-w-full">
            <MDXRemote {...labMD} components={components} />
        </div>
    )
}

export default Markdown
