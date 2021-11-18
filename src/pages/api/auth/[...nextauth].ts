import NextAuth, { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

import { cognito } from "config/default";

// https://github.com/nextauthjs/next-auth/issues/638#issuecomment-696370095
// https://github.com/nextauthjs/next-auth/issues/638#issuecomment-698406141
// https://jump-admin-test.auth.ap-northeast-1.amazoncognito.com/logout?client_id=5anv4h13mre6k18pffss1ocnl1&logout_uri=http://www.google.com
const options: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: cognito.clientId,
      clientSecret: cognito.clientSecret,
      issuer: cognito.issuer,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(options);
