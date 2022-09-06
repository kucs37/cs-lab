import Link from 'next/link'
import { useRouter } from 'next/router'
interface Props {}

function Breadcrumb({}: Props) {
    const router = useRouter()

    return (
        <div className="flex items-center text-sm">
            <p>
                <Link href="/cs112">
                    <a>Fundamental Programming Concepts</a>
                </Link> {" "}
                / CS Python Lab 01 Input Process Output
            </p>
        </div>
    )
}

export default Breadcrumb
