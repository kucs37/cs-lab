import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'

export function middleware(request: NextRequest, ev: NextFetchEvent) {
    const PUBLIC_FILE = /\.(.*)$/
    const { pathname } = request.nextUrl
    if (
        true ||
        pathname.startsWith('/login') ||
        pathname.startsWith('/_next') || // exclude Next.js internals
        pathname.startsWith('/api') || //  exclude all API routes
        pathname.startsWith('/static') || // exclude static files
        PUBLIC_FILE.test(pathname)
    )
        return NextResponse.next()

    return NextResponse.redirect(new URL('/login', request.url))
}
