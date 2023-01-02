import Code from './Code'
import { useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { updateProblem } from '@/store/slices/lessonSlice'

import type { LessonQuizI } from '@/interface/LessonQuiz'
interface EachCodeBlock {
    id: string
    source: string
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
    readOnly: boolean
}
interface Props {
    id: string
    sources: EachCodeBlock[]
}
function CodeBlock({ id, sources }: Props) {
    const [allCode, setAllCode] = useState<EachCodeBlock[]>(sources)
    const answer = sources.map((source) => source.source).join('\n')
    const dispatch = useAppDispatch()
    const { problems } = useAppSelector((state) => state.lesson)

    const findProblem = problems.find(
        (problem: LessonQuizI) => problem.id === id
    )

    const handleOnRun = (index: number) => {
        return allCode
            .slice(0, index + 1)
            .map((code) => code.source)
            .join('\n')
    }

    const handleOnChange = (value: string, index: number) => {
        const newAllCode = [...allCode]
        newAllCode[index].source = value
        setAllCode(newAllCode)
        dispatch(updateProblem({ id, answer: value }))
    }

    return (
        <div>
            {sources.map(({ source, readOnlyRanges, readOnly, id }, index) => {
                return (
                    <Code
                        key={index}
                        id={id}
                        value={allCode[index].source}
                        onChange={(value) => handleOnChange(value, index)}
                        source={source}
                        readOnlyRanges={readOnlyRanges}
                        readOnly={readOnly}
                        run={handleOnRun(index)}
                        status={findProblem!.status}
                    />
                )
            })}
        </div>
    )
}

export default CodeBlock
