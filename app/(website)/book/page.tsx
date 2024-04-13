import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
import { book as ebook } from "@/data/book";
import { BiWorld } from "react-icons/bi";

const BookPage = () => {
  return (
    <main className="flex flex-col flex-1">
      <section className="wrapper flex flex-col gap-4 py-12">
        <div className="flex gap-12 flex-col">
          <div className="flex gap-8 lg:gap-12 lg:h-[26rem] flex-col lg:flex-row">
            <div className="relative lg:w-[35%] h-80 lg:h-full">
              <Image
                src={ebook.image}
                alt={ebook.name}
                fill
                className="object-cover object-center rounded-xl shadow-xl h-full"
              />
            </div>
            <div className="lg:max-w-[45%] flex flex-col gap-4 py-6">
              <div>
                <h1 className="text-4xl font-bold text-emerald-700">
                  {ebook.name}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-80 text-gray-800 flex flex-col font-semibold">
                  <span>
                    ትርጉም :-{" "}
                    <span className="text-sm text-emerald-700">ዘቢብ ሡልጣን</span>{" "}
                  </span>
                  <span>
                    ደራሲ :-{" "}
                    <span className="text-sm text-emerald-700">
                      ዶ/ር አብዱልዓዚዝ አብዱልረሂም
                    </span>
                  </span>
                </div>
                <div className="flex flex-col text-gray-900">
                  <span className="text-sm">Language</span>
                  <div className="text-emerald-700 flex gap-2 items-center">
                    <BiWorld size={22} /> <span>አማርኛ</span>
                  </div>
                </div>
              </div>
              <div className="text-gray-900 overflow-y-auto">
                <span className="text-lg opacity-90 font-semibold">መግለጫ</span>
                <p className="text-base opacity-90">{ebook.desc}</p>
              </div>
            </div>
            <div className="border-4 border-emerald-700/15 bg-gray-200/60 shadow-lg p-8">
              <div className="flex flex-col border-b-2 border-gray-900/15 pb-3">
                <span className="text-sm opacity-80 text-gray-900">Price</span>
                <span className="text-emerald-700 font-bold opacity-80 text-xl">
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
