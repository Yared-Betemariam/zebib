import OrderingForm from "@/components/OrderingForm";
import Telebirr from "@/components/Telebirr";
import { getEBook } from "@/lib/utils";

const page = () => {
  return (
    <main className="wrapper flex-1 flex flex-col">
      <section className="flex gap-4 my-12 border-2 bg-gray-200/60  border-amber-700/20 rounded-r-xl shadow-lg">
        <div className="bg-gray-800/95 text-gray-200 p-12">
          <h2 className="text-2xl font-semibold">Pre-Ordering Process</h2>
          <div className="flex flex-col items-start justify-between my-4 gap-12">
            <Telebirr />
            <div className="flex flex-col">
              <span className="opacity-90">1. በሚከተለው የቴሌብር ሂሳብ ይክፈሉ።</span>
              <span className="opacity-90">
                2. ሙሉ ስምዎን እና ስልክ ቁጥርዎን በመጠቀም ማዘዝ
              </span>
              <span className="opacity-90">
                3. ከ1-3 ቀናት በኋላ በOrders ገጹ ላይ ይመልከቱ - You will be able to
                Download the file
              </span>
            </div>
          </div>
        </div>
        <OrderingForm />
      </section>
    </main>
  );
};
export default page;
