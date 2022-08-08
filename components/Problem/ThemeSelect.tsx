import { themesI } from '@interface/Themes'
import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
interface ThemeSelectI {
    select: themesI
    options: themesI[]
    onSelect: (value: themesI) => void
}
function ThemeSelect({ select, options, onSelect }: ThemeSelectI) {
    const [isSelect, setIsSelect] = useState<boolean>(false)
    const handleOnClick = () => setIsSelect(!isSelect)

    const handleSelectTheme = (name: themesI) => {
        setIsSelect(false)
        onSelect(name)
    }
    return (
        <div className="relative">
            <button
                onClick={handleOnClick}
                className="border-2 border-gray-200 rounded-lg py-2 px-3 flex items-center gap-2"
            >
                <p>{select}</p>
                {isSelect ? <BsChevronUp /> : <BsChevronDown />}
            </button>
            {isSelect && (
                <div className="absolute z-40  mt-2 w-fit rounded-md shadow-lg bg-white flex flex-col gap-2 cursor-pointer">
                    {options.map((name) => (
                        <span
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
