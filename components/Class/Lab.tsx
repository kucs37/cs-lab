import { BsCheck } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

function Lab() {
    return (
        <div className="flex flex-col shadow-md px-4 py-2">
            <h3 className="text-lg font-medium rounded-lg">01 แปลงอุณหภูมิ</h3>
            <div className="inline-flex items-center gap-2 mt-2">
                <div className="inline-flex justify-center items-center bg-lime-200 w-fit px-2  rounded-full">
                    <span className="text-lime-400">
                        <BsCheck size="1.75rem" />
                    </span>
                    <p className="text-lg font-bold text-lime-400">3/5</p>
                </div>
                <div className="inline-flex justify-center items-center bg-lime-200 w-fit px-2  rounded-full">
                    <span className="text-red-400">
                        <FaTimes size="1.25rem" />
                    </span>
                    <p className="text-lg font-bold text-red-400">2/5</p>
                </div>
            </div>
        </div>
    )
}

export default Lab
