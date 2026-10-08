import { NextResponse } from "next/server";

const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(req: Request) {
  try {
    if (!SCRIPT_URL) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "GOOGLE_SCRIPT_URL não configurada.",
        },
        { status: 500 }
      );
    }

    const dados = await req.json();

    const resposta = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
      redirect: "follow",
    });

    if (!resposta.ok) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: `Apps Script respondeu com status ${resposta.status}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      sucesso: true,
    });
  } catch (erro) {
    console.error("Erro ao enviar para Google Sheets:", erro);

    return NextResponse.json(
      {
        sucesso: false,
        erro: "Não foi possível enviar o formulário.",
      },
      { status: 500 }
    );
  }
}