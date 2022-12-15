import RightPanel from '@/components/Editor/RightPanel'
import SideNav from '@/components/Editor/SideNav'
import WithNavbar from '@/HOC/WithNavbar'
import LeftPanel from '@/components/Editor/LeftPanel'
import History from '@/components/Editor/History'
import { useAppSelector } from '@/store/hooks'
import Settings from '@/components/Editor/Settings'
import type { NextPageContext, NextPage } from 'next'

interface Props {
    test: string
}

const Editor: NextPage<Props> = ({ test }) => {
    const menu = useAppSelector((state) => state.menu)

    return (
        <WithNavbar
            navbarChildren={<SideNav />}
            title="09 Find a, b in which a*b=n and (a+b) is the lowest | CS-LAB"
            className="bg-gray-100 fixed h-screen max-h-screen"
        >
            {menu.isHistoryOpen && <History />}
            {menu.isSettingsOpen && <Settings />}

            <div className="px-4 py-6 shadow-md flex flex-1 h-full overflow-hidden">
                <LeftPanel />
                <RightPanel />
            </div>
        </WithNavbar>
    )
}

export default Editor

export async function getServerSideProps(context: NextPageContext) {
    return {
        props: {
            test: 'YO!',
        },
    }
}
