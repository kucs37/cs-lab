import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: '/api/auth/signin',
        error: '/error',
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === 'google') {
                if (
                    profile.email_verified &&
                    profile.email?.endsWith('@ku.th')
                ) {
                    return true
                } else {
                    throw new Error('You must login with email @ku.th')
                }
            }
            throw new Error('Sign in provider not supported')
        },
        jwt(data) {
            return data.token
        },
        session(data) {
            data.session.accessToken = data.token.accessToken
            return data.session
        },
    },
    secret: process.env.SECRET,
    jwt: {
        secret: process.env.SECRET,
    },
})
