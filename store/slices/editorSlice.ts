import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EditorState {
    code: string
    fontSize: number
    tabSize: number
}

const initialState: EditorState = {
    code: '',
    fontSize: 16,
    tabSize: 2,
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        setCode(state, action: PayloadAction<string>) {
            state.code = action.payload
        },
        setFontSize(state, action: PayloadAction<number>) {
            state.fontSize = action.payload
        },
        setTabSize(state, action: PayloadAction<number>) {
            state.tabSize = action.payload
        },
    },
})

export const { setCode, setFontSize, setTabSize } = editorSlice.actions
export default editorSlice.reducer
