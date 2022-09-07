import { useRef, useEffect } from 'react'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'

function Console() {
    const terminal: Terminal & { _core?: any } = new Terminal({
        rows: 2,
        cols: 2,
    })
    const fitAddon = new FitAddon()

    const inputRef = useRef<string | null>(null)
    const xTermRef = useRef(null)

    useEffect(() => {
        inputRef.current = ''
    }, [])

    useEffect(() => {
        if (!xTermRef.current) return
        terminal.loadAddon(fitAddon)
        terminal.open(xTermRef.current)
        terminal.write('>>> ')

        fitAddon.fit()
        terminal.onData((data) => {
            const code = data.charCodeAt(0)

            if (code === 13) {
                terminal.write(`\r\n${inputRef.current}`)
                terminal.write('\r>>> ')
                inputRef.current = ''
            } else if (code === 127 && terminal._core.buffer.x > 2) {
                terminal.write('\b \b')
                inputRef.current = inputRef.current!.substring(
                    0,
                    inputRef.current!.length - 1
                )
            } else if (code == 12) {
                terminal.clear()
            } else {
                terminal.write(data)
                inputRef.current = inputRef.current + data
            }
        })
    }, [xTermRef])

    return <div className="h-full min-h-[300px]" ref={xTermRef}></div>
}

export default Console
