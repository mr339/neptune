import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
// ENV config
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const options = {
  providers: [
    GoogleProvider({
      clientId: publicRuntimeConfig.GOOGLE_ID,
      clientSecret: publicRuntimeConfig.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: publicRuntimeConfig.FACEBOOK_ID,
      clientSecret: publicRuntimeConfig.FACEBOOK_SECRET,
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
