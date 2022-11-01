import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { BsClock } from 'react-icons/bs'
import { IoCopyOutline } from 'react-icons/io5'
function Submission() {
    return (
        <div className="p-2 rounded-xl border-2 border-gray-900 shadow-xl flex flex-col gap-2" style={{height : 300}}>
            <SyntaxHighlighter
                children={String(`amount = int(input())
multiply = 1
sum = 1
i = 0
while i <= amount :
  if i * (amount - i) == amount :
    sum = i + (amount - i)
                `).replace(/\n$/, '')}
                style={nightOwl}
                language={'py'}
                PreTag="div"
                className="rounded-md shadow-lg"
            />
            <div className="inline-flex items-center gap-1">
                <BsClock />
                <h4 className="text-gray-700 font-medium">
                    ส่งเมื่อ 14 ต.ค 2565 14:30น.
                </h4>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 outline-none bg-gray-900 rounded-lg text-white w-fit active:bg-gray-700 transition-all">
                <IoCopyOutline />
                <p>คัดลอกโค้ด</p>
            </button>
        </div>
    )
}

export default Submission
