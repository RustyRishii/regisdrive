import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/dashboard",
  },

  callbacks: {
    async session({ session, token, user }) {
      //session.user.username = session.user.name
      //session.user.uid = token.sub;
      return session;
    },
  },
});