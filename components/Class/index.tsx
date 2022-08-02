import { IoIosCalendar } from 'react-icons/io'
import { HiOutlineClock } from 'react-icons/hi'
import { BiFlag } from 'react-icons/bi'
import Link from 'next/link'
function Index() {
    return (
        <Link href="class/cs112">
            <div className=" pt-4 bg-white rounded-lg p-4 shadow-md cursor-pointer w-full md:w-[26rem]">
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
            </div>
        </Link>
    )
}

export default Index
