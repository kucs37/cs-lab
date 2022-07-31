import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { counterState } from '../store/counterState'

const Home: NextPage = () => {
    const [counter, setCounter] = useRecoilState(counterState)
    return (
        <h1 className="text-3xl font-bold underline">
            <div className="flex justify-center">{counter}</div>
            <div className="flex flex-col">
                <button onClick={() => setCounter((pre) => pre + 1)}>
                    increase
                </button>
                <button onClick={() => setCounter((pre) => pre - 1)}>
                    decrease
                </button>
            </div>
        </h1>
    )
}

export default Home
