import { createModel } from '@rematch/core'

type Menu = {
    isSettingsOpen: boolean
    isHistoryOpen: boolean
}

export const menus = createModel()({
    state: {
        isSettingsOpen: false,
        isHistoryOpen: false,
    } as Menu,
    reducers: {
        toggleSettings(state: Menu) {
            return { ...state, isSettingsOpen: !state.isSettingsOpen }
        },
        toggleHistory(state: Menu) {
            return { ...state, isHistoryOpen: !state.isHistoryOpen }
        },
    },
})
