import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
//import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ]
}

export default NextAuth(authOptions)