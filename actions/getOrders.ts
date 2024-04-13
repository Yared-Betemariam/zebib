"use server";

import prisma from "@/lib/prisma";
import { getUser } from "@/lib/utils";

export const getOrders = async () => {
  const session = await getUser();
  console.log(session?.user.id);
  const orders = await prisma.order.findMany({
    where: {
      userId: session?.user.id,
    },
    select: {
      id: true,
      userId: true,
      access: true,
      name: true,
      phoneNumber: true,
    },
  });
  return { ok: true, orders };
};

export const getAllOrders = async () => {
  const orders = await prisma.order.findMany({
    where: {
      access: false,
    },
  });
  return orders;
};
