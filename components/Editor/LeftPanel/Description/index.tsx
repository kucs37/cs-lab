import Loading from './Loading'
import Loaded from './Loaded'
import { useState, useEffect } from 'react'
function Description() {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    if (isLoading) return <Loading />
    return <Loaded />
}

export default Description
