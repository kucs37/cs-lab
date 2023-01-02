import { useRef, useEffect } from 'react'
import { debounce } from 'lodash'
import { io } from 'socket.io-client'
import { useAppSelector } from '@/store/hooks'

function Console() {
    const terminal = useRef<any>(null)
    const xTermRoot = useRef<HTMLDivElement>(null)
    const fitAddon = useRef<any>(null)
    const { theme } = useAppSelector((state) => state.userSettings)
    const isDarkMode = theme === 'dark'

    const initialXterm = async (initialize: HTMLDivElement) => {
        const { Terminal } = await import('xterm')
        const { FitAddon } = await import('xterm-addon-fit')
        const _terminal = new Terminal({
            theme: {
                background: isDarkMode ? '#33373A' : '#fff',
                foreground: isDarkMode ? '#fff' : '#000',
            },
        })
        terminal.current = _terminal
        const _fitAddon = new FitAddon()
        fitAddon.current = _fitAddon
        _terminal.loadAddon(_fitAddon)
        _terminal.open(initialize)

        const socket = io('http://192.168.1.101:3001')
        _terminal.write('Connecting to server...')
        terminal.current.onData((data: string) => socket.emit('input', data))
        socket.on('output', (data: string) => terminal.current.write(data))
    }

    const onResize = () => {
        if (!fitAddon.current) return
        fitAddon.current.fit()
    }
    useEffect(() => {
        if (!xTermRoot.current) return

        // initialXterm
        if (xTermRoot.current) initialXterm(xTermRoot.current)

        //handle on xterm resize
        const resize = new ResizeObserver(onResize)
        resize.observe(xTermRoot.current)
        return () => {
            terminal.current.dispose()
            resize.disconnect()
        }
    }, [xTermRoot, theme])

    return <div ref={xTermRoot} className="h-full m-2"></div>
}

export default Console
