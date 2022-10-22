import {
    BsCardChecklist,
    BsCardHeading,
    BsCode,
    BsTerminal,
} from 'react-icons/bs'
function BottomNav() {
    return (
        <div className="flex items-center bg-white shadow-md rounded-2xl overflow-hidden">
            <button className="inline-flex flex-col items-center  p-4 flex-1 bg-gray-200 font-medium">
                <BsCardHeading />
                โจทย์
            </button>
            <div className="w-0.5 h-full bg-gray-200"></div>
            <button className="inline-flex flex-col items-center  p-4 flex-1">
                <BsCode />
                Code
            </button>
            <div className="w-0.5 h-full bg-gray-200"></div>
            <button className="inline-flex flex-col items-center  p-4 flex-1">
                <BsTerminal />
                Console
            </button>
            <div className="w-0.5 h-full bg-gray-200"></div>
            <button className="inline-flex flex-col items-center  p-4 flex-1">
                <BsCardChecklist />
                Submissions
            </button>
        </div>
    )
}

export default BottomNav
