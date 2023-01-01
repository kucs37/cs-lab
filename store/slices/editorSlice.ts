import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EditorState {
    code: string
}

const initialState: EditorState = {
    code: '',
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        setCode(state, action: PayloadAction<string>) {
            state.code = action.payload
        },
    },
})

export const { setCode } = editorSlice.actions
export default editorSlice.reducer
