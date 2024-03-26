"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { getFullUser } from "@/actions/getFullUser";
import { MdShoppingCart } from "react-icons/md";
import { Button } from "./ui/button";
import { Orderer, makeOrder } from "@/actions/makeorder";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdErrorOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { book } from "@/data/book";

const OrderingForm = () => {
  const [ord, setOrd] = useState<Orderer | null>(null);
  const [message, setMessage] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const setUserForm = async () => {
      setLoading(true);
      const user = await getFullUser();
      setOrd({
        id: user?.id,
        name: user?.name as string,
        phoneNumber: user?.phoneNumber as string,
      });
      setLoading(false);
    };
    setUserForm();
  }, []);
  const order = async () => {
    setMessage(undefined);
    setError(undefined);
    setLoading(true);
    try {
      const pattern = /^\+251\s\d{3}\s\d{3}\s\d{3}$/;
      if (!ord?.phoneNumber) {
        setError("Phone Number Required");
        return setLoading(false);
      } else if (!ord?.name) {
        setError("Name Required");
        return setLoading(false);
      } else if (!pattern.test(ord.phoneNumber)) {
        setError("Please Enter a Valid Phone Number");

        return setLoading(false);
      }
      const res = await makeOrder({ orderer: ord });
      if (res.ok) {
        setMessage(res.message);
        router.refresh();
      }
      if (!res.ok) {
        setError(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col mx-auto p-8 max-w-[22rem] w-full my-auto gap-2">
      <div className="flex items-center justify-between border-b  border-gray-900/20 mb-4 pb-4">
        <span>Total</span>
        <span>
          {book.price} <span className="text-base text-amber-700">ETB</span>
        </span>
      </div>
      <Input
        disabled={loading}
        className="border-2 border-gray-800/30 bg-transparent"
        defaultValue={ord?.name as string}
        onChange={(e) => setOrd((prev) => ({ ...prev, name: e.target.value }))}
      />
      <Input
        disabled={loading}
        className="border-2 border-gray-800/30 bg-transparent"
        defaultValue={ord?.phoneNumber as string}
        onChange={(e) =>
          setOrd((prev) => ({ ...prev, phoneNumber: e.target.value }))
        }
      />
      <Button
        disabled={loading}
        onClick={order}
        className="space-x-3 rounded-full my-3"
        size={"lg"}
      >
        <MdShoppingCart />
        <span>Pre-Order</span>
      </Button>
      {message && (
        <span className="text-base font-serif opacity-80 text-emerald-800 bg-emerald-100/10 border-emerald-800 border-2 rounded-xl p-2 text-center mt-2 flex items-center gap-2 px-4">
          <FaRegCircleCheck />
          {message}
        </span>
      )}
      {error && (
        <span className="text-base font-serif opacity-80 text-rose-800 bg-rose-100/10 border-rose-800 border-2 rounded-xl p-2 text-center mt-2 flex items-center gap-2 px-4">
          <MdErrorOutline />
          {error}
        </span>
      )}
    </div>
  );
};
export default OrderingForm;
