import { BsPlay, BsUpload } from 'react-icons/bs'
function ActionButton() {
    return (
        <div className="inline-flex items-center px-2 gap-2">
            <button className="inline-flex items-center gap-2  bg-lime-300 active:bg-lime-500 border-2 outline-none focus:border-lime-800 border-transparent rounded-full px-4 py-1 font-semibold text-lime-800">
                <BsPlay size="1.5rem" />
                Run
            </button>
            <button className="inline-flex items-center gap-2  bg-amber-300 active:bg-amber-500 border-2 outline-none focus:border-amber-800 border-transparent rounded-full px-4 py-1 font-semibold text-amber-800">
                <BsUpload size="1.25rem" />
                Submit
            </button>
        </div>
    )
}

export default ActionButton
