import { Button } from "@/components/ui/button";
import { getEBook } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { book as ebook } from "@/data/book";
import { BiWorld } from "react-icons/bi";

const BookPage = () => {
  return (
    <main className="flex flex-col flex-1">
      <section className="wrapper flex flex-col gap-4 py-12">
        <div className="flex gap-12 flex-col">
          <div className="flex gap-12 h-[26rem]">
            <div className="relative w-[35%]">
              <Image
                src={ebook.image}
                alt={ebook.name}
                fill
                className="object-cover object-center rounded-xl shadow-xl"
              />
            </div>
            <div className="max-w-[45%] flex flex-col gap-2 py-6">
              <div>
                <h1 className="text-3xl font-bold text-amber-700">
                  {ebook.name}
                </h1>
                <span className="text-base opacity-80 text-gray-800">
                  by Zebib
                </span>
              </div>
              <div className="flex flex-col text-gray-900">
                <span className="text-sm">Language</span>
                <div className="text-amber-700 flex gap-2 items-center">
                  <BiWorld size={22} /> <span>አማርኛ</span>
                </div>
              </div>
              <div className="text-gray-900 overflow-y-auto">
                <span className="text-lg opacity-90 font-semibold">
                  Description
                </span>
                <p className="text-base opacity-90">{ebook.desc}</p>
              </div>
            </div>
            <div className="border-4 border-amber-700/15 bg-gray-200/60 shadow-lg p-8">
              <div className="flex flex-col border-b-2 border-gray-900/15 pb-3">
                <span className="text-sm opacity-80 text-gray-900">Price</span>
                <span className="text-amber-700 font-bold opacity-80 text-xl">
                  {ebook.price} ETB
                </span>
              </div>
              <Link href={"/order"}>
                <Button
                  size={"lg"}
                  className="space-x-4 rounded-full mr-auto my-4 bg-gray-800/90"
                >
                  <MdShoppingCart /> <span>Make Pre-Order</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default BookPage;
