import { OutlineI } from '@/interface/Outline'
import React from 'react'
import ScrollSpy from 'react-scrollspy'
import clsx from 'clsx'

interface Props {
    outline: OutlineI[]
    className?: string
}
function ScrollDetect({ outline, className }: Props) {
    return (
        <ScrollSpy
            className={clsx(
                'border-l-2 border-gray-200 h-fit pb-3 pl-2 text-gray-300 dark:text-[#E0E2E8]/30 text-sm leading-loose',
                className
            )}
            items={outline.map(({ id }) => id)}
            currentClassName="text-gray-900 dark:text-[#E0E2E8] font-semibold"
        >
            {outline.map(({ id, name }) => (
                <li key={id} className="hover:text-gray-500 w-fit">
                    <a href={`#${id}`}>{name}</a>
                </li>
            ))}
        </ScrollSpy>
    )
}

export default ScrollDetect
