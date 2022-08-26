import { atom } from 'recoil'

const scrollState = atom<number>({
    key: 'scroll',
    default: 550,
})

export { scrollState }
