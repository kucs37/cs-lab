import Backto from '@/components/Common/Backto'
import Badge from '@/components/Common/Badge'
import React from 'react'

function Navigation() {
    return (
        <div className="p-4 border-r-1 border-gray-200">
            <Backto href="/" className='mb-4' />
            <Badge title="อ่านอย่างเดียว" color="red" />
            <h4 className="text-lg font-bold my-2">
                CS Python Lab 01 Input Process Output
            </h4>
            <ul className="text-gray-500">
                <a className="no-underline text-gray-900">
                    <li>01 แปลงอุณหภูมิ</li>
                </a>
                <li>02 แตกหน่วยวินาที</li>
                <li>03 จะบวกแบบไหน</li>
                <li>04 คะแนนสอบ</li>
                <li>05 ค่าตัดหญ้า</li>
                <li>06 Basic Input</li>
                <li>06 พิมพ์ดาวบรรทัดเดียว</li>
            </ul>
        </div>
    )
}

export default Navigation
