import Telebirr from "@/components/Telebirr";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const paymentSteps = [
    {
      step: 1,
      desc: "ስልክ ቁጥርዎን እና ሙሉ ስምዎን (ቴሌ-ብር) በመጠቀም ይግቡ።",
    },
    {
      step: 2,
      desc: "የቀረበውን ስልክ ቁጥር በመጠቀም መጠኑን ይክፈሉ።",
    },
    {
      step: 3,
      desc: "ቅድመ-ትዕዛዝ ያድርጉ",
    },
  ];
  return (
    <main className="flex flex-col flex-1">
      <section className="relative h-80">
        <div className=" absolute bg-hero inset-0 bg-cover bg-bottom -z-10"></div>
        <div className=" wrapper h-full flex py-12 flex-col gap-2">
          <h1 className="text-5xl font-bold text-gray-200">
            ዘቢብ እስላማዊ ኢ-መጽሐፍ ማዕከል
          </h1>
          <h2 className="text-2xl opacity-80 text-gray-200">
            የተለያዩ ኢስላማዊ ኢ-መጽሐፍትን በተሻለ ዋጋ ይግዙ
          </h2>
          <div className="my-2 flex items-center">
            <Link href={"/book"}>
              <Button
                className="rounded-full bg-gray-800/90 text-base"
                size={"lg"}
              >
                Shop Book
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="wrapper py-12 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-gary-900/90 font-semibold text-3xl">
              የመክፈያ ዘዴ
            </h2>
            <p>ቴሌቢርን በመጠቀም በነዚህ ቀላል ደረጃዎች ይክፈሉ።</p>
          </div>
          <Telebirr />
        </div>
        <div className="flex items-center justify-between">
          {paymentSteps.map((item) => (
            <div key={item.step} className="flex items-start  gap-2">
              <span className="rounded-full grid place-content-center w-10 h-10 bg-gradient-to-b from-amber-600 to-yellow-600 p-2 text-base text-gray-200">
                {item.step}
              </span>
              <p className="text-gray-900 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <article className="py-12 my-12 bg-gray-900/90" id="book">
        <section className="wrapper flex gap-12">
          <Image
            src={"/bookm.png"}
            alt="Book"
            width={495}
            height={700}
            className="w-[25%] shadow-lg rounded-xl"
          />
          <div className="text-gray-200 py-12 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold">ሊያገኙት የሚችሉት ምርጥ መጽሐፍ</h2>
              <span className="text-sm opacity-90 ">
                አቅራቢ :- <span className="text-sm text-amber-400">ዘቢብ</span>
              </span>
            </div>
            <p className="opacity-80 font-light">
              የእስልምና አስተምህሮቶችን እና ወጎችን የበለፀገ ታፔላ ያስሱ ወደ እምነት ምንነት እየመረመርን ይህ
              ኢ-መጽሐፍ መንፈሳዊነት እና ጥበብ. ከቁርኣን ጥልቅ ግንዛቤዎች ዘመን የማይሽረው የነቢዩ ሙሐመድ
              (ሰ.ዐ.ወ) ትምህርት ይህ አጠቃላይ መመሪያ ስለ እስልምና አጠቃላይ እይታን ይሰጣል አንኳር
            </p>
            <Link href={"/book"}>
              <Button
                className="bg-amber-700/90 text-semibold rounded-full"
                size={"lg"}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
