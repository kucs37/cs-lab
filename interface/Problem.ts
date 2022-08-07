
export default interface ProblemI {
    name: string
    status: 'success' | 'failed' | 'not-attempted'
}