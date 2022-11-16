import { Models } from '@rematch/core'
import { menus } from './menus'
import { history } from './history'
import { editorWindow } from './editorWindow'
export interface RootModel extends Models<RootModel> {
    menus: typeof menus
    history: typeof history
    editorWindow: typeof editorWindow
}
export const models: RootModel = { menus, history, editorWindow }
