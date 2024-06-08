import { db } from "@/prisma";

export async function GET(request: Request): Promise<Response> {
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

    return new Response(
      JSON.stringify({
        today: hoje,
        week: week,
        inProgress: inProgress,
        canceled: canceled,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching service counts:", error);

    return new Response(
      JSON.stringify({
        error: "Ocorreu um erro ao processar a solicitação.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
