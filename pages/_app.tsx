import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Loading from '@components/Common/Loading'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'

const MyApp: React.FC<AppProps> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    const [isStart, setIsStart] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        const handleRouteStart = () => setIsStart(true)
        const handleRouteStop = () => setIsStart(false)
        router.events.on('routeChangeStart', handleRouteStart)
        router.events.on('routeChangeComplete', handleRouteStop)
        router.events.on('routeChangeError', handleRouteStop)
        return () => {
            router.events.off('routeChangeStart', handleRouteStart)
            router.events.off('routeChangeComplete', handleRouteStop)
            router.events.off('routeChangeError', handleRouteStop)
        }
    }, [router])

    return (
        <SessionProvider session={session}>
            <RecoilRoot>
                {isStart && <Loading />}
                <Component {...pageProps} />
            </RecoilRoot>
        </SessionProvider>
    )
}

export default MyApp
