import Backto from '@/components/Common/Backto'
import React from 'react'
import Description from '../Description'
import { SideNav } from '../Navigation'

function LeftPanel() {
    return (
        <div className="flex">
            <div className="p-4 h-full overflow-y-scroll">
                {/* <Backto href="/" className="mb-4" /> */}
                <SideNav />
                <hr className='h-4'/>
                <Description />
            </div>
            <div
                className="w-4 h-full bg-slate-200 cursor-col-resize flex items-center justify-center"
                // onTouchStart={() => setIsDrag(true)}
                // onMouseDown={() => setIsDrag(true)}
                // onDoubleClick={() => setWindowHeight(400)}
            >
                <span className="h-10 rounded-full w-1/3 bg-gray-500"></span>
            </div>
        </div>
    )
}

export default LeftPanel
