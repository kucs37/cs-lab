import { atom } from 'recoil'

const scrollState = atom<number>({
    key: 'scroll',
    default: 450,
})

export { scrollState }
