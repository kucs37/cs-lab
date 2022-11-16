import { forwardRef } from 'react'
import Description from '../Description'
import Outline from '../Outline'

const Problem = () => {
    return (
        <div className="p-4 h-full overflow-y-scroll">
            <Outline />
            <hr className="h-4" />
            <Description />
        </div>
    )
}

export default Problem
