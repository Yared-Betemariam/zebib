import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { getServerSession } from "next-auth";
import { Noto_Serif_Ethiopic } from "next/font/google";
import { twMerge } from "tailwind-merge";

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
