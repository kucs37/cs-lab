import { FaChevronLeft } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import { scrollState } from '@store/ScrollSize'

import 'katex/dist/katex.min.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

import dynamic from 'next/dynamic'
import { useMediaQuery } from 'usehooks-ts'
import { IoSettingsOutline } from 'react-icons/io5'

import Description from './Description'
const Console = dynamic(() => import('./Console'), { ssr: false })
import Submissions from './Submissions'

import Menu from './Menu'

import { MenuType } from '@interface/Menu'
import { problemState } from '@store/ProblemState'

function LeftPanel() {
    const [__, setProblem] = useRecoilState(problemState)
    const [scrollSize, _] = useRecoilState(scrollState)
    const router = useRouter()
    const isMd = useMediaQuery('(min-width: 768px)')
    const [menu, setMenu] = useState<MenuType>('Description')

    const goBack = () => {
        router.push(`/${router.query.class}/lab/${router.query.labId}/`)
    }

    return (
        <div
            className="w-full bg-white flex-1 md:min-w-[450px] md:max-w-3xl"
            style={{ width: isMd ? `${scrollSize}px` : '100%' }}
        >
            <div className="flex flex-col w-full h-full">
                <button
                    className="flex items-center gap-2 p-4 w-fit"
                    onClick={() => goBack()}
                >
                    <FaChevronLeft />
                    <p>ย้อนกลับ</p>
                </button>
                <div className="flex flex-col md:flex-row h-full md:bg-gray-50">
                    <button
                        className="self-end m-2 bg-white p-2 rounded-full shadow-sm hidden md:block"
                        onClick={() =>
                            setProblem((prev) => ({
                                ...prev,
                                isSettings: true,
                            }))
                        }
                    >
                        <IoSettingsOutline size="1.75rem" />
                    </button>
                    <div className="flex w-full flex-col bg-white border-gray-100">
                        <Menu
                            menu={menu}
                            onChange={(menu: MenuType) => setMenu(menu)}
                        />

                        {menu === 'Description' && <Description />}
                        {menu === 'Console' && <Console />}
                        {menu === 'Submissions' && <Submissions />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel
