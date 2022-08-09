import { useState, useRef, useEffect, useCallback } from 'react'
import { XTerm } from 'xterm-for-react'

interface HandleKeyI {
    key: string
    domEvent: KeyboardEvent
}

function Console() {
    const [input, setInput] = useState<string>('')
    const xTermRef = useRef<XTerm>(null)

    useEffect(() => {
        if (!xTermRef.current) return

        // xTermRef.current.terminal.write('Hello World')
    }, [xTermRef])

    return (
        <div className="h-fit flex flex-col items-start bg-white px-1 py-2 font-medium">
            <div className="">Console</div>
            <XTerm
                ref={xTermRef}
                onData={(data) => {
                    const code = data.charCodeAt(0)
                    if (!xTermRef.current) return
                    // If the user hits empty and there is something typed echo it.
                    if (code === 13 && input.length > 0) {
                        xTermRef.current.terminal.write(
                            "\r\nYou typed: '" + input + "'\r\n"
                        )
                        alert(input)
                        xTermRef.current.terminal.write('echo>')
                        setInput('')
                    } else if (
                        code === 127 &&
                        xTermRef.current.terminal._core.buffer.x > 5
                    ) {
                        xTermRef.current.terminal.write('\b \b')
                        setInput(input.substring(0, input.length - 1))
                    } else if (code < 32 || code === 127) {
                        // Disable control Keys such as arrow keys
                        return
                    } else {
                        // Add general key press characters to the terminal
                        xTermRef.current.terminal.write(data)
                        setInput(input + data)
                    }
                }}
            />
        </div>
    )
}

export default Console
