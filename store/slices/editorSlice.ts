import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EditorState {
    code: string
    output: string | null
}

const initialState: EditorState = {
    code: '',
    output: null,
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        setCode(state, action: PayloadAction<string>) {
            state.code = action.payload
        },
        setOutput(state, action: PayloadAction<string>) {
            state.output = action.payload
        },
    },
})

export const { setCode, setOutput } = editorSlice.actions
export default editorSlice.reducer
