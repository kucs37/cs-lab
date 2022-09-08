import ProblemI from '@/interface/Problem'
import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react'

interface LessonQuizzesI {
    id: string
    answers: string[]
}

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

    // useEffect(() => {
    //     console.log(lessonQuizzes)
    // }, [lessonQuizzes])

    return (
        <LessonCtx.Provider value={{ lessonQuizzes, setLessonQuizzes }}>
            {children}
        </LessonCtx.Provider>
    )
}

export const useLessonCTX = () => useContext(LessonCtx)

export default LessonCTX
