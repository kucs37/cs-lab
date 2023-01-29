import Backto from '@/components/Common/Backto'
import Badge from '@/components/Common/Badge'
import { IoClose, IoCheckmark } from 'react-icons/io5'
import clsx from 'clsx'

interface Props {
    className?: string
}
function Outline({ className }: Props) {
    return (
        <div className={clsx('pb-4 break-words', className)}>
            <Badge title="อ่านอย่างเดียว" />
            <h4 className="text-lime-600 font-bold my-2">
                CS Python Lab 01 Input Process Output
            </h4>
            <ul className="leading-relaxed text-lg md:text-lg">
                <li className="text-gray-900 dark:text-ascent-1 font-bold border p-1 rounded-lg bg-zinc-50">
                    01 Find a, b in which a*b=n and (a+b) is the lowest
                    <IoCheckmark className="inline text-lime-500 text-xl ml-2" />
                </li>

                <a
                    href="#"
                    className="no-underline block text-gray-500 dark:text-ascent-1 border p-1 rounded-lg mt-2"
                >
                    <li>
                        02 Elab Test Case
                        <IoClose className="inline text-red-500 text-xl ml-2" />
                    </li>
                </a>
                <a
                    href="#"
                    className="no-underline block text-gray-500 dark:text-ascent-1 border p-1 rounded-lg bg-zinc-50 mt-2"
                >
                    <li>03 จะบวกแบบไหน</li>
                </a>
            </ul>
        </div>
    )
}

export default Outline
