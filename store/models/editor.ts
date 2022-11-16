import { createModel } from '@rematch/core'
import { RootModel } from '.'

interface EditorState {
    code: string
    fontSize: number
    tabSize: number
}

export const editor = createModel<RootModel>()({
    state: { code: '', fontSize: 16, tabSize: 4 } as EditorState,
    reducers: {
        setCode(state: EditorState, code: string) {
            return { ...state, code }
        },
        setFontSize(state: EditorState, fontSize: number) {
            return { ...state, fontSize }
        },
        setTabSize(state: EditorState, tabSize: number) {
            return { ...state, tabSize }
        },
    },
})
