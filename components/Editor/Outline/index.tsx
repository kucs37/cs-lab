import Backto from '@/components/Common/BackArrow'
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
            <h4 className="text-2xl md:text-lg font-bold my-2 dark:text-ascent-1">
                CS Python Lab 01 Input Process Output
            </h4>
            <ul className="leading-relaxed text-lg md:text-base">
                <li className="text-gray-900 dark:text-ascent-1 font-bold">
                    01 Find a, b in which a*b=n and (a+b) is the lowest
                    <IoCheckmark className="inline text-lime-500 text-xl ml-2" />
                </li>

                <a
                    href="#"
                    className="no-underline block text-gray-500 dark:text-ascent-1"
                >
                    <li>
                        02 Elab Test Case
                        <IoClose className="inline text-red-500 text-xl ml-2" />
                    </li>
                </a>
                <a
                    href="#"
                    className="no-underline block text-gray-500 dark:text-ascent-1"
                >
                    <li>03 จะบวกแบบไหน</li>
                </a>
            </ul>
        </div>
    )
}

export default Outline
