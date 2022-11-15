import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/xterm.css'
import Loading from '@/components/Common/Loading'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import store from '@/store'

const MyApp: React.FC<AppProps & { pageProps: any }> = ({
    Component,
    pageProps,
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
        <Provider store={store}>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
                {isStart && <Loading />}
                <Component {...pageProps} />
            </SessionProvider>
        </Provider>
    )
}

export default MyApp
