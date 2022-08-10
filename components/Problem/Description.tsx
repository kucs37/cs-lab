import { AiFillStar } from 'react-icons/ai'
import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { FaChevronLeft } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import { scrollState } from '@store/ScrollSize'

import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import 'katex/dist/katex.min.css'
import { useRouter } from 'next/router'
import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'

import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline'
import ChatIcon from '@mui/icons-material/Chat'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import TerminalIcon from '@mui/icons-material/Terminal'
import Submission from './Submission'
import Console from './Console'

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
    const [scrollSize, setScrollSize] = useRecoilState(scrollState)
    const router = useRouter()
    const [value, setValue] = useState('Description')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    const goBack = () => {
        router.push(`/${router.query.class}/lab/${router.query.labId}/`)
    }

    return (
        <TabContext value={value}>
            <div
                className="bg-white flex flex-col h-full md:overflow-y-scroll md:min-w-[450px]"
                style={{ width: `${scrollSize}px` }}
            >
                <button
                    className="flex items-center gap-2 w-fit p-4"
                    onClick={() => goBack()}
                >
                    <FaChevronLeft />
                    <p>ย้อนกลับ</p>
                </button>

                <Box
                    sx={{ maxWidth: { xs: 320, sm: 480 } }}
                    className="shadow-sm"
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        allowScrollButtonsMobile
                        aria-label="Left panel"
                    >
                        <Tab label="โจทย์" value="Description" />
                        <Tab label="Shell" value="Console" />
                        <Tab label="กระทู้" value="Discuss" />
                        <Tab label="ผลการส่ง" value="Submissions" />
                    </Tabs>
                </Box>

                <TabPanel
                    sx={{ padding: 2 }}
                    className="overflow-scroll origin-top-left"
                    value="Description"
                >
                    <div className="h-full">
                        <div className="mt-4 flex flex-col gap-4 items-start w-full h-full">
                            <h1 className="text-xl font-bold">
                                01 แปลงอุณหภูมิ
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
                </TabPanel>
                <TabPanel value="Discuss">Discuss</TabPanel>
                <TabPanel value="Console">
                    <Console />
                </TabPanel>
                <TabPanel value="Submissions">
                    <Submission />
                </TabPanel>
            </div>
        </TabContext>
    )
}

export default Description
