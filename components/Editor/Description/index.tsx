import Loading from './Loading'
import Loaded from './Loaded'
import { useState, useEffect } from 'react'
function Description() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])
    if (isLoading) return <Loading />
    return <Loaded />
}

export default Description
