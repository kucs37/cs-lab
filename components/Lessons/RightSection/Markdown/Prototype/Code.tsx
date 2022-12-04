import React, { useState } from 'react'
import CodeMirror from '@/components/Editor/CodeMirror'
import { EditorState } from '@codemirror/state'
interface Props {
    id: string
    source: string
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
}

const getReadOnlyRanges = (
    targetState: EditorState,
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
): Array<{ from: number; to: number }> => {
    const ranges = readOnlyRanges.map((range) => {
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

function Code({ id, source, readOnlyRanges = [] }: Props) {
    const [value, setValue] = useState<string>(source)

    return (
        <div className="rounded-xl overflow-hidden shadow-md">
            <CodeMirror
                initialDoc={source}
                value={value}
                onChange={(value) => setValue(value)}
                height="100%"
                readOnlyRanges={(targetState: EditorState) =>
                    getReadOnlyRanges(targetState, readOnlyRanges)
                }
            />
        </div>
    )
}

export default Code
