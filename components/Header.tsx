import Link from "next/link";
import { MdAccountCircle, MdSearch } from "react-icons/md";
import { Button } from "./ui/button";
import { getUser } from "@/lib/utils";
import LogoutButton from "./LogoutButton";
import OrderButton from "./OrderButton";

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
    <header className=" bg-[#C17215] h-32 shadow-md flex flex-col">
      <section className="wrapper flex flex-1 items-center justify-between">
        <h2 className="font-semibold text-gray-200/95 text-3xl">
          ዘቢብ እስላማዊ ኢ-መጽሐፍ ማዕከል
        </h2>
        <div className="flex items-center space-x-2">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-200/90">{user.user?.name}</span>
              <LogoutButton />
            </div>
          ) : (
            <Link href={"/auth/sign-in"}>
              <Button className="rounded-full px-6 bg-gray-800/90">
                Sign In
              </Button>
            </Link>
          )}
          <MdAccountCircle size={38} className="text-gray-200" />
        </div>
      </section>
      <div className="border-amber-100/20 border-t-2  text-gray-200 bg-gray-900/45 py-3">
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
