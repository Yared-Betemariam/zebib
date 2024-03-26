import { allowOrder } from "@/actions/allowOrder";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

const AllowAccess = ({
  orderId,
  loading,
  setLoading,
}: {
  orderId: string;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const allowing = async () => {
    setLoading(true);
    await allowOrder(orderId);
    setLoading(false);
  };
  return (
    <Button
      onClick={allowing}
      disabled={loading}
      className="bg-gray-800/90 rounded-full mx-auto px-8"
    >
      {loading ? "Allowing" : "Allow Access"}
    </Button>
  );
};
export default AllowAccess;
