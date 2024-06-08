import { db } from "@/prisma";

export async function GET(request: Request) {
  const services = await db.service.findMany({
    where: {
      archived: true,
    },
  });
  return Response.json(services);
}
