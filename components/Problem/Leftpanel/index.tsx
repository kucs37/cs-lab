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
    const { scrollSize, setIsSettings } = useProblemContext()

    const router = useRouter()
    const isMd = useMediaQuery('(min-width: 768px)')
    const [menu, setMenu] = useState<MenuType>('Description')

    const backToHref = `/${router.query.class}/lab/${router.query.labId}/`

    return (
        <div
            className="w-full md:min-w-[500px] md:max-w-3xl h-full overflow-y-scroll"
            style={{
                width: isMd ? `${scrollSize}px` : '100%',
            }}
        >
            <div className="block md:flex md:flex-row w-full h-full bg-white md:bg-gray-50 ">
                <button
                    className="hidden self-end m-2 p-2 rounded-full shadow-md md:block text-gray-600 bg-white"
                    onClick={() => setIsSettings(true)}
                >
                    <IoSettingsOutline size="1.75rem" />
                </button>

                <div className="md:overflow-y-scroll w-full h-full md:border-l-2 bg-white">
                    <Backto href={backToHref} className="my-6 mx-3" />

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
