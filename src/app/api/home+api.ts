import { db } from "@/prisma";


export async function GET(request: Request) {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  const weekAgoDate = new Date();
  weekAgoDate.setDate(date.getDate() - 7);
  const weekAgo = weekAgoDate.toISOString().slice(0, 10);

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
          gt: new Date(weekAgo),
        },
      },
    });
    const inProgress = await db.service.count({
      where: {
        archived: false,
      },
    });
    const canceled = await db.service.count({
      where: {
        archived: true,
      },
    });

    // Use NextResponse.json se estiver usando Next.js API routes
    return Response.json({
      today: hoje,
      week: week,
      inProgress: inProgress,
      canceled: canceled,
    });
  } catch (error) {
    // Use NextResponse.json se estiver usando Next.js API routes
    return Response.json({
      error: "Ocorreu um erro ao processar a solicitação.",
    });
  }
}
