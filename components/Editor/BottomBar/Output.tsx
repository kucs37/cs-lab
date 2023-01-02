import { useAppSelector } from '@/store/hooks'
import React from 'react'

function Output() {
    const { output } = useAppSelector((state) => state.editor)

    return (
        <div className="h-full overflow-y-scroll">
            <pre className="p-2 text-gray-900 dark:text-ascent-1">{output}</pre>
            <input type="text" />
        </div>
    )
}

export default Output
