import { WindowT } from '@/interface/Window'

interface TabI {
    active?: boolean
    title: string
    onClick: (title: string) => void
}
const Tab = ({ active, title, onClick }: TabI) => {
    return (
        <div
            className="p-2 cursor-pointer select-none"
            onClick={() => onClick(title)}
        >
            <h4 className="text-sm font-medium uppercase">{title}</h4>
            <div
                className={`border-b-2 ${
                    active ? 'border-gray-900' : 'border-none'
                } px-2`}
            ></div>
        </div>
    )
}

function Tabs({
    active,
    setActive,
}: {
    active: WindowT
    setActive: (window: WindowT) => void
}) {
    return (
        <>
            <div className="flex gap-1">
                <Tab
                    title="console"
                    active={active === 'console'}
                    onClick={() => setActive('console')}
                />
            </div>
        </>
    )
}

export default Tabs
