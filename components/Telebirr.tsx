import Image from "next/image";

const Telebirr = () => {
  return (
    <div className="flex gap-5 items-center">
      <div className="flex flex-col items-end">
        <span className="text-sm opacity-80 font-bold">የክፍያ ቁጥር</span>
        <p className="text-2xl font-semibold text-emerald-700">
          +251 911 428 980
        </p>
      </div>
      <Image
        src={"/tb.png"}
        alt="telebirr"
        width={421}
        height={237}
        className="w-32"
      />
    </div>
  );
};
export default Telebirr;
