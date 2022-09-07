import { v4 as uuid } from 'uuid'

interface TypeI {
    tagName: string
    value: string
    children: TypeI[]
}

interface CodeEditorI {
    code: TypeI[]
}

function CodeEditor({ code }: CodeEditorI) {
    return (
        <div className="not-prose flex flex-col gap-3 w-full border-2 rounded-lg border-gray-200 shadow-sm p-4 bg-gray-50">
            {code.map(({ tagName, children }) => {
                const key = uuid()
                if (tagName === 'code') {
                    if (children[0].value.length)
                        if (
                            children.some(
                                ({ tagName }) => tagName === 'hideinline'
                            )
                        ) {
                            return (
                                <div
                                    className="inline-flex items-center gap-2"
                                    key={key}
                                >
                                    <h4>{children[0].value}</h4>

                                    <input className="border-2 border-gray-200 rounded-md w-fit px-2 outline-gray-500" />
                                </div>
                            )
                        }
                    return <h4 key={key}>{children[0].value} </h4>
                }
                if (tagName === 'hideinline') {
                    return (
                        <input
                            className="border-2 border-gray-200 rounded-md w-fit px-2 outline-gray-500"
                            key={key}
                        />
                    )
                }

                if (tagName === 'blank') {
                    return (
                        <input
                            className="border-2 border-gray-200 rounded-md w-full px-2 outline-gray-500"
                            key={key}
                        />
                    )
                }

                if (tagName === 'hidemultiple') {
                    return (
                        <textarea
                            key={key}
                            rows={2}
                            className="border-2 border-gray-200 rounded-md p-2 outline-gray-500"
                        />
                    )
                }
            })}
        </div>
    )
}

export default CodeEditor
