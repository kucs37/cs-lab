import { createContext, useContext, useState, ReactNode } from 'react'

import { LessonQuizzesI } from './interface'
interface LessonCtxI {
    lessonQuizzes: LessonQuizzesI[]
    setLessonQuizzes: (value: LessonQuizzesI[]) => void
}

const LessonCtx = createContext<LessonCtxI>({
    lessonQuizzes: [],
    setLessonQuizzes: () => {},
})

function LessonCTX({ children }: { children: ReactNode }) {
    const [lessonQuizzes, setLessonQuizzes] = useState<LessonQuizzesI[]>([])

    return (
        <LessonCtx.Provider value={{ lessonQuizzes, setLessonQuizzes }}>
            {children}
        </LessonCtx.Provider>
    )
}

export const useLessonCTX = () => useContext(LessonCtx)

export default LessonCTX
