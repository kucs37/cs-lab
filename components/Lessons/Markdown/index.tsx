import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5'
import dynamic from 'next/dynamic'
const CodeEditor = dynamic(() => import('@/components/Lessons/CodeEditor'), {
    ssr: false,
})

export const mdComponents = {
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
        if (node.properties!.name === 'l1') {
            return (
                <div className="flex items-center gap-2">
                    <div className="text-red-500 text-2xl">
                        <IoClose />
                    </div>
                    <input
                        className={`${
                            node.properties!.name === 'l1' && 'border-red-500'
                        } ${className}`}
                        type="text"
                        {...props}
                    />
                </div>
            )
        }

        return (
            <div className="flex items-center gap-2">
                <div className="text-lime-500 text-2xl">
                    <IoCheckmarkSharp />
                </div>

                <input
                    className={`${
                        node.properties!.name === 'l2' && 'border-lime-500'
                    } ${className}`}
                    type="text"
                    {...props}
                />
            </div>
        )
    },
    problem({ node }: any) {
        return <CodeEditor code={node.children} />
    },
}
