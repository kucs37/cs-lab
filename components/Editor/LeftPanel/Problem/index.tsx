import Description from '../Description'
import Outline from '../Outline'

function Problem() {
    return (
        <div className="p-4 h-full overflow-y-scroll w-full">
            <Outline />
            <hr className="h-4" />
            <Description />
        </div>
    )
}

export default Problem
