import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { FindAB } from '@/fakeData'
import 'katex/dist/katex.min.css'

function Markdown() {
    return (
        <div className="prose max-w-full dark:prose-headings:text-[#E0E2E8] dark:text-[#E0E2E8] dark:prose-code:text-[#E0E2E8] dark:prose-strong:text-[#E0E2E8]">
            <ReactMarkdown
                remarkPlugins={[remarkGFM, remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                children={FindAB}
            />
        </div>
    )
}

export default Markdown
