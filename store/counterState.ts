import { atom } from 'recoil'

const counterState = atom<number>({
    key: 'Counter',
    default: 0,
})

export { counterState }
