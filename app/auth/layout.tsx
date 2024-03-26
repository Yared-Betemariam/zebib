import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sign-In / Sign-Up - Zebib's Ebook Center",
  description: "Best Islamic Ebook Center in Ethiopia",
  icons: [
    {
      rel: "icon",
      url: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-1 items-center justify-center flex-col gap-2">
      <section className="border-2 border-gray-900/20 rounded-xl shadow-md w-full max-w-2xl flex">
        <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-t-md p-12 py-6 flex flex-col w-[40%] text-gray-200">
          <span className="text-xl font-semibold opacity-80">ዘቢብ</span>
          <p className="text-3xl font-bold">Islamic ኢ-መጽሐፍት</p>
        </div>
        <div className="p-8 px-12 pb-12 flex-1">{children}</div>
      </section>
      <p className="text-sm opacity-80 ">
        Remember to put in your Name and Phone Number of your Telebirr account.
      </p>
    </main>
  );
}
