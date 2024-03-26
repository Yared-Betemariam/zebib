import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const OrderButton = () => {
  return (
    <Link
      href={"/orders"}
      className="flex items-center hover:bg-black/10 px-2 rounded-md transition text-gray-200 gap-2"
    >
      <span>Pre-Order</span>
      <FaShoppingCart />
    </Link>
  );
};
export default OrderButton;
