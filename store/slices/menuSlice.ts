import { createSlice } from '@reduxjs/toolkit'

interface MenuState {
    isSettingsOpen: boolean
    isHistoryOpen: boolean
    isConsoleOpen: boolean
}

const initialState: MenuState = {
    isSettingsOpen: false,
    isHistoryOpen: false,
    isConsoleOpen: false,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleSettings: (state) => {
            state.isSettingsOpen = !state.isSettingsOpen
        },
        toggleHistory: (state) => {
            state.isHistoryOpen = !state.isHistoryOpen
        },
        openConsole: (state) => {
            state.isConsoleOpen = true
        },
        toggleConsole: (state) => {
            state.isConsoleOpen = !state.isConsoleOpen
        },
    },
})

export const { toggleSettings, toggleHistory, openConsole, toggleConsole } =
    menuSlice.actions
export default menuSlice.reducer
