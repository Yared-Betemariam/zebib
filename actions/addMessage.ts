"use server";

import { MessageFromData } from "@/components/Suggestions";
import prisma from "@/lib/prisma";

export const addMessage = async (message: MessageFromData) => {
  await prisma.message.create({
    data: {
      phoneNumber: message.phone,
      text: message.text,
      name: "",
    },
  });
};
export const getMessages = async () => {
  const messages = await prisma.message.findMany();
  return messages.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};
