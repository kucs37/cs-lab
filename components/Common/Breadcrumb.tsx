import Link from 'next/link'
import { useRouter } from 'next/router'
interface Props {}

function Breadcrumb({}: Props) {
    const router = useRouter()

    return (
        <div className="flex flex-wrap items-center gap-4 my-4 text-sm">
            <Link href="/cs112">
                <a>
                    <p>Fundamental Programming Concepts</p>
                </a>
            </Link>
            <p>/</p>
            <p className='font-bold'>CS Python Lab 01 Input Process Output</p>
        </div>
    )
}

export default Breadcrumb
