import { atom } from 'recoil'

const problemState = atom<boolean>({
    key: 'isDrag',
    default: false,
})

export { problemState }
