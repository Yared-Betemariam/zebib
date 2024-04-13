"use client";

import { addMessage } from "@/actions/addMessage";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormEvent, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export type MessageFromData = {
  phone: string;
  text: string;
};

const Suggestions = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [fromData, setFromData] = useState<MessageFromData>({
    phone: "",
    text: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    await addMessage(fromData);
    setLoading(false);
    setMessage("መልእክት ተልኳል።");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col gap-2 bg-emerald-50/90 border border-gray-900/20 shadow-md rounded-xl -bottom-16 right-0 p-10 top-12 text-gray-900 max-w-md w-full"
    >
      <Input
        disabled={loading}
        placeholder="ስልክ ቁጥር"
        className=" border border-gray-900/20"
        required
        onChange={(e) =>
          setFromData((prev) => ({ ...prev, phone: e.target.value }))
        }
      />
      <Textarea
        disabled={loading}
        placeholder="መልእክትህ"
        className="flex-1 border border-gray-900/20"
        required
        onChange={(e) =>
          setFromData((prev) => ({ ...prev, text: e.target.value }))
        }
      />
      <Button
        disabled={loading}
        className="bg-gradient-to-r from-green-700 to-emerald-700 my-1"
      >
        ላክ
      </Button>
      {message && (
        <span className="text-base opacity-70 text-emerald-800 bg-emerald-100/10 text-center flex items-center gap-2 font-semibold">
          <FaRegCircleCheck size={18} />
          {message}
        </span>
      )}
    </form>
  );
};
export default Suggestions;
