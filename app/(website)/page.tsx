import Suggestions from "@/components/Suggestions";
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
      <section className="relative h-96 bg-emerald-800/[0.01]">
        <div className=" absolute bg-main inset-0 bg-cover bg-bottom -z-10"></div>
        <div className=" wrapper h-full flex py-16 flex-col gap-2">
          <h1 className="text-5xl font-bold text-gray-200">
            ዘቢብ እስላማዊ ኢ-መጽሐፍ ማዕከል
          </h1>
          <h2 className="text-2xl opacity-80 text-gray-200">
            የተለያዩ ኢስላማዊ ኢ-መጽሐፍትን በተሻለ ዋጋ ይግዙ
          </h2>
          <div className="my-2 flex items-center">
            <Link href={"/book"}>
              <Button
                className="rounded-full bg-emerald-700/95 text-base"
                size={"lg"}
              >
                Shop Book
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="wrapper py-12 flex flex-col gap-6">
        <div className="flex items-center justify-between flex-col gap-4 md:flex-row">
          <div>
            <h2 className="text-gary-900/90 font-semibold text-3xl">
              የመክፈያ ዘዴ
            </h2>
            <p>ቴሌቢርን በመጠቀም በነዚህ ቀላል ደረጃዎች ይክፈሉ።</p>
          </div>
          <Telebirr />
        </div>
        <div className="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-4">
          {paymentSteps.map((item) => (
            <div key={item.step} className="flex items-start  gap-2">
              <span className="rounded-full grid place-content-center w-10 h-10 bg-gradient-to-b from-emerald-600 to-emerald-600 p-2 text-base text-gray-200">
                {item.step}
              </span>
              <p className="text-gray-900 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <article className="py-12 my-12 bg-gray-900/90" id="book">
        <section className="wrapper items-center md:items-start flex gap-12 flex-col md:flex-row">
          <Image
            src={"/bookm.png"}
            alt="Book"
            width={495}
            height={700}
            className="w-[65%] xs:w-[55%] sm:w-[45%] md:w-[25%] shadow-lg rounded-xl my-auto"
          />
          <div className="text-gray-200 pb-12 pt-6 flex flex-col gap-6">
            <span className="border-emerald-400 border-2 p-2 px-4 rounded-md text-emerald-400 bg-emerald-700/50 mr-auto mb-4">
              Pre-Order Available Now
            </span>
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold">ሊያገኙት የሚችሉት ምርጥ መጽሐፍ</h2>
              <div className="text-sm opacity-80 text-gray-200 flex flex-col font-semibold">
                <span>
                  ትርጉም :-{" "}
                  <span className="text-sm text-emerald-500">ዘቢብ ሡልጣን</span>{" "}
                </span>
                <span>
                  ደራሲ :-{" "}
                  <span className="text-sm text-emerald-500">
                    ዶ/ር አብዱልዓዚዝ አብዱልረሂም
                  </span>
                </span>
              </div>
            </div>
            <p className="opacity-80 font-light">
              የእስልምና አስተምህሮቶችን እና ወጎችን የበለፀገ ታፔላ ያስሱ ወደ እምነት ምንነት እየመረመርን ይህ
              ኢ-መጽሐፍ መንፈሳዊነት እና ጥበብ. ከቁርኣን ጥልቅ ግንዛቤዎች ዘመን የማይሽረው የነቢዩ ሙሐመድ
              (ሰ.ዐ.ወ) ትምህርት ይህ አጠቃላይ መመሪያ ስለ እስልምና አጠቃላይ እይታን ይሰጣል አንኳር
            </p>
            <Link href={"/book"}>
              <Button
                className="bg-emerald-700/90 text-semibold rounded-full"
                size={"lg"}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </section>
      </article>
      <article className=" bg-gradient-to-r from-gray-800 to-slate-800 text-gray-200 my-12 mb-24 ">
        <section className="h-full relative wrapper py-12 flex items-center md:items-start justify-between gap-12 md:gap-20 lg:gap-60 flex-col md:flex-row">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">ሃሳብዎን ያካፍሉ</h1>
            <p className="opacity-70">
              ማንኛውንም ጥያቄ እና ቀጥሎ ምን አይነት ኢ-መጽሐፍት ማቅረብ እንዳለብን ምክሮችን ይላኩልን።
            </p>
          </div>
          <Suggestions />
        </section>
      </article>
    </main>
  );
};

export default Home;
