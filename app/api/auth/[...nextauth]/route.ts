import prisma from "@/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  callbacks: {
    session: ({ session, token, user }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      async authorize(credentials, req) {
        if (!credentials?.phoneNumber)
          throw new Error("Please provide a phone number.");
        const user = await prisma.user.findMany({
          where: {
            phoneNumber: credentials?.phoneNumber,
          },
        });
        if (!user.length) throw new Error("User Phone-Number Not Found");
        return user[0];
      },
      credentials: {
        phoneNumber: { label: "phoneNumber", type: "text" },
      },
    }),
    /* ... additional providers ... /*/
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
