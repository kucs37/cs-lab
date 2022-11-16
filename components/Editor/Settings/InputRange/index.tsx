import { useState, useEffect } from 'react'
import { TiPlus, TiMinus } from 'react-icons/ti'

interface Props {
    value: number
    unit?: string
    step?: number
    onChange: (value: number) => void
}

const InputRange = ({ value, onChange, unit, step = 1 }: Props) => {
    const [inputValue, setInputValue] = useState<number>(value)

    useEffect(() => {
        onChange(inputValue)
    }, [inputValue])
    return (
        <div className="flex items-center gap-2 my-2">
            <button
                onClick={() => setInputValue((prev) => prev - step)}
                className="bg-gray-200 hover:bg-gray-300 transition-all duration-50  text-gray-800 rounded-full flex items-center justify-center p-1 outline-none"
            >
                <TiMinus size="1.25rem" />
            </button>
            <input
                value={`${inputValue}${unit ? unit : ''}`}
                readOnly
                type="text"
                className="border-1 border-gray-600 rounded-xl py-1 px-2 text-center flex-1"
            />
            <button
                onClick={() => setInputValue((prev) => prev + step)}
                className="bg-gray-200 hover:bg-gray-300 transition-all duration-50  text-gray-800 rounded-full flex items-center justify-center p-1 outline-none"
            >
                <TiPlus size="1.25rem" />
            </button>
        </div>
    )
}

export default InputRange
