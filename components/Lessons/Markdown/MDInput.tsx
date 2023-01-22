import { useState, ChangeEvent, useEffect } from 'react'
import Input from '../Input'

interface InputProps {
    type: 'text' | 'number'
    ans: string
    id: string
}

function MDInput({ type, ans, id }: InputProps) {
    const [value, setValue] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const answers = e.target.value
        setValue(answers)
        // const otherQuizzes = lessonQuizzes.filter((quiz) => quiz.id !== id)
        // setLessonQuizzes([
        //     ...otherQuizzes,
        //     { id: id, answers, status: 'not-answered' },
        // ])
    }

    // If has initial answer
    // useEffect(() => {
    //     const findAns = lessonQuizzes.find((quiz) => quiz.id === id)
    //     if (findAns) {
    //         setValue(findAns.answers as string)
    //         setStatus(findAns.status)
    //     }
    // }, [lessonQuizzes.length > 0])

    return (
        <Input
            status="not-attempted"
            value={value}
            onChange={handleChange}
            wFull
        />
    )
}

export default MDInput
