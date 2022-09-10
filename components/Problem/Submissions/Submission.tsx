import { IoMdClipboard } from 'react-icons/io'
import CodeMirror from '@uiw/react-codemirror'
import Theme from '@/editorTheme/theme'
import { python } from '@codemirror/lang-python'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useLocalStorage, useElementSize } from 'usehooks-ts'
import { themesI } from '@/interface/Themes'
import { SubmissionI } from '@/interface/Submission'
import { useProblemContext } from '@/Context/Problem'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'

interface SubmissionCardI extends SubmissionI {
    isFirst: boolean
    isSelected: boolean
    onClick: () => void
}
function SubmissionCard({
    isFirst,
    isSelected,
    onClick,
    order,
    date,
    status,
    code,
}: SubmissionCardI) {
    const [theme, __] = useLocalStorage<themesI>('theme', 'bespin')

    const { setCode } = useProblemContext()

    const handleOnCopyToCurrent = () => {
        setCode(code)
    }

    return (
        <div className="w-full overflow-x-scroll">
            <div className="w-screen h-20 bg-red-200"> </div>
        </div>
    )

    return (
        <div className="bg-white p-4 rounded-md shadow-md flex flex-col w-full gap-4">
            <div className="flex justify-between items-center gap-2 cursor-pointer">
                <div
                    className="flex-1 flex items-center gap-4"
                    onClick={onClick}
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
                            ส่งเมื่อ{' '}
                            {format(date, 'dd MMMM yyyy', { locale: th })} เวลา{' '}
                            {format(date, 'HH:mm')}
                        </h4>
                    </div>
                </div>
                {isSelected && (
                    <button
                        className="active:text-gray-500 text-gray-900 transition-all duration-150 active:scale-110"
                        onClick={handleOnCopyToCurrent}
                    >
                        <IoMdClipboard size="1.5rem" />
                    </button>
                )}
                {isSelected ? <BsChevronUp /> : <BsChevronDown />}
            </div>
        </div>
    )
}

export default SubmissionCard

// {isSelected && (
//     <div className="rounded-md bg-black w-fit">
//         <div className="w-screen h-20 bg-yellow-200"></div>
//         {/* <CodeMirror
//             theme={Theme(theme)}
//             extensions={[python()]}
//             maxWidth="100%"
//             height="300px"
//             value={code}
//             readOnly
//         /> */}
//     </div>
// )}
