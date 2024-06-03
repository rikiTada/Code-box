import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("DB接続に失敗しました");
  }
}

// ブログの詳細記事取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = parseInt(req.url.split("/blog/")[1]);

    await main();
    const post = await prisma.post.findFirst({ where: { id } });

    return NextResponse.json({ message: "success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// ブログ記事の更新
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = parseInt(req.url.split("/blog/")[1]);

    const { title, description } = await req.json();

    await main();
    const post = await prisma.post.update({
      data: { title, description },
      where: { id },
    });

    return NextResponse.json({ message: "success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// ブログ記事の削除
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = parseInt(req.url.split("/blog/")[1]);

    await main();
    const post = await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({ message: "success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
