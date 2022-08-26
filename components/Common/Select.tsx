import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useOnClickOutside } from 'usehooks-ts'
import { useRef } from 'react'

interface SelectI {
    className?: string
    selected: any
    options: any[]
    onSelect: (value: any) => void
}
function ThemeSelect({ selected, options, onSelect, className }: SelectI) {
    const selectRef = useRef<HTMLDivElement>(null)
    const [isSelect, setIsSelect] = useState<boolean>(false)
    const handleOnClick = () => setIsSelect(!isSelect)

    const handleSelectTheme = (name: any) => {
        setIsSelect(false)
        onSelect(name)
    }

    useOnClickOutside(selectRef, () => setIsSelect(false))

    return (
        <div
            className={`relative select-none ${className}`}
            ref={selectRef}
        >
            <button
                onClick={handleOnClick}
                className="border-2 border-gray-200 rounded-lg py-2 px-3 flex justify-between items-center gap-2 w-full"
            >
                <p>{selected}</p>
                {isSelect ? <BsChevronUp /> : <BsChevronDown />}
            </button>
            {isSelect && (
                <div className="absolute z-40 mt-2 w-full rounded-md shadow-lg bg-white flex flex-col gap-2 cursor-pointer h-[300px] overflow-y-scroll">
                    {options.map((name) => (
                        <span
                            key={name}
                            className="hover:bg-gray-50  px-4 py-2"
                            onClick={() => handleSelectTheme(name)}
                        >
                            {name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ThemeSelect
