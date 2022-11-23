import { MDXRemote } from 'next-mdx-remote'
import Badge from '@/components/Common/Badge'
import MDInput from './MDInput'
import SyntaxHighlight from './SyntaxHighlight'

interface Props {
    labMD: any
}

const components = { Badge, MDInput, SyntaxHighlight }
const Markdown = ({ labMD }: Props) => {
    return (
        <div className="prose max-w-full">
            <MDXRemote {...labMD} components={components} />
        </div>
    )
}

export default Markdown
