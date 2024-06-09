import { db } from "@/prisma";
import { loginSchema } from "@/schemas/loginSchema";
import bcrypt from "bcryptjs";

export async function POST(request: Request): Promise<Response> {
  const data = await request.json();
  const parsedData = loginSchema.parse(data);
  const { email, password } = parsedData;
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return new Response("Usuário não encontrado", { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return new Response("Senha incorreta", { status: 401 });
    }

    return new Response(
      JSON.stringify({
        token: user.token,
        username: user.email,
        name: user.name,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
