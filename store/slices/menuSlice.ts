import { createSlice } from '@reduxjs/toolkit'

interface MenuState {
    isSettingsOpen: boolean
    isHistoryOpen: boolean
    isConsoleOpen: boolean
    isHamburgerOpen: boolean
}

const initialState: MenuState = {
    isSettingsOpen: false,
    isHistoryOpen: false,
    isConsoleOpen: false,
    isHamburgerOpen: false,
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
        toggleHamburger: (state) => {
            state.isHamburgerOpen = !state.isHamburgerOpen
        },
    },
})

export const {
    toggleSettings,
    toggleHistory,
    openConsole,
    toggleConsole,
    toggleHamburger,
} = menuSlice.actions
export default menuSlice.reducer
