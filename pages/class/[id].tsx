import { useState } from 'react'
import Card from '@components/Lab/Card'
import Header from '@components/Class/Header'
import Backto from '@components/Backto'
import WithNavbar from '@layouts/WithNavbar'

interface Problem {
    name: string
    status: 'success' | 'failed' | 'not-attempted'
}

interface Lab {
    title: string
    problems: Problem[]
    end: string
}

const Labs: Lab[] = [
    {
        title: 'CS Python Lab 01 Input Process Output',
        problems: [
            { name: "01 Elab's Automatic Grading", status: 'success' },
            { name: "02 Elab's Manual Grading", status: 'success' },
            { name: '03 Reusing Submitted Answer', status: 'success' },
            { name: '04 Variable and Basic Output', status: 'success' },
            { name: '05 Expression', status: 'success' },
            { name: '06 Basic Input', status: 'success' },
            {
                name: '07 - Exercise 1.1: Input Process Output',
                status: 'success',
            },
            {
                name: '08 Exercise 1.2: Input Process Output',
                status: 'success',
            },
        ],
        end: '2022-07-26',
    },
    {
        title: 'CS Python Lab 01 Problems',
        problems: [
            { name: '01 แปลงอุณหภูมิ', status: 'success' },
            {
                name: '02 แตกหน่วยวินาที',
                status: 'success',
            },
            {
                name: '03 จะบวกแบบไหน',
                status: 'success',
            },
            {
                name: '04 คะแนนสอบ',
                status: 'success',
            },
            {
                name: '05 ค่าตัดหญ้า',
                status: 'success',
            },
            {
                name: '06 พิมพ์ดาวบรรทัดเดียว',
                status: 'success',
            },
        ],
        end: '2022-07-26',
    },
    {
        title: 'CS Python Lab 02 Formatted Output',
        problems: [
            { name: '01 Formatted Output 1: Easiest Way', status: 'success' },
            {
                name: '02 Formatted Output 2: String Concatenate Operator',
                status: 'success',
            },
            {
                name: '03 Formatted Output 3: String Method format()',
                status: 'success',
            },
            {
                name: '04 Formatted Output 4: String Interpolation Operator',
                status: 'success',
            },
            {
                name: '05 Formatted Output 5: Formatted String Literal',
                status: 'success',
            },
        ],
        end: '2022-07-26',
    },
    {
        title: 'CS Python Lab 02 Problems',
        problems: [
            { name: '01 พื้นที่และเส้นรอบวง', status: 'success' },
            {
                name: '02 สระว่ายน้ำ',
                status: 'success',
            },
            {
                name: '03 พิมพ์ตามสั่ง',
                status: 'success',
            },
            {
                name: '04 ผลรวมเศษส่วน',
                status: 'success',
            },
            {
                name: '05 เติมน้ำมัน',
                status: 'success',
            },
            {
                name: '06 พิมพ์ดาวบรรทัดเดียวสลับกัน',
                status: 'success',
            },
            {
                name: '07 ฟังก์ชันทางคณิตศาสตร์',
                status: 'success',
            },
        ],
        end: '2022-08-16',
    },
    {
        title: 'CS Python Lab 03 Conditional Statement',
        problems: [
            { name: '01 Conditional Statement', status: 'success' },
            {
                name: '02 Boolean Expression: Relational Operators',
                status: 'success',
            },
            {
                name: '03 Boolean Expression: Logical Operators',
                status: 'success',
            },
            {
                name: '04 แปลงอุณหภูมิ 2',
                status: 'success',
            },
        ],
        end: '2022-08-16',
    },
    {
        title: 'CS Python Lab 03 Problems',
        problems: [
            { name: '01 BMI', status: 'success' },
            {
                name: '02 บริษัท ACME',
                status: 'success',
            },
            {
                name: '03 ค่าจอดรถ',
                status: 'success',
            },
            {
                name: '04 Stamp',
                status: 'success',
            },
            {
                name: '05 Guessing 1',
                status: 'success',
            },
            {
                name: '06 Admin Account',
                status: 'success',
            },
            {
                name: '07 Calculate f(x)',
                status: 'success',
            },
        ],
        end: '2022-08-16',
    },
    {
        title: 'CS Python Lab 04 Problems',
        problems: [
            { name: '01 Guessing 2', status: 'success' },
            {
                name: '02 เมนู',
                status: 'success',
            },
            {
                name: '03 Electric Appliance Store',
                status: 'success',
            },
            {
                name: '04 Buffet',
                status: 'failed',
            },
            {
                name: '05 มาตรการเงินโอน แก้จน คนขยัน',
                status: 'success',
            },
            {
                name: '06 ปีอธิกสุรทิน (leap year)',
                status: 'not-attempted',
            },
            {
                name: '07 จับโปเกมอน',
                status: 'not-attempted',
            },
            {
                name: '08 เทหรือไม่เท',
                status: 'not-attempted',
            },
        ],
        end: '2022-08-16',
    },
]

type showType = 'all' | 'open' | 'close'

function Class() {
    const [show, setShow] = useState<showType>('all')

    const handleOnClick = (type: showType) => {
        setShow(type)
    }
    return (
        <>
            <WithNavbar>
                <div className="px-3 container mx-auto mt-2 my-10">
                    <Backto className="my-6" />
                    <div className="bg-white  p-6 rounded-lg shadow-sm">
                        <Header />

                        <hr />
                        <div className="my-6">
                            <h2 className="text-2xl font-bold">
                                แลป ({Labs.length})
                            </h2>
                            <div className="flex flex-wrap items-center gap-2 my-4">
                                <button
                                    onClick={() => handleOnClick('all')}
                                    className={`rounded-full px-4 py-1 border-2 ${
                                        show == 'all' &&
                                        'bg-gray-900 text-white'
                                    } border-gray-900 active:bg-gray-900 active:text-white`}
                                >
                                    <p>ทั้งหมด</p>
                                </button>
                                <button
                                    onClick={() => handleOnClick('open')}
                                    className={`rounded-full px-4 py-1 border-2 ${
                                        show == 'open' &&
                                        'bg-gray-900 text-white'
                                    } border-gray-900 active:bg-gray-900 active:text-white`}
                                >
                                    <p>เปิดการส่งงาน</p>
                                </button>
                                <button
                                    onClick={() => handleOnClick('close')}
                                    className={`rounded-full px-4 py-1 border-2 ${
                                        show == 'close' &&
                                        'bg-gray-900 text-white'
                                    } border-gray-900 active:bg-gray-900 active:text-white`}
                                >
                                    <p>อ่านอย่างเดียว</p>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 place-items-stretch">
                            {Labs.filter(({ end }) => {
                                const isEnd = new Date(end) < new Date()
                                if (show == 'all') {
                                    return true
                                } else if (show == 'open') {
                                    return !isEnd
                                } else if (show == 'close') {
                                    return isEnd
                                }
                            }).map(({ title, problems, end }) => (
                                <Card
                                    title={title}
                                    problems={problems}
                                    end={end}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </WithNavbar>
        </>
    )
}

export default Class
