import { Book } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const BookComponent = ({ book }: { book: Book }) => {
  return (
    <Link
      href={`/shop/${book.id}`}
      key={book.name}
      className="flex flex-col bg-gray-200/40 border-2 border-amber-700/30 rounded-xl shadow-md w-64 h-96"
    >
      <div className="relative flex-1">
        <Image src={book.image} alt={book.name} fill className="rounded-t-xl" />
      </div>
      <div className="flex flex-col px-6 pt-4">
        <h3 className="text-xl truncate">{book.name}</h3>
        <p className="text-base opacity-80">
          {book.price} <span>ብር</span>
        </p>
      </div>
      <Button
        variant={"link"}
        className="p-0 mr-auto px-6 pb-2 text-amber-700/70"
      >
        Learn More
      </Button>
    </Link>
  );
};
export default BookComponent;
