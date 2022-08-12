import { AiFillStar } from 'react-icons/ai'
import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

const markdown = `
### แปลงอุณหภูมิ
สูตรในการเปลี่ยนค่าจากองศาเซลเซียสไปเป็นองศาฟาเรนไฮต์และเคลวิน มีดังนี้
$$
F = \\frac{9}{5}C + 32
$$
$$
K = C + 273.15
$$
ให้อ่านข้อมูลอุณหภูมิ (หน่วยองศาเซลเซียส) จากนั้นคำนวณหาค่าองศาฟาเรนไฮต์และเคลวินด้วยสมการด้านบน เมื่อ C คือ องศาเซลเซียส F คือ องศาฟาเรนไฮต์ และ K คือ เคลวิน
### ข้อมูลเข้า
หนึ่งบรรทัด ประกอบด้วย ค่าอุณหภูมิหน่วยองศาเซลเซียส เป็นจำนวนจริง
### ข้อมูลออก
หนึ่งบรรทัด ประกอบด้วย ตัวเลขจำนวนจริงสองจำนวน คั่นด้วยเว้นวรรค จำนวนแรกคือ ค่าอุณหภูมิหน่วยองศาฟาเรนไฮต์ จำนวนที่สองคือ ค่าอุณหภูมิหน่วยเคลวิน
`

function Description() {
    return (
        <div className="h-full p-4">
            <div className="mt-4 flex flex-col gap-4 items-start w-full h-full">
                <h1 className="text-xl font-bold">01 แปลงอุณหภูมิ</h1>
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
