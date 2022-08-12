import { FaChevronLeft } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import { scrollState } from '@store/ScrollSize'

import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

import 'katex/dist/katex.min.css'
import { useRouter } from 'next/router'
import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'

import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline'
import ChatIcon from '@mui/icons-material/Chat'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import TerminalIcon from '@mui/icons-material/Terminal'
import Submission from '../Submission'
import dynamic from 'next/dynamic'

const Console = dynamic(() => import('./Console'), { ssr: false })
import Description from './Description'

function LeftPanel() {
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

                <Box className="shadow-sm">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        allowScrollButtonsMobile
                        aria-label="Left panel"
                    >
                        <Tab
                            icon={
                                value === 'Description' ? (
                                    <ViewHeadlineIcon />
                                ) : undefined
                            }
                            iconPosition="start"
                            label="โจทย์"
                            value="Description"
                        />
                        <Tab
                            icon={
                                value === 'Console' ? (
                                    <TerminalIcon />
                                ) : undefined
                            }
                            iconPosition="start"
                            label="Shell"
                            value="Console"
                        />
                        <Tab
                            icon={
                                value === 'Discuss' ? <ChatIcon /> : undefined
                            }
                            iconPosition="start"
                            label="กระทู้"
                            value="Discuss"
                        />
                        <Tab
                            icon={
                                value === 'Submissions' ? (
                                    <AccessTimeIcon />
                                ) : undefined
                            }
                            iconPosition="start"
                            label="ผลการส่ง"
                            value="Submissions"
                        />
                    </Tabs>
                </Box>

                <TabPanel
                    className="overflow-y-scroll p-0  h-full"
                    value="Description"
                >
                    <Description />
                </TabPanel>
                <TabPanel value="Discuss">Discuss</TabPanel>
                <TabPanel className="p-0  h-full" value="Console">
                    <Console />
                </TabPanel>
                <TabPanel className="p-0  h-full" value="Submissions">
                    <Submission />
                </TabPanel>
            </div>
        </TabContext>
    )
}

export default LeftPanel
