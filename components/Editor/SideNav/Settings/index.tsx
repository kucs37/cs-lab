import { IoSettingsOutline } from 'react-icons/io5'

function Button() {
    return (
        <button
            className="h-fit m-2 p-2 rounded-lg shadow-md text-gray-600 bg-white"
            // onClick={() => setIsSettings(true)}
        >
            <IoSettingsOutline size="1.75rem" />
        </button>
    )
}

export default Button
