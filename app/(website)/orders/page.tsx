import { getOrders } from "@/actions/getOrders";
import DownloadPDF from "@/components/DownloadPDF";
import { book } from "@/data/book";
import Image from "next/image";

const CartPage = async () => {
  const orders = (await getOrders()).orders;
  return (
    <main className="flex flex-col gap-2 flex-1">
      <section className="wrapper flex flex-col py-12 gap-6">
        <h1 className="text-2xl font-semibold">Pre-Order - የቅድሚያ ትእዛዝ</h1>
        {orders.length ? (
          orders.map((item, i) => (
            <div
              key={item.id}
              className=" lg:h-96  flex gap-6 flex-col md:flex-row"
            >
              <div className="flex bg-gray-200/60 gap-2 flex-1 shadow-xl   border-emerald-700/20 border-2 flex-col lg:flex-row">
                <div className="md:h-[50%] lg:h-full relative lg:w-[35%] h-80">
                  <Image
                    src={book.image}
                    alt={book.name}
                    fill
                    className="object-cover shadow-md"
                  />
                </div>
                <div className="flex flex-col px-10 py-8 flex-1 mr-4">
                  <h3 className="text-2xl truncate font-semibold">
                    {book.name}
                  </h3>
                  <p className="text-xl opacity-80 text-emerald-700">
                    {book.price} <span>ብር</span>
                  </p>
                  <div className="flex flex-col my-2">
                    <p className="text-sm opacity-80">Payment Status</p>
                    <span className="text-base text-emerald-700">
                      {item.access ? "Payment Confirmed" : "Pre-order"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 w-full lg:max-w-[20rem] rounded-xl text-gray-200 p-8  shadow-xl flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-sm opacity-80">Name</span>
                  <span>{item.name}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm opacity-80">Phone Number</span>
                  <span>{item.phoneNumber}</span>
                </div>
                <DownloadPDF id={item.id} access={item.access} />
              </div>
            </div>
          ))
        ) : (
          <span>No Orders</span>
        )}
      </section>
    </main>
  );
};
export default CartPage;
