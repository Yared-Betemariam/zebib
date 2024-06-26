import { allowOrder } from "@/actions/allowOrder";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

const AllowAccess = ({
  onClick,
  bid,
  loading,
}: {
  loading: boolean;
  bid: string;
  onClick: (k: string) => void;
}) => {
  return (
    <Button
      onClick={() => onClick(bid)}
      disabled={loading}
      className="bg-gray-800/90 rounded-full mx-auto px-8"
    >
      {loading ? "Allowing" : "Allow Access"}
    </Button>
  );
};
export default AllowAccess;
