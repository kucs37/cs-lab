import Window from './Window'
import CodeMirror from './CodeMirror'

function CodeZone() {
    return (
        <div className="w-full flex flex-col pt-2">
            <Window />
            <div className="flex-1 h-full overflow-hidden">
                <CodeMirror />
            </div>
        </div>
    )
}

export default CodeZone
