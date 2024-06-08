import { db } from "@/prisma";

export async function GET(request: Request) {
  const services = await db.service.findMany({
    where: {
      completed: true,
      archived: false,
    },
  });
  return Response.json(services);
}
