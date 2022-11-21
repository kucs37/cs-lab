import { useState, useEffect } from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { visit } from 'unist-util-visit'
import 'highlight.js/styles/a11y-dark.css'
import MDInput from './MDInput'

const filterOnlyHeading = (node: any) => {
    return (
        node.type === 'element' &&
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)
    )
}

interface TOC {
    id: string
    title: string
}

interface Props {
    labMD: string
    setToc: (toc: TOC) => void
}
function Markdown({ labMD, setToc }: Props) {
    const [html, setHtml] = useState('')
    useEffect(() => {
        const content = unified()
            .use(remarkParse)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeRaw)
            .use(rehypeHighlight)
            .use(rehypeFormat)
            .use(
                () => (tree) =>
                    visit(tree, filterOnlyHeading, (node: any) => {
                        const id = String(node.position.end.line)
                        const title = node.children[0].value
                        setToc({ id, title })
                        node.properties.id = id
                        node.properties.style = 'scroll-margin-top : 4rem'
                    })
            )
            .use(rehypeStringify)
            .processSync(labMD)
            .toString()

        setHtml(content)
    }, [])

    return (
        <div
            className="prose max-w-full flex flex-col gap-5"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}

export default Markdown
