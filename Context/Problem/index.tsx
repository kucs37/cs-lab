import { createContext, useState, useContext, ReactNode } from 'react'

interface ProblemContextI {
    isDrag: boolean
    setIsDrag: (value: boolean) => void
    isSettings: boolean
    setIsSettings: (value: boolean) => void
    code: string
    setCode: (value: string) => void
    scrollSize: number
    setScrollSize: (value: number) => void
}

const ProblemContext = createContext<ProblemContextI>({
    isDrag: false,
    isSettings: false,
    setIsDrag: () => {},
    setIsSettings: () => {},
    code: '',
    setCode: () => {},
    scrollSize: 0,
    setScrollSize: () => {},
})

function ScrollProvider({ children }: { children: ReactNode }) {
    const [scrollSize, setScrollSize] = useState(0)
    const [isDrag, setIsDrag] = useState(false)
    const [isSettings, setIsSettings] = useState(false)
    const [code, setCode] = useState('')

    const contextValue = {
        isDrag,
        setIsDrag,
        isSettings,
        setIsSettings,
        scrollSize,
        setScrollSize,
        code,
        setCode,
    }
    return (
        <ProblemContext.Provider value={contextValue}>
            {children}
        </ProblemContext.Provider>
    )
}

export default ScrollProvider

export const useProblemContext = (): ProblemContextI =>
    useContext(ProblemContext)
