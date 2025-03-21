"use client";

import { useRouter } from "next/navigation";
import Button from "@repo/ui/Button";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">페이지를 찾을 수 없습니다.</p>
      <Button
        text="홈으로 돌아가기"
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      />
    </div>
  );
}
