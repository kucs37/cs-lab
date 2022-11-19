import axios from 'axios'
import NextAuth, { Account, NextAuthOptions, Profile } from 'next-auth'
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
        error: '/login',
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account && account.provider === 'google') {
                if (
                    profile &&
                    //@ts-ignore
                    profile.email_verified &&
                    //@ts-ignore
                    profile.email.endsWith('@ku.th')
                ) {
                    return true
                } else {
                    throw new Error('not-authorize')
                }
            }
            throw new Error('Sign in provider not supported')
        },
        // async jwt({ token, account, isNewUser, profile, user }) {
        //     let ress = await axios.post(
        //         process.env.API_BASE_URL! + '/auth/verifyToken',
        //         {},
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${jwt.sign(
        //                     {
        //                         email: token.email,
        //                     },
        //                     process.env.NEXTAUTH_SECRET!
        //                 )}`,
        //             },
        //         }
        //     )
        //     return {
        //         ...token,
        //         ...ress.data.resData,
        //     }
        // },
        async session({ session, user, token }) {
            session.user = token
            return session
        },
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
})
