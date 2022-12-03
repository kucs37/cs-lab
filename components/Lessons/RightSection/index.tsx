import { useState } from 'react'
import Footer from './Common/Footer'
import Markdown from './Markdown/index'
import ScrollSpy from 'react-scrollspy'
import { OutlineI } from '@/interface/Outline'
import Outline from '@/components/Lessons/RightSection/Outline'

interface Props {
    outline: OutlineI[]
    labMD: string
}

interface TOC {
    id: string
    title: string
}

function RightSection({ outline, labMD }: Props) {
    return (
        <div className="col-span-12 md:col-span-9 2xl:col-span-10 flex py-10 gap-10 relative">
            <div className="w-full md:w-9/12 md:px-10">
                <Markdown labMD={labMD} />
                <Footer />
            </div>

            <ScrollSpy
                className="hidden md:block border-l-2 border-gray-200 h-fit pb-3 pl-2 text-gray-300 text-sm leading-loose sticky top-20"
                items={outline.map(({ id }) => id)}
                currentClassName="text-gray-900 font-semibold"
                scrolledPastClassName="text-gray-400"
            >
                {outline.map(({ id, name }) => (
                    <li key={id}>
                        <a href={`#${id}`}>{name}</a>
                    </li>
                ))}
            </ScrollSpy>
        </div>
    )
}

export default RightSection
