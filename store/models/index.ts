import { Models } from '@rematch/core'
import { menus } from './menus'
import { history } from './history'
import { editorWindow } from './editorWindow'
import { editor } from './editor'
export interface RootModel extends Models<RootModel> {
    menus: typeof menus
    history: typeof history
    editor: typeof editor
    editorWindow: typeof editorWindow
}
export const models: RootModel = { menus, history, editor, editorWindow }
