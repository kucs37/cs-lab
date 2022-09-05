import WithNavbar from '@/layouts/WithNavbar'
import ReactMarkdown from 'react-markdown'
import Breadcrumb from '@/components/Common/Breadcrumb'
import Backto from '@/components/Common/Backto'
import { useRouter } from 'next/router'
import rehypeRaw from 'rehype-raw'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const markdown: string = `
# List (รายการ)
-   เป็นโครงสร้างข้อมูลที่มีให้ในภาษา Python
-   ใช้เก็บข้อมูลได้หลายค่าภายในตัวแปรเดียว
-   เขียนอยู่ในเครื่อง bracket (วงเล็บเหลี่ยม) โดยคั่นข้อมูลแต่ละค่าด้วย comma (,)
-   ชื่อตัวแปรที่เก็บข้อมูลแบบ List ควรเป็น พหูพจน์ เพราะเก็บได้หลายค่า

## ตัวอย่าง List

-   ต้องการ List ของ scores เก็บคะแนนเป็นจำนวนเต็ม โดยมีข้อมูลคือ 60, 70, 85, 66, 70, 0, 15, 9
-   ต้องการ List ของ days เก็บสตริงของวันในสัปดาห์ คือ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'

![List](https://elab.cpe.ku.ac.th/elab_media/supplements/2018/03/28/ListSample.png)

<pre><code class='language-python'>scores = [60, 70, 85, 66, 70, 0, 15, 9]
print(scores)
</code></pre>

<pre><code class='language-python'>days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
print( days )
</code></pre>

## List เก็บข้อมูลต่างชนิดกันได้

<pre><code class='language-python'>student_info = ["John Doe", 20, 167, 78.5]
</code></pre>

## List ไม่มีข้อมูล เรียกว่า Empty List
<pre><code class='language-python'>emp = []
print(emp)
</code></pre>

## แบบฝึกหัด

1. ประกาศ List ของจำนวนเฉพาะ ให้ชื่อตัวแปรว่า primes โดยมีข้อมูลเป็นจำนวนเฉพาะ 10 จำนวนแรก

2. ประกาศ List ของข้อมูลใด ๆ ให้ชื่อตัวแปรว่า data โดยมีข้อมูล 15 ตัว
`

const CodeBlock = {
    code({
        node,
        inline,
        className,
        children,
        ...props
    }: {
        node: any
        inline: string
        className: string
        children: string
        props: any
    }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter
                style={materialDark}
                language={match![1]}
                PreTag="div"
                {...props}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        )
    },
}

function LabID() {
    const router = useRouter()
    const backToHref = `/${router.query.class}/lab/${router.query.labId}`

    return (
        <WithNavbar title="Lab - CS LAB" className="bg-white">
            <div className="min-h-full h-full">
                <div className="container mt-10 mx-auto px-4 md:px-0 md:max-w-4xl h-full prose">
                    <Backto href={backToHref} />
                    <Breadcrumb />

                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={CodeBlock}
                    >
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </WithNavbar>
    )
}

export default LabID
