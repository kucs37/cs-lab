import WithNavbar from '@layouts/WithNavbar'
import Backto from '@components/Common/Backto'
import { AiFillStar } from 'react-icons/ai'
import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { FaChevronLeft } from 'react-icons/fa'

import 'katex/dist/katex.min.css'

function Problem() {
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

    return (
        <WithNavbar>
            <div className="grid grid-cols-10 gap-2 place-items-stretch min-h-0 h-full">
                <div className="col-span-12 md:col-span-3  bg-white rounded-lg w-full  h-full overflow-y-scroll p-4">
                    <a className="flex items-center gap-2 w-fit" href="">
                        <FaChevronLeft />
                        <p>ย้อนกลับ</p>
                    </a>
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

                <div className="col-span-12 md:col-span-7 bg-lime-500 min-h-0 grid grid-cols-10"></div>
            </div>
        </WithNavbar>
    )
}

export default Problem
