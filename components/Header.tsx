import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { Button } from "./ui/button";
import { getUser } from "@/lib/utils";
import LogoutButton from "./LogoutButton";
import OrderButton from "./OrderButton";
import Image from "next/image";

const Header = async () => {
  const user = await getUser();
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Book",
      path: "/book",
    },
    {
      name: "About Us",
      path: "/about",
    },
  ];
  return (
    <header className=" h-36 shadow-md text-emerald-700 bg-gradient-to-br from-emerald-50/70 to-green-50/70 flex flex-col">
      <section className="wrapper  flex flex-1 items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={761}
            height={739}
            className=" w-16"
          />
          <h2 className="font-semibold text-3xl hidden lg:flex">
            ዘቢብ እስላማዊ ኢ-መጽሐፍ ማዕከል
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <MdAccountCircle size={38} />
          {user ? (
            <div className="flex items-center gap-4">
              <span className="">{user.user?.name}</span>
              <LogoutButton />
            </div>
          ) : (
            <Link href={"/auth/sign-in"}>
              <Button className="rounded-full px-6 bg-gray-800/90">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </section>
      <div className="border-emerald-100/20 border-t-2  text-gray-200 bg-gradient-to-r to-teal-700 from-emerald-700 py-3">
        <div className="wrapper flex justify-between items-center">
          <nav className="flex items-center space-x-4">
            {navLinks.map((item) => (
              <Link href={item.path} key={item.name} className="">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* <div className="flex items-center">
            <Input
              placeholder="Search"
              className="max-w-md rounded-none rounded-l-md h-10"
            />
            <button>
              <MdSearch
                size={44}
                className="bg-black/30 h-10 rounded-r-md p-2 px-3"
              />
            </button>
          </div> */}
          <OrderButton />
        </div>
      </div>
    </header>
  );
};
export default Header;
