import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './slices/menuSlice'
import historyReducer from './slices/historySlice'
import editorReducer from './slices/editorSlice'
import mobileMenuReducer from './slices/mobileMenuSlice'

export const makeStore = () =>
    configureStore({
        reducer: {
            menu: menuReducer,
            history: historyReducer,
            editor: editorReducer,
            mobileMenu: mobileMenuReducer,
        },
    })
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper(makeStore, { debug: false })
