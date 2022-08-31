import React from 'react'
import { MenuType } from '@/interface/Menu'

interface MenuProps {
    menu: MenuType
    onChange: (menu: MenuType) => void
}

function Menu({ menu, onChange }: MenuProps) {
    const menus = [
        { name: 'โจทย์', id: 'Description' },
        { name: 'คอนโซล', id: 'Console' },
        { name: 'ผลการส่ง', id: 'Submissions' },
    ]
    return (
        <>
            <div className="flex justify-around text-sm w-full h-fit">
                {menus.map(({ name, id }) => (
                    <button
                        onClick={() => onChange(id as MenuType)}
                        key={id}
                        className="flex flex-col w-full items-center"
                    >
                        <h4 className={id === menu ? 'font-bold' : ''}>
                            {name}
                        </h4>
                        <span
                            className={`border-b-4 ${
                                id === menu
                                    ? 'border-lime-500'
                                    : 'border-transparent'
                            } w-full`}
                        ></span>
                    </button>
                ))}
            </div>
            <hr />
        </>
    )
}

export default Menu