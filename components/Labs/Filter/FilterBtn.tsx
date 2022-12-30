import clsx from 'clsx'
import React from 'react'

interface Props {
    text: string
    isSelected: boolean
    onClick: () => void
}

const FilterBtn = ({ text, isSelected, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'rounded-full px-4 py-1 border-2',
                'border-gray-900 dark:border-ascent-1 ',
                'text-gray-900 dark:text-ascent-1',
                isSelected &&
                    'bg-gray-900 dark:bg-ascent-1 text-white dark:text-[#171819]'
            )}
        >
            <p>{text}</p>
        </button>
    )
}

export default FilterBtn
