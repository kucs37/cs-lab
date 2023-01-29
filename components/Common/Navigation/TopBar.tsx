import React from 'react'
import clsx from 'clsx'
import { IoCheckmark } from 'react-icons/io5'

function TopBar() {
    const outline = [
        { name: 'List Index และการเข้าถึง (access) ข้อมูลใน List', id: '01' },
        {
            name: 'วิธีการเข้าถึง (access) ข้อมูลใน List โดยใช้ Index',
            id: '02',
        },
        { name: 'การใช้งาน While loop', id: '03' },
        { name: 'แบบฝึกหัด', id: '04' },
        { name: 'Index เป็นค่าลบได้', id: '05' },
        {
            name: 'วิธีการเข้าถึง (access) ข้อมูลใน List โดยใช้ Index',
            id: '06',
        },
        { name: 'ระวังการเข้าถึงค่า ณ Index ที่ไม่มีใน List', id: '07' },
    ]
    return (
        <ul className="leading-loose my-4 list-inside bg-zinc-50 dark:bg-zinc-600 border border-zinc-300 dark:border-zinc-700 p-3 px-4 rounded-xl md:w-fit">
            {outline.map(({ name, id }) => (
                <a href="#" key={id} className="block">
                    <li className={clsx(id === '03' ? 'font-bold  dark:text-ascent-1' : 'text-zinc-500 dark:text-zinc-400' )}>
                        <span className="inline-flex items-center gap-2">
                            {name}
                            <IoCheckmark className="col-span-1 text-lime-500 dark:text-green-1 text-2xl" />
                        </span>
                    </li>
                </a>
            ))}
        </ul>
    )
}

export default TopBar
