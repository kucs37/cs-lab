import { Models } from '@rematch/core'
import { menus } from './menus'
import { history } from './history'
export interface RootModel extends Models<RootModel> {
    menus: typeof menus
    history: typeof history
}
export const models: RootModel = { menus, history }
