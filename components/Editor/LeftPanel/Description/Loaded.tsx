import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css'
import { FindAB } from '@/fakeData'

function Loaded() {
    return (
        <>
            <div>
                <h1 className="text-xl font-bold">
                    09 Find a, b in which a*b=n and (a+b) is the lowest
                </h1>

                {/* Test case */}
                <div className="flex items-center flex-wrap bg-gray-200 text-black rounded-lg py-1 px-2 w-fit my-2 font-bold text-sm">
                    <span>P</span>
                    <span>P</span>
                    <span>C</span>
                    <span>P</span>
                    <span>C</span>
                    <span>P</span>
                    <span>S</span>
                    <span>P</span>
                    <span>-</span>
                    <span>P</span>
                    <span>S</span>
                    <span>P</span>
                    <span>C</span>
                    <span>S</span>
                    <span>P</span>
                    <span>C</span>
                    <span>S</span>
                    <span>P</span>
                    <span>C</span>
                    <span>S</span>
                    <span>P</span>
                </div>
            </div>
            <div className="prose">
                <ReactMarkdown
                    remarkPlugins={[remarkGFM, remarkMath]}
                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                    children={FindAB}
                />
            </div>
        </>
    )
}

export default Loaded
