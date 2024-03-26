"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const LogoutButton = () => {
  return (
    <Button
      onClick={() => signOut()}
      size={"lg"}
      className="rounded-full bg-gray-800/90"
    >
      Log Out
    </Button>
  );
};
export default LogoutButton;
