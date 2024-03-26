"use server";

import { book } from "@/data/book";
import prisma from "@/lib/prisma";

export type Orderer = {
  id?: string;
  name?: string;
  phoneNumber?: string;
};

export const makeOrder = async ({ orderer }: { orderer: Orderer | null }) => {
  try {
    const order = await prisma.order.findMany({
      where: {
        userId: orderer?.id as string,
      },
    });
    if (order.length) {
      return { ok: true, message: "Order added" };
    }
    await prisma.order.create({
      data: {
        name: orderer?.name as string,
        phoneNumber: orderer?.phoneNumber as string,
        pdf: book.pdf as string,
        userId: orderer?.id as string,
        price: book?.price as string,
      },
    });
  } catch (error) {
    return { ok: false, message: "Please try again" };
  }

  return { ok: true, message: "Order Made" };
};
