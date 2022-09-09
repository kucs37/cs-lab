export interface TypeI {
    tagName: string
    type: string
    value: string
    children: TypeI[]
}

export interface AnswersI {
    [key: string]: string
}
