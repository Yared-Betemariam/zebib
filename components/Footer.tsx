import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gray-900/90 text-gray-200 ">
      <section className="wrapper py-6 opacity-80 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-amber-500 ">ዘቢብ እስላማዊ ኢ-መጽሐፍ ማዕከል</span>
            <Link href={"/about"}>
              <Button variant={"link"} className="p-0 text-gray-200">
                About
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-end text-base">
            <span>አግኙን</span>
            <span>+251 911 428 980</span>
          </div>
        </div>
        <p className="font-medium text-base">
          Copyright &copy; {date.getFullYear()}. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};
export default Footer;
