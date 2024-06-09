import { db } from "@/prisma";
import { registerSchema } from "@/schemas/registerSchema";
import bcrypt from "bcryptjs";

export async function POST(request: Request): Promise<Response> {
  try {
    const data = await request.json();
    const parsedData = registerSchema.parse(data);
    const { email, password, name } = parsedData;
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        email,
        name,
        password: hashPassword,
        token: "dile_app",
      },
    });

    return new Response(
      JSON.stringify({
        token: user.token,
        username: user.email,
        name: user.name,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
