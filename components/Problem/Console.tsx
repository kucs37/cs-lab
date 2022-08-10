import { useState, useRef, useEffect } from 'react'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

interface HandleKeyI {
    key: string
    domEvent: KeyboardEvent
}

function Console() {
    const terminal = new Terminal()
    const inputRef = useRef<string | null>(null)
    const xTermRef = useRef(null)

    useEffect(() => {
        inputRef.current = ''
    }, [])

    useEffect(() => {
        if (!xTermRef.current) return
        terminal.open(xTermRef.current)
        terminal.write('$')

        terminal.onData((data) => {
            const code = data.charCodeAt(0)

            if (code === 13) {
                terminal.write(`\r\n${inputRef.current}\n`)
                terminal.write('\r$')
                inputRef.current = ''
            } else if (code === 127 && terminal._core.buffer.x > 1) {
                terminal.write('\b \b')
                inputRef.current = inputRef.current!.substring(
                    0,
                    inputRef.current!.length - 1
                )
            } else if (code < 32) {
                return
            } else {
                terminal.write(data)
                inputRef.current = inputRef.current + data
            }
        })
    }, [xTermRef])

    return <div ref={xTermRef}></div>
}

export default Console
