import { AiFillStar } from 'react-icons/ai'
import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

const markdown = `
เขียนโปรแกรมภาษาไพทอน ที่รับเลขจำนวนเต็มบวก n แล้วแสดงผลลัพธ์เป็น ผลบวกของเลขจำนวนเต็มบวกสองจำนวน a และ b โดยที่ a * b = n และ (a+b) มีค่าน้อยที่สุด

**ตัวอย่างข้อมูลเข้า/ข้อมูลออก**

|  ข้อมูลเข้า | ข้อมูลออก  |
| ------------ | ------------ |
| 6  | 5  |
| 20  | 9   |

**ตัวอย่างผลลัพธ์ที่ 1**

|  ข้อมูลเข้า | ข้อมูลออก  |
| ------------ | ------------ |
| 6  | 5  |



อธิบาย: มีเลขจำนวนเต็มสองคู่ที่คูณกันได้ 6 นั่นคือ 1,6 และ 2,3 แต่ 1+6 = 7 และ 2+3 = 5 ดังนั้นค่าที่บวกกันน้อยที่สุดจึงเป็น 5

**ตัวอย่างผลลัพธ์ที่ 2**

|  ข้อมูลเข้า | ข้อมูลออก  |
| ------------ | ------------ |
| 20  | 9  |


อธิบาย: คู่เลขจำนวนเต็มที่คูณกันได้ 20 คือ (1,20) (2,10) (4,5) ซึ่งในสามคู่นี้ 4+5 = 9 เป็นผลบวกที่น้อยที่สุด คำตอบจึงเป็น 9

`

function Description() {
    return (
        <div className="h-full p-4">
            <div className="mt-4 flex flex-col gap-4 items-start w-full h-full">
                <h1 className="text-xl font-bold">
                    09 Find a, b in which a*b=n and (a+b) is the lowest
                </h1>
                <div className="flex items-center gap-1 text-sm justify-start w-full">
                    <span className="text-yellow-300">
                        <AiFillStar size="1.25rem" />
                    </span>
                    <p>4.5</p>
                    <p>•</p>
                    <p>25 รีวิว</p>
                </div>
                <hr className="w-full" />
                <ReactMarkdown
                    className="prose w-full py-4"
                    remarkPlugins={[remarkGFM, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    children={markdown}
                />

                <p className="text-gray-500"></p>
            </div>
        </div>
    )
}

export default Description
