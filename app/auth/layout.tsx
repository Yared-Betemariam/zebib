import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Sign-In",
  description: "Best Islamic Ebook Center in Ethiopia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-1 items-center justify-center flex-col gap-2 px-6">
      <div className="w-full  max-w-2xl mx-auto">
        <Link href={"/"} className="mr-auto">
          <Button variant={"link"} className="space-x-3 p-0">
            <FaArrowLeft />
            <span> Back to home</span>
          </Button>
        </Link>
      </div>
      <section className="border-2 border-gray-900/20 rounded-xl shadow-md w-full max-w-2xl flex flex-col md:flex-row mx-7">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-600 rounded-t-md p-12 py-6 flex flex-col md:w-[40%] text-gray-200">
          <span className="text-lg md:text-xl font-semibold opacity-80">
            ዘቢብ
          </span>
          <p className="text-2xl md:text-3xl font-bold">Islamic ኢ-መጽሐፍት</p>
        </div>
        <div className="p-8 px-12 pb-12 flex-1">{children}</div>
      </section>
      <p className="text-sm opacity-80 text-center">
        Remember to put in your Name and Phone Number of your Telebirr account.
      </p>
    </main>
  );
}
