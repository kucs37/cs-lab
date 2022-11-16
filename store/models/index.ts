import { Models } from '@rematch/core'
import { menus } from './menus'
import { history } from './history'
import { editor } from './editor'
export interface RootModel extends Models<RootModel> {
    menus: typeof menus
    history: typeof history
    editor: typeof editor
}
export const models: RootModel = { menus, history, editor }
