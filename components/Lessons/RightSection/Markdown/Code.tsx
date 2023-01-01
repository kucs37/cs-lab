import React, { useState } from 'react'
import CodeMirror from '@/components/Editor/CodeMirror'
import { EditorState } from '@codemirror/state'
import { BsPlay } from 'react-icons/bs'
interface Props {
    id: string
    source: string
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
    readOnly: boolean
}

const getReadOnlyRanges = (
    targetState: EditorState,
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
): Array<{ from: number; to: number }> => {
    const ranges = readOnlyRanges.map((range, id) => {
        const { line, from, to } = range

        const lineStart = targetState.doc.line(line).from
        const lineEnd = targetState.doc.line(line).to

        return {
            from: from < 0 ? lineEnd + from : lineStart + from,
            to: to < 1 ? lineEnd + to : lineStart + to,
        }
    })

    return ranges
}

function Code({ id, source, readOnlyRanges = [], readOnly }: Props) {
    const [value, setValue] = useState<string>(source)

    return (
        <div className="flex items-start gap-2 w-full my-2">
            <button className="bg-lime-500 hover:bg-lime-400 rounded-full w-10 h-10 flex justify-center items-center">
                <BsPlay size="1.25rem" className='text-lime-700' />
            </button>
            <div className="flex-1 rounded-xl overflow-hidden shadow-md border dark:border-transparent border-[#dddd]">
                <CodeMirror
                    customFontSize={18}
                    variant="lesson"
                    initialDoc={source}
                    value={value}
                    onChange={(value) => setValue(value)}
                    height="100%"
                    readonly={readOnly}
                    readOnlyRanges={(targetState: EditorState) => {
                        console.log(targetState.doc.lines)

                        return getReadOnlyRanges(targetState, readOnlyRanges)
                    }}
                />
            </div>
        </div>
    )
}

export default Code
