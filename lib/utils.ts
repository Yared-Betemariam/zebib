import { PrismaAdapter } from "@auth/prisma-adapter";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { NextAuthOptions, getServerSession } from "next-auth";
import { Noto_Serif_Ethiopic } from "next/font/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { twMerge } from "tailwind-merge";
import prisma from "./prisma";
import { Adapter } from "next-auth/adapters";
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/sign-in",
  },
  session: { strategy: "jwt" },
  callbacks: {
    session: ({ session, token, user }) => {
      if (token) {
        session.user.id = token.sub;
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
        if (!user.length) throw new Error("User Not Found. Create Account");
        return user[0];
      },
      credentials: {
        phoneNumber: { label: "phoneNumber", type: "text" },
      },
    }),
  ],
};

export type Book = {
  name: string;
  desc: string;
  price: string;
  id: string;
  image: string;
};

export const font = Noto_Serif_Ethiopic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const origin = "http://localhost:3000";

export const getEBooks = async () => {
  let books: null | Book[] = null;
  try {
    const response = await axios.get(`${origin}/api/ebooks`);
    books = response.data.books;
    return books;
  } catch (error) {
    console.log(error);
    return books;
  }
};
export const getEBook = async (id: string) => {
  let book: null | Book = null;
  try {
    const response = await axios.get(`${origin}/api/ebooks/${id}`);
    book = response.data.book;
    return book;
  } catch (error) {
    console.log(error);
    return book;
  }
};
