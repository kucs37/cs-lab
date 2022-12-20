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
            <h4 className="text-2xl md:text-lg font-bold my-2 dark:text-[#E0E2E8]">
                CS Python Lab 01 Input Process Output
            </h4>
            <ul className="leading-relaxed text-lg md:text-base">
                <li className="text-gray-900 dark:text-[#E0E2E8] font-bold">
                    01 Find a, b in which a*b=n and (a+b) is the lowest
                    <IoCheckmark className="inline text-lime-500 text-xl ml-2" />
                </li>

                <a
                    href="#"
                    className="no-underline text-gray-500 dark:text-[#E0E2E8]"
                >
                    <li>
                        02 Elab Test Case
                        <IoClose className="inline text-red-500 text-xl ml-2" />
                    </li>
                </a>
                <a
                    href="#"
                    className="no-underline text-gray-500 dark:text-[#E0E2E8]"
                >
                    <li>03 จะบวกแบบไหน</li>
                </a>
            </ul>
        </div>
    )
}

export default Outline
