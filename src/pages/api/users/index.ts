import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }

  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve users" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
