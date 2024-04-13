/* eslint-disable react/no-unescaped-entities */
import { getAllOrders } from "@/actions/getOrders";
import { Order } from "@prisma/client";
import { useEffect, useState } from "react";
import AllowAccess from "./AllowAccess";
import { allowOrder } from "@/actions/allowOrder";

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>();
  const [loading, setLoading] = useState(false);
  const setOrder = async () => {
    setLoading(true);
    const orders = await getAllOrders();
    setOrders(orders);
    setLoading(false);
  };
  useEffect(() => {
    const interval = setInterval(async () => {
      const orders = await getAllOrders();
      setOrders(orders);
    }, 5000);

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
      <div className="border-b-2 grid grided border-gray-900/[0.07]">
        <span>No</span>
        <span>Buyer's Name</span>
        <span>Phone Number</span>
        <span>Price Paid</span>
      </div>
      {!loading ? (
        orders?.length ? (
          orders.map((item, i) => (
            <div
              key={item.id}
              className="border-b-2 border-gray-900/[0.07] grid grided"
            >
              <span>{i + 1}</span>
              <span>{item.name}</span>
              <span>{item.phoneNumber}</span>
              <span>{item.price}</span>
              <AllowAccess bid={item.id} loading={loading} onClick={allowing} />
            </div>
          ))
        ) : (
          <span className="text-base opacity-90 my-4 mx-2">No Orders</span>
        )
      ) : (
        <span className="text-base opacity-80 my-4 mx-2">Loading</span>
      )}
    </section>
  );
};
export default AdminOrders;
