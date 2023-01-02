import { RefObject, useEffect, useState, useRef } from 'react'

import useDrag from '@/hooks/useDrag'
import Console from './Console'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { toggleConsole } from '@/store/slices/menuSlice'
import { IoClose } from 'react-icons/io5'

interface WindowI {
    zoneRef: RefObject<HTMLDivElement>
}

function Index({ zoneRef }: WindowI) {
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const { size, setIsDrag } = useDrag(zoneRef, windowHeight, 'height')
    const { isConsoleOpen } = useAppSelector((state) => state.menu)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setWindowHeight(size + 83)
    }, [size])

    if (!isConsoleOpen) return null
    return (
        <>
            <div
                className="group w-full h-8 bg-gray-100 dark:bg-primary-1 cursor-row-resize flex items-center justify-center "
                style={{ minHeight: '2rem' }}
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={() => setWindowHeight(200)}
            >
                <span className="h-1/6 rounded-full w-10 bg-gray-500 group-hover:w-16 transition-all"></span>
            </div>
            <div
                className="bg-white dark:bg-secondary-1 border dark:border-secondary-2 w-full flex flex-col rounded-xl overflow-hidden"
                style={{
                    minHeight: 183,
                    maxHeight: '100%',
                    height: windowHeight,
                }}
            >
                <div className="p-2 cursor-pointer select-none w-fit ">
                    <div className="border-b-2 border-gray-900 dark:border-ascent-1 px-2 flex items-center gap-1">
                        <h4 className="text-sm font-medium uppercase dark:text-ascent-1">
                            console
                        </h4>
                        <button
                            className="h-fit"
                            onClick={() => dispatch(toggleConsole())}
                        >
                            <IoClose className="text-md dark:text-ascent-1" />
                        </button>
                    </div>
                </div>
                <Console />
            </div>
        </>
    )
}

export default Index
