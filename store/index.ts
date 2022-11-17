import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './slices/menuSlice'
import historyReducer from './slices/historySlice'
import editorReducer from './slices/editorSlice'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        history: historyReducer,
        editor: editorReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
