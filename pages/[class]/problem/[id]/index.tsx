import { useRef } from 'react'
import CodeZone from '@/components/Editor/CodeZone'
import Settings from '@/components/Editor/Buttons'
import WithNavbar from '@/HOC/WithNavbar'
import LeftPanel from '@/components/Editor/LeftPanel'

function Editor() {
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <WithNavbar
            navbarRef={divRef}
            title="09 Find a, b in which a*b=n and (a+b) is the lowest - CS-LAB"
            className="bg-gray-50 fixed w-screen"
        >
            <div className="bg-white shadow-lg rounded-xl overflow-hidden flex m-2">
                <Settings />
                <LeftPanel />
                <CodeZone />
            </div>
        </WithNavbar>
    )
}

export default Editor
