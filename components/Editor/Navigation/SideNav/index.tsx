import Backto from '@/components/Common/Backto'
import Badge from '@/components/Common/Badge'
import React from 'react'
import Settings from '../../Buttons'

function Navigation() {
    return (
        <div className="pb-4 break-words">
            {/* <Badge title="อ่านอย่างเดียว" color="red" /> */}
            <h4 className="text-lg font-bold my-2">
                CS Python Lab 01 Input Process Output
            </h4>
            <ul>
                <li className="text-gray-900 font-bold">
                    01 แปลงอุณหภูมิ
                    {/* <div className="text-gray-900 font-bold">
                        (<span className="text-lime-500">P-PPP</span>)
                    </div> */}
                </li>

                <a href="#" className="no-underline text-gray-500">
                    <li>02 แตกหน่วยวินาที</li>
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

export default Navigation
