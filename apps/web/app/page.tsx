"use client";

import Button from "@repo/ui/Button";
import { useRouter } from "next/navigation";
import { usePhotoStore } from "./store/usePhotoStore";
import { usePhotoMutation } from "./hooks/usePhotoMutation";
import { useEffect, useState } from "react";

const MainPage = () => {
  const router = useRouter();
  const photo = usePhotoStore((state) => state.photo);
  const { mutate, isPending } = usePhotoMutation();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleNextClick = () => {
    if (isButtonDisabled) return;

    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 1000);

    if (photo) {
      router.push("/result");
    } else {
      mutate(undefined, {
        onSuccess: () => router.push("/result"),
      });
    }
  };

  useEffect(() => {
    if (photo) {
      router.replace("/result");
    }
  }, [photo, router]);

  return (
    <div className="relative flex flex-col items-center  min-h-screen w-full  justify-between">
      <div className="h-[52px] p-[17px]">
        <h3>이재현</h3>
      </div>
      <div className="relative -z-10 flex flex-col w-full max-w-[1440px] dt:flex-row items-center justify-center h-full">
        <div className="flex flex-col p-5 items-center gap-4 w-full">
          <div className="flex flex-col items-center bg-white w-full">
            <h1 className="text-2xl font-semibold">안녕하세요</h1>
            <h3 className="text-2xl font-semibold">이재현입니다.</h3>
          </div>
        </div>
      </div>
      <div className="relative flex flex-row p-5 w-full max-w-[1440px] dt:flex-row items-center justify-center h-[128px]">
        <div className="relative">
          <Button
            text="다음"
            onClick={() => handleNextClick()}
            className="w-[154px] h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base lg:text-lg"
          />
          <div
            className={`absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin transition-opacity duration-300 ${
              isPending ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
