import { LessonQuizI } from '@/interface/LessonQuiz'
import Problem from '@/interface/Problem'
import { createSlice } from '@reduxjs/toolkit'

interface LessonState {
    problems: LessonQuizI[]
}

const initialState: LessonState = {
    problems: [
        { id: '1', answer: '', status: 'success' },
        { id: '2', answer: '', status: 'failed' },
        { id: '3', answer: '', status: 'not-attempted' },
        { id: '4', answer: '', status: 'success' },
        { id: '5', answer: '', status: 'success' },
    ],
}

const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {
        setProblems(state, action) {
            state.problems = action.payload
        },
        updateProblem(state, action) {
            const { id, answer } = action.payload
            const index = state.problems.findIndex(
                (problem) => problem.id === id
            )
            state.problems[index].answer = answer
            state.problems[index].status = 'not-attempted'
        },
    },
})

export const { setProblems, updateProblem } = lessonSlice.actions
export default lessonSlice.reducer
