import { createModel } from '@rematch/core'
import { RootModel } from '.'

interface EditorWindowState {
    editorWindowWidth: number
    leftPanelWidth: number
}
export const editorWindow = createModel<RootModel>()({
    state: {
        editorWindowWidth: 0,
        leftPanelWidth: 320,
    } as EditorWindowState,
    reducers: {
        setEditorWindowWidth(state, editorWindowWidth: number) {
            return { ...state, editorWindowWidth }
        },
        setLeftPanelWidth(state, leftPanelWidth: number) {
            return { ...state, leftPanelWidth }
        },
    },
})
