"use server";

import prisma from "@/lib/prisma";
import { getUser } from "@/lib/utils";

export const getFullUser = async () => {
  const session = await getUser();
  if (session) {
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
    return user;
  } else {
    return null;
  }
};
