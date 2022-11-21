import Link from 'next/link'
import { useRouter } from 'next/router'
function Outline() {
    const router = useRouter()
    return (
        <ul className="text-gray-500 leading-relaxed">
            {/* <Link href={`${router.asPath}`}>
                <a className="no-underline text-gray-900 font-semibold">
                    <li>01 Elab&apos;s Automatic Grading</li>
                </a>
            </Link> */}
            <li>02 Elab&apos;s Manual Grading</li>
            <li>03 Reusing Submitted Answer</li>
            <li>04 Variable and Basic Output</li>
            <li>05 Expression</li>
            <li>06 Basic Input</li>
            <li>07 - Exercise 1.1: Input Process Output</li>
            <li>08 Exercise 1.2: Input Process Output</li>
        </ul>
    )
}

export default Outline
