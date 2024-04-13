/* eslint-disable react/no-unescaped-entities */
import { getAllOrders } from "@/actions/getOrders";
import { Message, Order } from "@prisma/client";
import { useEffect, useState } from "react";
import AllowAccess from "./AllowAccess";
import { allowOrder } from "@/actions/allowOrder";
import { getMessages } from "@/actions/addMessage";

const AdminMessages = () => {
  const [orders, setOrders] = useState<Message[]>();
  const [loading, setLoading] = useState(false);
  const setOrder = async () => {
    setLoading(true);
    const orders = await getMessages();
    setOrders(orders);
    setLoading(false);
  };
  useEffect(() => {
    const interval = setInterval(async () => {
      const orders = await getMessages();
      setOrders(orders);
    }, 5000); // Interval set to 2 seconds (2000 milliseconds)

    return () => clearInterval(interval);
  });
  useEffect(() => {
    setOrder();
  }, []);

  const allowing = async (id: string) => {
    setLoading(true);
    await allowOrder(id);
    await setOrder();
    setLoading(false);
  };

  return (
    <section className="p-6 flex flex-col border rounded-xl border-gray-900/30 shadow-md overflow-auto text-base">
      <div className="border-b-2 grid grided2 border-gray-900/[0.07]">
        <span>No</span>
        <span>Phone Numbers</span>
        <span>Message</span>
      </div>
      {!loading ? (
        orders?.length ? (
          orders.map((item, i) => (
            <div
              key={item.id}
              className="border-b-2 border-gray-900/[0.07] grid grided2"
            >
              <span>{i + 1}</span>
              <span>{item.phoneNumber}</span>
              <span>{item.text}</span>
            </div>
          ))
        ) : (
          <span className="text-base opacity-90 my-4 mx-2">No Messages</span>
        )
      ) : (
        <span className="text-base opacity-80 my-4 mx-2">Loading</span>
      )}
    </section>
  );
};
export default AdminMessages;
