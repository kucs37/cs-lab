import { useState } from 'react'
import clsx from 'clsx'
import { HiOutlineCommandLine } from 'react-icons/hi2'
import { BiCodeCurly } from 'react-icons/bi'

type Selected = 'code' | 'console'
interface Props {
    selected: Selected
    onSelect: (selected: Selected) => void
}
function Select({ selected, onSelect }: Props) {
    return (
        <div className="self-center w-fit flex justify-between gap-2 items-center border border-zinc-500 dark:border-white rounded-full dark:text-ascent-1 mb-4 p-1">
            <button
                onClick={() => onSelect('code')}
                className={clsx(
                    'px-4 py-1 rounded-full flex items-center gap-2',
                    selected === 'code' &&
                        'bg-zinc-800 text-white dark:bg-gray-200 dark:text-gray-900'
                )}
            >
                <HiOutlineCommandLine />
                Code
            </button>
            <button
                onClick={() => onSelect('console')}
                className={clsx(
                    'px-4 py-1 rounded-full flex items-center gap-2',
                    selected === 'console' &&
                        'bg-zinc-800 text-white dark:bg-gray-200 dark:text-gray-900'
                )}
            >
                <BiCodeCurly />
                Console
            </button>
        </div>
    )
}

export default Select
