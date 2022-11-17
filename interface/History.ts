type Status = 'P' | '-' | 'S' | 'C'
export interface HistoryI {
    date: string
    status: Status[]
    code: string
}
