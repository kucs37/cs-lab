import { WindowT } from '@/interface/Window'
import { BsCardChecklist, BsCode, BsTerminal } from 'react-icons/bs'

interface WindowP {
    active: WindowT
    setActive: (active: WindowT) => void
}

function Window({ active, setActive }: WindowP) {
    return (
        <div className="flex gap-1">
            <button
                className={`rounded-lg rounded-b-none px-2 py-2 border-2 border-b-0 inline-flex items-center gap-2 ${
                    active === 'code' && 'bg-gray-200'
                }`}
                onClick={() => setActive('code')}
            >
                <BsCode />
                <h4 className="text-sm font-medium">Code</h4>
            </button>
            <button
                className={`rounded-lg rounded-b-none px-2 py-2 border-2 border-b-0 inline-flex items-center gap-2 cursor-pointer ${
                    active === 'terminal' && 'bg-gray-200'
                }`}
                onClick={() => setActive('terminal')}
            >
                <BsTerminal />
                <h4 className="text-sm font-medium">Console</h4>
            </button>
            <button
                className={`rounded-lg rounded-b-none px-2 py-2 border-2 border-b-0 inline-flex items-center gap-2 cursor-pointer ${
                    active === 'submissions' && 'bg-gray-200'
                }`}
                onClick={() => setActive('submissions')}
            >
                <BsCardChecklist />
                <h4 className="text-sm font-medium">Submission</h4>
            </button>
        </div>
    )
}

export default Window
