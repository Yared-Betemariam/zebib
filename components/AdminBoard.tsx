/* eslint-disable react/no-unescaped-entities */
import { getAllOrders } from "@/actions/getOrders";
import { Order } from "@prisma/client";
import { useEffect, useState } from "react";
import AllowAccess from "./AllowAccess";
import { Button } from "./ui/button";

const AdminBoard = () => {
  const [orders, setOrders] = useState<Order[]>();
  const [loading, setLoading] = useState(false);
  const setOrder = async () => {
    setLoading(true);
    const orders = await getAllOrders();
    setOrders(orders);
    setLoading(false);
  };
  useEffect(() => {
    setOrder();
  }, []);

  return (
    <main className="wrapper">
      <div className="bg-amber-700/80 py-6 text-gray-200 px-8 rounded-b-md shadow-md">
        <span className="text-semibold tex-xl">Zebib - Admin</span>
      </div>
      <section className="py-12 flex flex-col px-8 bg-gray-200/80 shadow-xl">
        <span className="text-xl font-semibold mb-4">New Orders</span>
        <div className="border-b-2 grid grided p-4 border-gray-900/[0.07]">
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
                className="border-b-2 p-4 border-gray-900/[0.07] grid grided"
              >
                <span>{i + 1}</span>
                <span>{item.name}</span>
                <span>{item.phoneNumber}</span>
                <span>{item.price}</span>
                <AllowAccess
                  orderId={item.id}
                  loading={loading}
                  setLoading={setLoading}
                />
              </div>
            ))
          ) : (
            <span className="text-base opacity-90 my-4 mx-2">No Orders</span>
          )
        ) : (
          <span className="text-base opacity-80 my-4 mx-2">Loading</span>
        )}
      </section>
    </main>
  );
};
export default AdminBoard;
