export interface LessonQuizI {
    id: string
    answer: string | null
    status: 'success' | 'failed' | 'not-attempted'
}
