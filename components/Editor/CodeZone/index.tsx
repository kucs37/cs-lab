import { useState } from 'react'
import Window from './Window'
import CodeMirror from './CodeMirror'
import ActionButton from './ActionButton'
import { WindowT } from '@/interface/Window'

function CodeZone() {
    const [active, SetActive] = useState<WindowT>('code')
    return (
        <div className="w-full flex flex-col pt-2">
            <div className="flex items-center justify-between">
                <Window active={active} setActive={SetActive}/>
                <ActionButton />
            </div>
            <div className="flex-1 h-full overflow-hidden">
                {active === 'code' && <CodeMirror />}
            </div>
        </div>
    )
}

export default CodeZone
