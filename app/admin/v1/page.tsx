"use client";

import AdminBoard from "@/components/AdminBoard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

type Admin = {
  name?: string;
  password?: string;
};

const AdminPage = () => {
  const [admin, setAdmin] = useState<Admin | null>();
  const [er, seEr] = useState<string | null>(null);
  const [checked, setCheck] = useState(false);
  const check = () => {
    seEr(null);
    if (admin?.name == "moh" && admin.password == "admin") {
      setCheck(true);
    } else {
      seEr("Not Allowed");
    }
  };
  if (checked) {
    return <AdminBoard />;
  }
  return (
    <div className="flex flex-col mx-auto w-full my-auto max-w-md p-12 border-amber-700/60 gap-3 rounded-b-xl border-t-8 bg-gray-200 shadow-lg">
      <span className="text-xl font-bold">Admin Panel</span>
      <Input
        placeholder="name"
        onChange={(e) =>
          setAdmin((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <Input
        placeholder="password"
        type="password"
        onChange={(e) =>
          setAdmin((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <Button onClick={check}>Sign In</Button>
      {er && (
        <span className="text-base text-rose-600 opacity-80 mx-auto">{er}</span>
      )}
    </div>
  );
};
export default AdminPage;
