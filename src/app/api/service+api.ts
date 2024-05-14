import { db } from "@/prisma";

export async function GET(request: Request) {
  const services = await db.service.findMany({
    include: {
      resolved_item: true
    }
  }); 
  return Response.json(services);
}
