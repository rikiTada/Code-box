"use client";
import Header from "@/components/header";
import { useStore } from "@/store";
import Link from "next/link";

export default function Page() {
  const { count, inc } = useStore();

  return (
    <div>
      <Header title="下層ページ">
        <Link href="/">
          <div className="py-2 px-4 inline-block rounded bg-zinc-800 hover:bg-zinc-700 text-white">
            ⇒ HOME
          </div>
        </Link>
      </Header>

      <div className="grid grid-cols-2 gap-4 place-items-center min-h-[calc(100vh-160px)]">
        <p className="text-4xl">{count}</p>
        <button
          className="py-2 px-4 rounded bg-blue-400 text-white hover:bg-blue-500"
          onClick={inc}
        >
          + One up
        </button>
      </div>
    </div>
  );
}
