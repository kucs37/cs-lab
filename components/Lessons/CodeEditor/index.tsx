import { ChangeEvent, useState, useEffect } from 'react'
import { useLessonCTX } from '@/Context/Lessons'

interface TypeI {
    tagName: string
    value: string
    children: TypeI[]
}

interface CodeEditorI {
    code: TypeI[]
}

interface AnswersI {
    [key: string]: string
}

function CodeEditor({ code }: CodeEditorI) {
    const problemID = code[0].children[0].value
    const [answers, setAnswers] = useState<AnswersI>({})
    const { lessonQuizzes, setLessonQuizzes } = useLessonCTX()

    useEffect(() => {
        const otherQuizzes = lessonQuizzes.filter(
            (quiz) => quiz.id !== problemID
        )
        setLessonQuizzes([
            ...otherQuizzes,
            { id: problemID, answers: Object.values(answers) },
        ])
    }, [answers])

    useEffect(() => {
        setAnswers({})
    }, [lessonQuizzes.length === 0])

    const handleOnChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setAnswers((prev) => ({
            ...prev,
            [index]: e.target.value,
        }))
    }

    return (
        <div className="not-prose flex flex-col gap-3 w-full border-2 rounded-lg border-gray-200 shadow-sm p-4 bg-gray-50">
            {code.map(({ tagName, children }, index) => {
                if (tagName === 'code') {
                    if (
                        children.some(({ tagName }) => tagName === 'hideinline')
                    ) {
                        return (
                            <div
                                className="inline-flex items-center gap-2"
                                key={index}
                            >
                                <h4>{children[0].value}</h4>

                                <input
                                    className="border-2 border-gray-200 rounded-md  px-2 outline-gray-500"
                                    size={children[1].children[0].value.length}
                                    value={answers[index] ? answers[index] : ''}
                                    onChange={(
                                        ev: ChangeEvent<HTMLInputElement>
                                    ) => handleOnChange(index, ev)}
                                />
                            </div>
                        )
                    }
                    return <h4 key={index}>{children[0].value}</h4>
                }

                if (tagName === 'blank') {
                    return (
                        <input
                            className="border-2 border-gray-200 rounded-md w-full px-2 outline-gray-500"
                            key={index}
                            value={answers[index] ? answers[index] : ''}
                            onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                                handleOnChange(index, ev)
                            }
                        />
                    )
                }

                if (tagName === 'hidemultiple') {
                    const rows = children[0].value.split('\n').length
                    return (
                        <textarea
                            key={index}
                            rows={rows}
                            className="border-2 border-gray-200 rounded-md p-2 outline-gray-500"
                            value={answers[index] ? answers[index] : ''}
                            onChange={(ev: ChangeEvent<HTMLTextAreaElement>) =>
                                handleOnChange(index, ev)
                            }
                        />
                    )
                }
            })}
        </div>
    )
}

export default CodeEditor
