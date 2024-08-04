import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { name, email } = req.body;

    try {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: { name, email },
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }

  if (req.method === "DELETE") {
    try {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
