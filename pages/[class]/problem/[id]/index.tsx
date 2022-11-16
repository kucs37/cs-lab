import RightPanel from '@/components/Editor/RightPanel'
import SideNav from '@/components/Editor/SideNav'
import WithNavbar from '@/HOC/WithNavbar'
import LeftPanel from '@/components/Editor/LeftPanel'
import History from '@/components/Editor/History'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Settings from '@/components/Editor/Settings'

function Editor() {
    const menu = useSelector((state: RootState) => state.menus)

    return (
        <WithNavbar
            navbarChildren={<SideNav />}
            title="09 Find a, b in which a*b=n and (a+b) is the lowest - CS-LAB"
            className="bg-gray-200 fixed"
        >
            {menu.isHistoryOpen && <History />}
            {menu.isSettingsOpen && <Settings />}

            <div className="bg-white shadow-md rounded-xl overflow-hidden flex m-2 h-full">
                <LeftPanel />
                <RightPanel />
            </div>
        </WithNavbar>
    )
}

export default Editor
