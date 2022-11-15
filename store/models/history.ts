import { createModel } from '@rematch/core'
import { RootModel } from '.'
import { HistoryI } from '@/interface/History'
interface HistoryState {
    allHistory: HistoryI[]
    selected: HistoryI | null
}
export const history = createModel<RootModel>()({
    state: {
        allHistory: [],
        selected: null,
    } as HistoryState,
    reducers: {
        setHistory(state: HistoryState, payload: HistoryI[]) {
            return { ...state, allHistory: payload }
        },
        setSelected(state: HistoryState, payload: HistoryI) {
            return { ...state, selected: payload }
        },
    },
})
