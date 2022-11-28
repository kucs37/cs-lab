import { AnswersI, TypeI } from '../components/Lessons/RightSection/Markdown/CodeEditor/interface'

export const toFinalAnswer = (code: TypeI[], answers: AnswersI) => {
    let finalCode = ''

    code.map(({ tagName, children }, index) => {
        if (tagName === 'code') {
            if (children.length === 1) {
                return (finalCode += children[0].value + '\n')
            }

            finalCode += children[0].value + answers[index] + '\n'
        }

        if (['blank', 'hidemultiple'].includes(tagName)) {
            return (finalCode += answers[index] + '\n')
        }
    })
    return finalCode
}
