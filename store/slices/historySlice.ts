import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryI } from '@/interface/History'

interface HistoryState {
    allHistory: HistoryI[]
    selected: HistoryI | null
}

const initialState: HistoryState = {
    allHistory: [],
    selected: null,
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setHistory(state, action: PayloadAction<HistoryI[]>) {
            state.allHistory = action.payload
        },
        setSelected(state, action: PayloadAction<HistoryI>) {
            state.selected = action.payload
        },
    },
})

export const { setHistory, setSelected } = historySlice.actions
export default historySlice.reducer
