import { createModel } from '@rematch/core'

type Menu = {
    isSettingsOpen: boolean
    isHistoryOpen: boolean
    isConsoleOpen: boolean
}

export const menus = createModel()({
    state: {
        isSettingsOpen: false,
        isHistoryOpen: false,
        isConsoleOpen: false,
    } as Menu,
    reducers: {
        toggleSettings(state: Menu) {
            return { ...state, isSettingsOpen: !state.isSettingsOpen }
        },
        toggleHistory(state: Menu) {
            return { ...state, isHistoryOpen: !state.isHistoryOpen }
        },
        openConsole(state: Menu) {
            return { ...state, isConsoleOpen: true }
        },
        toggleConsole(state: Menu) {
            return { ...state, isConsoleOpen: !state.isConsoleOpen }
        },
    },
})
