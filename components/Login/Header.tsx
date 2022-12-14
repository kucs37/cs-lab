import { io } from 'socket.io-client'
import { useState, useEffect } from 'react'

function Header() {
    const socket = io('http://10.147.18.161:3000/socket')
    const [userCount, setUserCount] = useState(0)

    useEffect(() => {
        socket.on('connect', () => {})
        socket.on('userCount', (e) => {
            setUserCount(e.userCount)
        })
    }, [])
    return (
        <>
            <h1 className="text-4xl text-center font-semibold mb-2 text-gray-900 dark:text-ascent-1">
                CS LAB
            </h1>

            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse bg-emerald-500"></div>
                <p className="text-center dark:text-ascent-1">
                    ขณะนี้มีผู้ใช้งานอยู่ {userCount} คน
                </p>
            </div>
        </>
    )
}

export default Header
