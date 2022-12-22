import { useState, useEffect } from 'react'
import { TiPlus, TiMinus } from 'react-icons/ti'

interface Props {
    value: number
    step?: number
    onChange: (value: number) => void
}

const InputRange = ({ value, onChange, step = 1 }: Props) => {
    const [inputValue, setInputValue] = useState<number>(value)

    useEffect(() => {
        onChange(inputValue)
    }, [inputValue])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value)
        if (Number.isNaN(value)) return setInputValue(1)
        setInputValue(value)
    }
    return (
        <div className="flex items-center gap-2 my-2 ">
            <button
                onClick={() => setInputValue((prev) => prev - step)}
                className="bg-gray-200 dark:bg-[#E0E2E8]/40 border border-gray-600 dark:border-[#E0E2E8] hover:bg-gray-300 transition-all duration-50  text-gray-800 dark:text-[#E0E2E8] rounded-full flex items-center justify-center p-1 outline-none"
            >
                <TiMinus size="1.25rem" />
            </button>
            <input
                value={inputValue}
                onChange={handleOnChange}
                type="number"
                className="border border-gray-600 dark:border-[#E0E2E8] bg-white dark:bg-transparent dark:text-[#E0E2E8] rounded-xl py-1 px-2 text-center flex-1"
            />
            <button
                onClick={() => setInputValue((prev) => prev + step)}
                className="bg-gray-200 dark:bg-[#E0E2E8]/40 border border-gray-600 dark:border-[#E0E2E8] hover:bg-gray-300 transition-all duration-50  text-gray-800 dark:text-[#E0E2E8] rounded-full flex items-center justify-center p-1 outline-none"
            >
                <TiPlus size="1.25rem" />
            </button>
        </div>
    )
}

export default InputRange
