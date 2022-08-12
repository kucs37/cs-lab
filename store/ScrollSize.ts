import { atom } from 'recoil'

const scrollState = atom<number>({
    key: 'scroll',
    default: 300,
})

export { scrollState }
