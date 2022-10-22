import { ChangeEvent, useState, useEffect } from 'react'
import { useLessonCTX } from '@/Context/Lessons'
import Input from '@/components/Lessons/Common/Input'
import TextArea from '@/components/Lessons/Common/TextArea'
import { toFinalAnswer } from './utils/toFinalAnswer'
import { AnswersI, TypeI } from './interface'

interface CodeEditorI {
    code: TypeI[]
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
            {
                id: problemID,
                answers: toFinalAnswer(code, answers),
                status: 'not-answered',
            },
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
        <div className="not-prose flex flex-col gap-3 w-full border-2 rounded-lg border-gray-200 shadow-sm p-4 bg-gray-50 mb-10">
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

                                <Input
                                    status="not-answered"
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
                        <Input
                            key={index}
                            status="not-answered"
                            value={answers[index] ? answers[index] : ''}
                            onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                                handleOnChange(index, ev)
                            }
                            wFull
                        />
                    )
                }

                if (tagName === 'hidemultiple') {
                    const rows = children[0].value.split('\n').length
                    return (
                        <TextArea
                            status="not-answered"
                            key={index}
                            rows={rows}
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
