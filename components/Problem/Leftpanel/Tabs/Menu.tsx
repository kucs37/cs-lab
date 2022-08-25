import React from 'react'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import { MenuType } from '@interface/Menu'

interface MenuProps {
    menu: MenuType
    onChange: (menu: MenuType) => void
}

function Menu({ menu, onChange }: MenuProps) {
    const router = useRouter()
    const goBack = () => {
        router.push(`/${router.query.class}/lab/${router.query.labId}/`)
    }
    const menus = [
        { name: 'โจทย์', id: 'Description' },
        { name: 'คอนโซล', id: 'Console' },
        { name: 'ผลลัพธ์', id: 'Submissions' },
        { name: 'กระทู้', id: 'Discussion' },
    ]
    return (
        <>
            <button
                className="items-center gap-2 w-fit p-4 mt-4 md:mt-0 flex md:hidden"
                onClick={() => goBack()}
            >
                <FaChevronLeft />
                <p>ย้อนกลับ</p>
            </button>
            <div className="flex md:flex-col w-full md:w-[75px] justify-around text-sm mt-10">
                {menus.map(({ name, id }) => (
                    <button
                        onClick={() => onChange(id as MenuType)}
                        key={id}
                        className="flex flex-col w-full items-center md:-rotate-90"
                    >
                        <h4 className={id === menu ? 'font-bold' : ''}>
                            {name}
                        </h4>
                        <span
                            className={`border-b-4 ${
                                id === menu
                                    ? 'border-lime-500'
                                    : 'border-transparent'
                            } w-2/3`}
                        ></span>
                    </button>
                ))}
            </div>
            <hr />
        </>
    )
}

export default Menu
