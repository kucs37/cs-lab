import { IoIosCalendar } from 'react-icons/io'
import { HiOutlineClock } from 'react-icons/hi'
import { BiFlag } from 'react-icons/bi'
function Index() {
    return (
        <div className="w-fit h-32 bg-yellow-400 rounded-lg p-4 shadow-md">
            <span className="px-2 bg-yellow-200 w-fit rounded-full text-lg">CS112</span>
            <h3 className="font-bold text-xl my-2">
                Fundamental Programming Concepts
            </h3>
            <div className="inline-flex items-center gap-2">
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
        </div>
    )
}

export default Index
