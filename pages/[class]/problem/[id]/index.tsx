import CodeZone from '@/components/Editor/CodeZone'
import Settings from '@/components/Editor/Buttons'
import WithNavbar from '@/HOC/WithNavbar'
import LeftPanel from '@/components/Editor/LeftPanel'
import History from '@/components/Editor/History'

function Editor() {
    return (
        <WithNavbar
            title="09 Find a, b in which a*b=n and (a+b) is the lowest - CS-LAB"
            className="bg-gray-50 fixed"
        >
            {/* <History /> */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden flex m-2 h-full">
                <Settings />
                <LeftPanel />
                <CodeZone />
            </div>
        </WithNavbar>
    )
}

export default Editor