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
        <div className={`relative select-none ${className}`} ref={selectRef}>
            <button
                onClick={handleOnClick}
                className="border-1 bg-gray-100 border-gray-200 text-gray-800 rounded-lg py-2 px-3 flex justify-between items-center gap-2 w-full"
            >
                <p>{selected}</p>
                {isSelect ? <BsChevronUp /> : <BsChevronDown />}
            </button>
            {isSelect && (
                <div className="absolute mt-1 z-40 w-full rounded-md shadow-md border-1 bg-gray-100 border-gray-200  flex flex-col gap-2 cursor-pointer h-fit">
                    {options.map((name) => (
                        <span
                            key={name}
                            className="hover:bg-gray-200  px-4 py-2"
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
