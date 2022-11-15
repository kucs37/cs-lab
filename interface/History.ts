type Status = 'P' | '-' | 'S' | 'C'
export interface HistoryI {
    date: Date
    status: Status[]
    code: string
}
