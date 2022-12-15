import { useState } from 'react'
import Footer from './Common/Footer'
import Markdown from './Markdown/index'
import ScrollSpy from 'react-scrollspy'
import { OutlineI } from '@/interface/Outline'
import Outline from '@/components/Lessons/RightSection/Outline'
import ScrollDetect from '../ScrollDetect'

interface Props {
    title: string
    outline: OutlineI[]
    labMD: string
}

function RightSection({ title, outline, labMD }: Props) {
    return (
        <div className="col-span-12 md:col-span-9 2xl:col-span-10 flex py-10 gap-10 relative">
            <div className="w-full md:w-9/12 md:px-10">
                <h4 className="text-lime-600 my-2">{title}</h4>
                <Markdown labMD={labMD} />
                <Footer />
            </div>

            <ScrollDetect outline={outline} className="hidden md:block sticky top-20" />
        </div>
    )
}

export default RightSection
