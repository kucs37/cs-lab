import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoCheckmark, IoClose } from 'react-icons/io5'
function Outline() {
    const router = useRouter()
    return (
        <ul className="text-gray-400 no-underline flex flex-col gap-3">
            <Link href={`${router.asPath}`}>
                <a className="no-underline text-gray-900 font-bold grid grid-cols-12 items-center">
                    <li className="col-span-11">
                        01 Elab&apos;s Automatic Grading
                    </li>
                    <IoCheckmark className="col-span-1 text-lime-500 text-2xl" />
                </a>
            </Link>

            <a href="#" className="no-underline grid grid-cols-12 items-center">
                <li className="col-span-11">02 Elab&apos;s Manual Grading</li>
                <IoClose className="text-red-500 text-2xl" />
            </a>
            <a href="#" className="no-underline grid grid-cols-12 items-center">
                <li className="col-span-11">03 Reusing Submitted Answer</li>
                <IoCheckmark className="col-span-1 text-lime-500 text-2xl" />
            </a>
            <a href="#" className="no-underline grid grid-cols-12 items-center">
                <li className="col-span-11"> 04 Variable and Basic Output</li>
                <IoCheckmark className="col-span-1 text-lime-500 text-2xl" />
            </a>

            <a href="#" className="no-underline grid grid-cols-12 items-center">
                <li className="col-span-11">05 Expression</li>
                <IoCheckmark className="col-span-1 text-lime-500 text-2xl" />
            </a>
            <a href="#" className="no-underline grid grid-cols-12 items-center">
                <li className="col-span-11">06 Basic Input</li>
                <IoCheckmark className="col-span-1 text-lime-500 text-2xl" />
            </a>
            <a href="#" className="no-underline grid grid-cols-12 items-center">
                <li className="col-span-11">
                    07 - Exercise 1.1: Input Process Output
                </li>
                <IoCheckmark className="col-span-1 text-lime-500 text-2xl" />
            </a>
            <a href="#" className="no-underline grid grid-cols-12 items-center">
                <li className="col-span-11">
                    08 Exercise 1.2: Input Process Output
                </li>
                <IoCheckmark className="col-span-1 text-lime-500 text-2xl" />
            </a>
        </ul>
    )
}

export default Outline
