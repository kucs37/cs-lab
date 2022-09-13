import 'katex/dist/katex.min.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

import dynamic from 'next/dynamic'
import { useMediaQuery } from 'usehooks-ts'
import { IoSettingsOutline } from 'react-icons/io5'

import Description from './Description'
const Console = dynamic(() => import('./Console'), { ssr: false })
import Submissions from '../Submissions'

import Menu from './Menu'

import { MenuType } from '@/interface/Menu'
import Backto from '@/components/Common/Backto'

import { useProblemContext } from '@/Context/Problem'

function LeftPanel() {
    const { scrollSize, setIsSettings, menu, setMenu } = useProblemContext()

    const router = useRouter()
    const isMd = useMediaQuery('(min-width: 768px)')

    const backToHref = `/${router.query.class}/problem/${router.query.labId}/`

    return (
        <div
            className="w-full md:min-w-[584px] md:max-w-3xl h-full overflow-y-scroll flex-1 md:flex-auto bg-white"
            style={{
                width: isMd ? `${scrollSize}px` : '100%',
            }}
        >
            <div className="block md:flex md:flex-row w-full h-full">
                <button
                    className="hidden self-end m-2 p-2 rounded-full shadow-md md:block text-gray-600 bg-white"
                    onClick={() => setIsSettings(true)}
                >
                    <IoSettingsOutline size="1.75rem" />
                </button>

                <div className="w-full max-h-full md:border-l-2  flex flex-col flex-1">
                    <Backto href={backToHref} className="p-4" />

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
    )
}

export default LeftPanel
