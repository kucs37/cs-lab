import { FaChevronLeft } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import { scrollState } from '@store/ScrollSize'

import 'katex/dist/katex.min.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

import dynamic from 'next/dynamic'
import { useMediaQuery } from 'usehooks-ts'

import Description from './Description'
const Console = dynamic(() => import('./Console'), { ssr: false })
import Submissions from './Submissions'

import Menu from './Tabs/Menu'

import { MenuType } from '@interface/Menu'

function LeftPanel() {
    const [scrollSize, _] = useRecoilState(scrollState)
    const router = useRouter()
    const isMd = useMediaQuery('(min-width: 768px)')
    const [menu, setMenu] = useState<MenuType>('Description')

    const goBack = () => {
        router.push(`/${router.query.class}/lab/${router.query.labId}/`)
    }

    return (
        <div
            className="w-full bg-white flex-1 flex flex-col md:overflow-y-scroll md:min-w-[450px]"
            style={{ width: isMd ? `${scrollSize}px` : '100%' }}
        >
            <div className="flex flex-col md:flex-row w-full h-full">
                <Menu
                    menu={menu}
                    onChange={(menu: MenuType) => setMenu(menu)}
                />
                <div className="flex flex-col w-full">
                    <button
                        className="items-center gap-2 w-fit p-4 mt-4 md:mt-0 hidden md:flex"
                        onClick={() => goBack()}
                    >
                        <FaChevronLeft />
                        <p>ย้อนกลับ</p>
                    </button>
                    {menu === 'Description' && <Description />}
                    {menu === 'Console' && <Console />}
                    {menu === 'Submissions' && <Submissions />}
                    {menu === 'Discussion' && <h1>Hello</h1>}
                </div>
            </div>
        </div>
    )
}

export default LeftPanel
