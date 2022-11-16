import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useRef, useCallback } from 'react'
import useCodemirror from '@/hooks/useCodemirror'
import { FaHistory } from 'react-icons/fa'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from '@/store'
import { useOnClickOutside } from 'usehooks-ts'
import HistoryItems from './HistoryItem'
import { initialDoc } from '@/fakeData/initialDoc'

function History() {
    const selected = useSelector((state: RootState) => state.history.selected)
    const dispatch = useDispatch<Dispatch>()

    const historyWindow = useRef<HTMLDivElement>(null)
    const closeBtnRef = useRef<HTMLDivElement>(null)
    const bottomRef = useRef<HTMLDivElement>(null)

    const [editorRef, editorView] = useCodemirror({
        initialDoc,
        onChange: (value) => console.log(value),
        readonly: true,
    })

    useOnClickOutside(historyWindow, () => dispatch.menus.toggleHistory())

    useEffect(() => {
        dispatch.history.setHistory([
            {
                code: initialDoc,
                date: new Date('November 16, 2565 11:12:00'),
                status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
            },
            {
                code: 'Hello World',
                date: new Date('November 16, 2565 11:12:01'),
                status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
            },
        ])
        dispatch.history.setSelected({
            code: initialDoc,
            date: new Date('November 16, 2565 11:12:00'),
            status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
        })
    }, [])

    const updateEditor = useCallback(
        (code: string) => {
            if (editorView)
                editorView.dispatch(
                    editorView.state.update({
                        changes: {
                            from: 0,
                            to: editorView.state.doc.length,
                            insert: code,
                        },
                    })
                )
        },
        [editorView]
    )

    useEffect(() => {
        if (selected) updateEditor(selected.code)
    }, [selected, updateEditor])

    return (
        <div className="fixed w-full h-full bg-black bg-opacity-25 z-40 flex items-center justify-center">
            <div
                ref={historyWindow}
                className="bg-white w-5/6 h-5/6 rounded-lg overflow-hidden grid grid-cols-8 auto-rows-fr"
            >
                <div className="col-span-2 border-r-2 p-4">
                    <div className="flex items-center gap-2">
                        <FaHistory />
                        <h4 className="text-xl font-semibold">ประวัติการส่ง</h4>
                    </div>
                    <div className="flex flex-col gap-2 mt-3">
                        <HistoryItems />
                    </div>
                </div>

                <div ref={closeBtnRef} className="col-span-6 flex flex-col">
                    <button
                        onClick={() => dispatch.menus.toggleHistory()}
                        className="self-end p-4"
                    >
                        <IoClose size="1.25rem" />
                    </button>
                    <div className="flex-1 overflow-y-scroll">
                        <div ref={editorRef} className="h-full"></div>
                    </div>
                    <div
                        ref={bottomRef}
                        className="bg-gray-50 flex justify-end p-2"
                    >
                        <button className="bg-yellow-400 py-2 px-4 rounded-lg flex items-center gap-1 text-gray-800">
                            <HiOutlineClipboardCopy />
                            คัดลอก
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
