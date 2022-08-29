import { useState, useRef, useEffect } from 'react'
import { IoMdClipboard } from 'react-icons/io'
import CodeMirror from '@uiw/react-codemirror'
import Theme from '../theme'
import { python } from '@codemirror/lang-python'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useLocalStorage, useElementSize } from 'usehooks-ts'
import { themesI } from '@/interface/Themes'
import { SubmissionI } from '@/interface/Submission'

interface SubmissionCardI extends SubmissionI {
    isFirst: boolean
}
function SubmissionCard({
    isFirst,
    order,
    date,
    status,
    code,
}: SubmissionCardI) {
    const [theme, _] = useLocalStorage<themesI>('theme', 'bespin')

    const [cardRef, { width }] = useElementSize()

    const [isSelected, setIsSelected] = useState<boolean>(isFirst)

    return (
        <div
            className="bg-white p-4 rounded-md shadow-md flex flex-col w-full gap-4"
            ref={cardRef}
        >
            <div className="flex justify-between items-center gap-2 cursor-pointer">
                <div
                    className="flex-1 flex items-center gap-4"
                    onClick={() => setIsSelected(!isSelected)}
                >
                    <div className="p-2 w-10 h-10 rounded-full flex justify-center items-center">
                        <h3 className="text-gray-900 font-bold text-lg">
                            {order}
                        </h3>
                    </div>
                    <div>
                        <h1 className="text-md font-semibold leading-loose">
                            ({status.join('')})
                        </h1>
                        <h4 className="text-sm">
                            ส่งเมื่อ 05 ส.ค 2565 เวลา 16:07
                        </h4>
                    </div>
                </div>
                <div>
                    <IoMdClipboard size="1.5rem" />
                </div>
                {isSelected ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isSelected && (
                <div className="rounded-md overflow-hidden">
                    <CodeMirror
                        theme={Theme(theme)}
                        extensions={[python()]}
                        width="100%"
                        height="300px"
                        value={code}
                        readOnly
                    />
                </div>
            )}
        </div>
    )
}

export default SubmissionCard
