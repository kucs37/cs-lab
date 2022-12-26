import { useState, useEffect } from 'react'

function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    useEffect(() => {
        const _isDarkMode = document.body.classList.contains('dark')
        
        setIsDarkMode(_isDarkMode)
    }, [])
    return isDarkMode
}

export default useDarkMode
