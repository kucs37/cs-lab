import { atom } from 'recoil'

const scrollState = atom<number>({
    key: 'scroll',
    default: 500,
})

export { scrollState }
