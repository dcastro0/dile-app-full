import { db } from "@/prisma";

export async function GET(request: Request) {
  const date = new Date();
  const today = date.getDay();
  const month = date.getMonth() + 1
  const services = await db.service.findMany(); 
  return Response.json(services);
}
