import { db } from "@/prisma";

export async function GET(request: Request) {
  const services = await db.service.findMany({
    where: { archived: false },
    include: {
      resolved_item: true,
    },
  });
  return Response.json(services);
}
