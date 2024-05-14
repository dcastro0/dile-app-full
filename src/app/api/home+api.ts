import { db } from "@/prisma";

export async function GET(request: Request) {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  const day = date.getDate() - 7;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  try {
    const hoje = await db.service.count({
      where: {
        date_create: {
          equals: new Date(today),
        },
      },
    });
    const week = await db.service.count({
      where: {
        date_create: {
          gt: new Date(`${year}-${month}-${day}`),
        },
      },
    });
    const inProgress = await db.service.count({
      where: {
        archived: {
          equals: false,
        },
      },
    });
    const canceled = await db.service.count({
      where: {
        archived: true,
      },
    });
    return Response.json({
      today: hoje,
      week: week,
      inProgress: inProgress,
      canceled: canceled,
    });
  } catch (error) {
    return Response.json({
      error: "Ocorreu um erro ao processar a solicitação.",
    });
  }
}
