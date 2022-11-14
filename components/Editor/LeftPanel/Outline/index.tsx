import Backto from '@/components/Common/Backto'
import Badge from '@/components/Common/Badge'
import { IoClose, IoCheckmark } from 'react-icons/io5'

function Outline() {
    return (
        <div className="pb-4 break-words">
            <Badge
                title="อ่านอย่างเดียว"
                backgroundColor="#fecaca"
                color="#ef4444"
            />
            <h4 className="text-lg font-bold my-2">
                CS Python Lab 01 Input Process Output
            </h4>
            <ul>
                <li className="text-gray-900 font-bold flex items-center gap-2">
                    01 แปลงอุณหภูมิ
                    <IoCheckmark className="text-lime-500 text-xl" />
                </li>

                <a
                    href="#"
                    className="no-underline text-gray-500 flex items-center gap-2"
                >
                    <li>02 แตกหน่วยวินาที</li>
                    <IoClose className="text-red-500 text-xl" />
                </a>
                <a href="#" className="no-underline text-gray-500">
                    <li>03 จะบวกแบบไหน</li>
                </a>
                <a href="#" className="no-underline text-gray-500">
                    <li>04 คะแนนสอบ</li>
                </a>
                <a href="#" className="no-underline text-gray-500">
                    <li>05 ค่าตัดหญ้า</li>
                </a>
                <a href="#" className="no-underline text-gray-500">
                    <li>06 Basic Input</li>
                </a>
                <a href="#" className="block no-underline text-gray-500">
                    <li>06 พิมพ์ดาวบรรทัดเดียว</li>
                </a>
            </ul>
        </div>
    )
}

export default Outline
