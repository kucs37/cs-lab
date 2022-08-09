import { useState, useRef, useEffect } from 'react'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

interface HandleKeyI {
    key: string
    domEvent: KeyboardEvent
}

function Console() {
    const [cmd, setCmd] = useState<string>('')
    const ref = useRef<HTMLDivElement | null>(null)

    const handleKeyPress = ({ key, domEvent }: HandleKeyI) => {
        console.log(key)
        if (domEvent.key !== 'Backspace') {
            setCmd((prev) => prev + key)
        }
    }

    const handleBackSpacePress = ({ key, domEvent }: HandleKeyI) => {
        if (domEvent.key === 'Backspace') {
            console.log(cmd.slice(0, -1))
            // setCmd()
        }
    }

    useEffect(() => {
        if (!ref.current) return
        const terminal = new Terminal()

        terminal.open(ref.current)
        terminal.onKey(handleKeyPress)
        terminal.onKey(handleBackSpacePress)
    }, [ref])

    // useEffect(() => {
    //     console.log(cmd)
    //     terminal.write(cmd)
    // }, [cmd])

    return (
        <div className="h-fit flex flex-col items-start bg-white px-1 py-2 font-medium">
            <div className="">Console</div>
            <div ref={ref}></div>
        </div>
    )
}

export default Console
