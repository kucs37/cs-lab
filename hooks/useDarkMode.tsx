import { useState, useEffect } from 'react'

function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    const callback = (mutationList, observer) => {
        mutationList.forEach(function (mutation) {
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'class'
            ) {
                setIsDarkMode(mutation.target.className === 'dark')
            }
        })
    }

    useEffect(() => {
        const observer = new MutationObserver(callback)
        observer.observe(document.body, { attributes: true })
        return () => observer.disconnect()
    }, [])
    return isDarkMode
}

export default useDarkMode
