type Status = 'P' | '-' | 'S' | 'C'
export interface SubmissionI {
    order: number
    date: Date
    status: Status[]
    code: string
}
