import WithNavbar from '@/layouts/WithNavbar'
import ReactMarkdown from 'react-markdown'
import Backto from '@/components/Common/Backto'
import { useRouter } from 'next/router'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5'
import dynamic from 'next/dynamic'
const CodeEditor = dynamic(() => import('@/components/Common/CodeEditor'), {
    ssr: false,
})

const markdown: string = `

# List Index และการเข้าถึง (access) ข้อมูลใน List
\`\`\`python
scores = [60, 70, 85, 66, 70, 0, 15, 9]
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
\`\`\`

-   ข้อมูลที่เก็บอยู่ใน List จะมีเลขลำดับกำกับอยู่ ซึ่งเลขลำดับดังกล่าวเรียกว่า Index
-   Index ของ List ในภาษา Python เริ่มต้นที่ 0
-   Index เพิ่มทีละ 1 ตามจำนวนข้อมูลที่อยู่ใน List

![ListIndex](https://elab.cpe.ku.ac.th/elab_media/supplements/2018/03/28/ListIndex.png)

## วิธีการเข้าถึง (access) ข้อมูลใน List โดยใช้ Index

-   ใส่เลข Index ไว้ใน bracket (\`[]\`) หลังชื่อตัวแปร List เพื่อเข้าถึงข้อมูลใน List ณ Index ที่ต้องการ


\`\`\`python
scores = [60, 70, 85, 66, 70, 0, 15, 9]

# ต้องการค่าใน List scores ณ Index ที่ 2 เก็บเข้าตัวแปร score
score = scores[2]

print(score)
\`\`\`

\`\`\`python
scores = [60, 70, 85, 66, 70, 0, 15, 9]

# ต้องการค่าใน List scores ณ Index ที่ 1 รวมกับค่า ณ Index ที่ 4 เก็บเข้าตัวแปร score
score = scores[1] + scores[4]

print(score)
\`\`\`

\`\`\`python
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

# ต้องการค่า วันที่ 3 ของสัปดาห์ จาก List days (วันที่ 3 ตรงกับ Index ที่ 2 เพราะ Index เริ่มต้นที่ 0)
print(days[2])  # ค่าที่ได้มา เป็น string
\`\`\`

## วนลูปข้อมูลใน List โดยใช้ index

\`\`\`python
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
index = 0
while index < 6:
    day = days[index]
    print(index, "days[%d]: %s" % (index, day))
    index += 1
\`\`\`

## แบบฝึกหัด

1. ประกาศ List ของจำนวนเฉพาะ ให้ชื่อตัวแปรว่า \`primes\` โดยมีข้อมูลเป็นจำนวนเฉพาะ 10 จำนวนแรก  
คำนวณหาผลรวมของจำนวนเฉพาะทั้ง 10 จำนวน โดยใช้ while loop เก็บผลรวมใส่ในตัวแปร \`total\`

<editor value="total = 0
while     
print(total)" />



2. กำหนด List \`months\` และ \`days_in_month\` เป็น List ของตัวย่อชื่อเดือน และ List ของจำนวนวันในแต่ละเดือนตามลำดับ  
ให้แสดง 12 บรรทัด ว่าแต่ละเดือนมีกี่วัน โดยใช้ while loop โดยแสดงชื่อเดือนและจำนวนวัน คั่นด้วยช่องว่าง

\`\`\`python
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

while 
    
\`\`\`


## Index เป็นค่าลบได้

\`\`\`python
scores = [60, 70, 85, 66, 70, 0, 15, 9]
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
\`\`\`

-   Index ของ List ในภาษา Python เป็นค่าลบได้ โดยค่าสุดท้ายของ List เป็น -1

![](https://elab.cpe.ku.ac.th/elab_media/supplements/2018/03/28/ListNegativeIndex.png)

## วิธีการเข้าถึง (access) ข้อมูลใน List โดยใช้ Index

-   ใส่เลข Index ไว้ใน bracket (\`[]\`) หลังชื่อตัวแปร List เพื่อเข้าถึงข้อมูลใน List ณ Index ที่ต้องการ


\`\`\`python
scores = [60, 70, 85, 66, 70, 0, 15, 9]

# ต้องการค่าใน List scores ณ Index ที่ -2 เก็บเข้าตัวแปร score
score = scores[-2]

print(score)
\`\`\`


\`\`\`python 
scores = [60, 70, 85, 66, 70, 0, 15, 9]

# ต้องการค่าใน List scores ณ Index ที่ -1 รวมกับค่า ณ Index ที่ -4 เก็บเข้าตัวแปร score
score = scores[-1] + scores[-4]

print(score)
\`\`\`

\`\`\`python
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

# ต้องการค่า วันที่ 3 ของสัปดาห์ จาก List days (วันที่ 3 ตรงกับ Index ที่ -5)
print(days[-5])  # ค่าที่ได้มา เป็น string
\`\`\`

## ระวังการเข้าถึงค่า ณ Index ที่ไม่มีใน List


\`\`\`python 
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
print(days[-8])  # ไม่มี Index ที่ -8
\`\`\`


\`\`\`python 
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
i = 0
while i <= 7:
    print(days[i])  # ไม่มี Index ทึ่ 7
\`\`\`
`

function LabID() {
    const router = useRouter()
    const backToHref = `/${router.query.class}/lab/${router.query.labId}`

    return (
        <WithNavbar title="Lab - CS LAB" className="bg-white">
            <div className="min-h-full h-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-0 pt-6 pb-10 md:max-w-4xl h-full prose">
                    <Backto href={backToHref} />

                    <ReactMarkdown
                        className="my-10"
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            code({
                                node,
                                inline,
                                className,
                                children,
                                ...props
                            }) {
                                const match = /language-(\w+)/.exec(
                                    className || ''
                                )
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(
                                            /\n$/,
                                            ''
                                        )}
                                        style={nightOwl}
                                        language={match[1]}
                                        PreTag="div"
                                        className="rounded-md shadow-lg"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            },

                            input({
                                node,
                                inline,
                                className,
                                children,
                                ...props
                            }) {
                                if (node.properties!.name === 'l1') {
                                    return (
                                        <div className="flex items-center gap-2">
                                            <div className="text-red-500 text-2xl">
                                                <IoClose />
                                            </div>
                                            <input
                                                className={`${
                                                    node.properties!.name ===
                                                        'l1' && 'border-red-500'
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
                                                node.properties!.name ===
                                                    'l2' && 'border-lime-500'
                                            } ${className}`}
                                            type="text"
                                            {...props}
                                        />
                                    </div>
                                )
                            },
                            editor({
                                node,
                                inline,
                                className,
                                children,
                                ...props
                            }) {
                                return <CodeEditor />
                            },
                        }}
                    >
                        {markdown}
                    </ReactMarkdown>

                    <button className="bg-gray-900 text-white px-10 py-2 rounded-lg mt-4 shadow-md hover:bg-gray-700">
                        ส่ง
                    </button>
                </div>
            </div>
        </WithNavbar>
    )
}

export default LabID
