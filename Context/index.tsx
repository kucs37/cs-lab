import { ReactNode } from 'react'
import LessonsCtx from '@/Context/Lessons'
import ProblemContext from '@/Context/Problem'

function index({ children }: { children: ReactNode }) {
    return (
        <>
            <ProblemContext>
                <LessonsCtx>{children}</LessonsCtx>
            </ProblemContext>
        </>
    )
}

export default index
