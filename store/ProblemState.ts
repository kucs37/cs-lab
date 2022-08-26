import { atom } from 'recoil'

interface problemStateI {
    isDrag: boolean
    isSettings: boolean
}
const problemState = atom<problemStateI>({
    key: 'problemState',
    default: { isDrag: false, isSettings: false },
})

export { problemState }
