import NextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import User from '../../../models/User';
import db from '../../../utils/db';
import argon2 from 'argon2';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        await db.connect();
        const user = await User.findOne({ email: credentials.email });
        if (user && argon2.verify(credentials.password, user.password)) {
          return {
            name: [user.firstName, '', user.lastName].join(' '),
            email: user.email,
            image: user.photo,
          };
        }
        throw new Error('invalid email or password');
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});
