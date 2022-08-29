import { atom } from 'recoil'

interface problemStateI {
    isDrag: boolean
    isSettings: boolean
    code: string
}
const problemState = atom<problemStateI>({
    key: 'problemState',
    default: { isDrag: false, isSettings: false, code: '' },
})

export { problemState }
