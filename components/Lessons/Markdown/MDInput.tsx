import { useLessonCTX } from '@/Context/Lessons'
import { useState, ChangeEvent, useEffect } from 'react'
import Input from '../Common/Input'
import { LessonQuizzesStatus } from '@/Context/Lessons/interface'

interface InputProps {
    node: any
}

function MDInput({ node }: InputProps) {
    const problemId = node.properties.id
    const [status, setStatus] = useState<LessonQuizzesStatus>('not-answered')
    const [value, setValue] = useState<string>('')
    const { lessonQuizzes, setLessonQuizzes } = useLessonCTX()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const answers = e.target.value
        setValue(answers)
        const otherQuizzes = lessonQuizzes.filter(
            (quiz) => quiz.id !== problemId
        )
        setLessonQuizzes([
            ...otherQuizzes,
            { id: problemId, answers, status: 'not-answered' },
        ])
    }

    useEffect(() => {
        setValue('')
    }, [lessonQuizzes.length === 0])

    // If has initial answer
    useEffect(() => {
        const findAns = lessonQuizzes.find((quiz) => quiz.id === problemId)
        if (findAns) {
            setValue(findAns.answers as string)
            setStatus(findAns.status)
        }
    }, [lessonQuizzes.length > 0])

    return <Input status={status} value={value} onChange={handleChange} wFull />
}

export default MDInput
