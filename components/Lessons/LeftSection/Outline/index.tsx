import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoCheckmark, IoClose } from 'react-icons/io5'
function Outline() {
    const router = useRouter()
    return (
        <ul className="text-gray-400 no-underline leading-relaxed">
            <Link href={`${router.asPath}`}>
                <a className="no-underline text-gray-900 font-bold">
                    <li>
                        01 Elab&apos;s Automatic Grading
                        <IoCheckmark className="inline text-lime-500 text-xl ml-2" />
                    </li>
                </a>
            </Link>

            <a href="#">
                <li>
                    02 Elab&apos;s Manual Grading
                    <IoClose className="inline text-red-500 text-xl ml-2" />
                </li>
            </a>
            <a href="#">
                <li>03 Reusing Submitted Answer</li>
            </a>
            <a href="#">
                <li> 04 Variable and Basic Output</li>
            </a>

            <a href="#">
                <li>05 Expression</li>
            </a>
            <a href="#">
                <li>06 Basic Input</li>
            </a>
            <a href="#">
                <li>07 - Exercise 1.1: Input Process Output</li>
            </a>
            <a href="#">
                <li>08 Exercise 1.2: Input Process Output</li>
            </a>
        </ul>
    )
}

export default Outline
