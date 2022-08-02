import { BiFlag } from 'react-icons/bi'
import { HiOutlineClock } from 'react-icons/hi'
import { IoIosCalendar } from 'react-icons/io'

function Header() {
    return (
        <>
        
                <span className="px-2 bg-gray-200 w-fit rounded-full text-md">
                    CS112
                </span>
                <h3 className="font-bold text-xl my-2">
                    Fundamental Programming Concepts
                </h3>
                <div className="w-full inline-flex items-center gap-2 flex-wrap">
                    <div className="inline-flex items-center gap-2">
                        <IoIosCalendar size="1.25rem" />
                        <p className="">2565/1</p>
                    </div>
                    <p>•</p>
                    <div className="inline-flex items-center gap-2">
                        <HiOutlineClock size="1.25rem" />
                        <p className="">15:00-17:00</p>
                    </div>
                    <p>•</p>
                    <div className="inline-flex items-center gap-2">
                        <BiFlag size="1.25rem" />
                        <p className="">หมู่ 11</p>
                    </div>
                </div>
        </>
        // <div className="absolute -top-10 left-6">
        // </div>
    )
}

export default Header
