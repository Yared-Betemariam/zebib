import { UpFormType } from "@/app/auth/sign-up/page";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();
  const user = await prisma.user.findMany({
    where: {
      phoneNumber: data.phoneNumber,
    },
  });
  if (user.length) {
    return NextResponse.json({
      ok: false,
      message: "User with phone number already exists",
    });
  }
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      phoneNumber: data.phoneNumber,
    },
  });

  return NextResponse.json({ ok: true, user: newUser });
};
