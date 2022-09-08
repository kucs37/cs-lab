import { useLessonCTX } from '@/Context/Lessons'
import { useState, ChangeEvent, useEffect } from 'react'
import Input from '../Common/Input'

interface InputProps {
    node: any
}

function MDInput({ node }: InputProps) {
    const problemId = node.properties.id
    const [value, setValue] = useState<string>('')
    const { lessonQuizzes, setLessonQuizzes } = useLessonCTX()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        const otherQuizzes = lessonQuizzes.filter(
            (quiz) => quiz.id !== problemId
        )
        setLessonQuizzes([...otherQuizzes, { id: problemId, answers: value }])
    }

    useEffect(() => {
        setValue('')
    }, [lessonQuizzes.length === 0])

    return (
        <Input
            status={problemId === '001' ? 'correct' : 'incorrect'}
            value={value}
            size={node.properties.ans.length}
            onChange={handleChange}
        />
    )
}

export default MDInput
