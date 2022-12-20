import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryI } from '@/interface/History'

interface HistoryState {
    allHistory: HistoryI[]
    selected: HistoryI | null
}

const initialState: HistoryState = {
    allHistory: [
        {
            code: '',
            date: new Date('November 16, 2565 11:12:00').getTime(),
            status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
        },
        {
            code: 'Hello World',
            date: new Date('November 16, 2565 11:12:01').getTime(),
            status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
        },
    ],
    selected: null,
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setHistory(state, action: PayloadAction<HistoryI[]>) {
            state.allHistory = action.payload
        },
        setSelected(state, action: PayloadAction<HistoryI | null>) {
            state.selected = action.payload
        },
    },
})

export const { setHistory, setSelected } = historySlice.actions
export default historySlice.reducer
