import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { RefObject, useState, useEffect } from 'react'
import { FaHistory } from 'react-icons/fa'

const markdown: string = `
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
        <>
            <div>
                <h1 className="text-xl font-bold">01 แปลงอุณหภูมิ</h1>
                {/* Test case */}
                <div className="flex items-center flex-wrap bg-gray-200 rounded-lg gap-1 py-1 px-2 w-fit my-2 font-bold text-sm">
                    <span>P</span>
                    <span>P</span>
                    <span>P</span>
                    <span>-</span>
                    <span>C</span>
                    <span>S</span>
                    <span>P</span>
                </div>
            </div>
            <div className="prose">
                <ReactMarkdown
                    remarkPlugins={[remarkGFM, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    children={markdown}
                />
            </div>
        </>
    )
}

export default Description
