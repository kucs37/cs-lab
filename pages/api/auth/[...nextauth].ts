import axios from 'axios'
import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'
import jwt from 'jsonwebtoken'

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
        async jwt({ token, account, isNewUser, profile, user }) {
            let ress = await axios.post(
                process.env.API_BASE_URL! + '/auth/verifyToken',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt.sign(
                            {
                                email: token.email,
                            },
                            process.env.SECRET!
                        )}`,
                    },
                }
            )
            return {
                ...token,
                ...ress.data.resData
            }
        },
        async session({ session, user, token }) {
            session.user = token
            return session
        },
    },
    secret: process.env.SECRET,
    jwt: {
        secret: process.env.SECRET,
    },
})
