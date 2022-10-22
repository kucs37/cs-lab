import {
    BsCardChecklist,
    BsCardHeading,
    BsCode,
    BsTerminal,
} from 'react-icons/bs'
function Window() {
    return (
        <div className="flex gap-1">
            <button className="rounded-lg rounded-b-none px-2 py-2 border-2 border-b-0 inline-flex items-center gap-2 bg-gray-200">
                <BsCode />
                <h4 className="text-sm font-medium">Code</h4>
            </button>
            <button className="rounded-lg rounded-b-none px-2 py-2 border-2 border-b-0 inline-flex items-center gap-2 cursor-pointer">
                <BsTerminal />
                <h4 className="text-sm font-medium">Console</h4>
            </button>
            <button className="rounded-lg rounded-b-none px-2 py-2 border-2 border-b-0 inline-flex items-center gap-2 cursor-pointer">
                <BsCardChecklist />
                <h4 className="text-sm font-medium">Submission</h4>
            </button>
        </div>
    )
}

export default Window
