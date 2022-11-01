import CodeZone from '@/components/Editor/CodeZone'
import Description from '@/components/Editor/Description'
import { SideNav } from '@/components/Editor/Navigation/'
import Settings from '@/components/Editor/Settings'
import WithNavbar from '@/HOC/WithNavbar'
import { useRef, useState } from 'react'
import Window from '@/components/Editor/Window'

function Editor() {
    const tabRef = useRef<HTMLDivElement>(null)

    const [height, setHeight] = useState<number>(200)
    return (
        <WithNavbar
            title="09 Find a, b in which a*b=n and (a+b) is the lowest - CS-LAB"
            className="bg-gray-50 fixed w-screen"
        >
            <div
                className="bg-white shadow-lg rounded-xl flex w-full m-4 h-[calc(100vh-100px)]"
                ref={tabRef}
            >
                <Settings />
                <SideNav />
                <Description windowRef={tabRef} />

                <CodeZone tabRef={tabRef} />
            </div>
        </WithNavbar>
    )
}

export default Editor
