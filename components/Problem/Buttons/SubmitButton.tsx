import { BsCheckLg } from 'react-icons/bs'

interface SubmitButtonI {
    onSubmit: () => void
}

function SubmitButton({ onSubmit }: SubmitButtonI) {
    return (
        <div className="flex justify-end p-2 relative">
            <button
                className="py-2 px-4  bg-yellow-400 rounded-full shadow-md  inline-flex items-center gap-2 text-white active:bg-yellow-500 w-fit peer"
                onClick={onSubmit}
            >
                <BsCheckLg />
                <h3>Submit</h3>
            </button>
            <div className="z-40 absolute right-4 -bottom-7 bg-white shadow-md rounded-lg px-2 opacity-0 peer-hover:opacity-100 delay-500 transition-opacity duration-300">
                CMD + ALT + S
            </div>
        </div>
    )
}

export default SubmitButton
