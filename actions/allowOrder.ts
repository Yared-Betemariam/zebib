"use server";

import prisma from "@/lib/prisma";

export const allowOrder = async (orderid: string) => {
  await prisma.order.update({
    where: {
      id: orderid,
    },
    data: {
      access: true,
    },
  });
};

export const getPdfLink = async (orderId: string) => {
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
    select: {
      pdf: true,
    },
  });
  return order?.pdf;
};
