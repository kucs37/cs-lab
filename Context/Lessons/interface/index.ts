export interface LessonQuizzesI {
    id: string
    answers: string | string[]
    status: LessonQuizzesStatus
}

export type LessonQuizzesStatus = 'correct' | 'incorrect' | 'not-answered'
