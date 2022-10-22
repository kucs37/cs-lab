import CodeZone from '@/components/Editor/CodeZone'
import Description from '@/components/Editor/Description'
import { SideNav, BottomNav } from '@/components/Editor/Navigation/'
import Settings from '@/components/Editor/Settings'
import WithNavbar from '@/HOC/WithNavbar'
import { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

function PC() {
    return (
        <div className="bg-white shadow-lg rounded-xl flex overflow-hidden m-4 gap-2">
            <Settings />
            <SideNav />
            <Description />
            <CodeZone />
        </div>
    )
}

function Editor() {
    const isPC = useMediaQuery('(min-width : 768px)')

    return (
        <WithNavbar
            title="09 Find a, b in which a*b=n and (a+b) is the lowest - CS-LAB"
            className="bg-gray-50"
        >
            <PC />
        </WithNavbar>
    )
}

export default Editor
