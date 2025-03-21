"use client";

import ImageCard from "../components/ImageCard";
import InfoBox from "../components/InfoBox";
import Button from "@repo/ui/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePhotoStore } from "../store/usePhotoStore";

const ResultPage = () => {
  const router = useRouter();
  const photo = usePhotoStore((state) => state.photo);

  useEffect(() => {
    if (!photo) {
      setTimeout(() => {
        router.replace("/");
      }, 1000);
    }
  }, [photo, router]);

  const idAuthorData = [
    { label: "id", value: photo?.id },
    { label: "author", value: photo?.author },
  ];

  const sizeData = [
    { label: "Width", value: photo?.width },
    { label: "Height", value: photo?.height },
  ];

  const linkData = [
    { label: "URL", value: photo?.url },
    { label: "Download URL", value: photo?.download_url },
  ];

  return (
    <div className="relative flex flex-col items-center  min-h-screen w-full">
      {/* background */}

      <div
        className="absolute -z-10 inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(107, 114, 128, 0.1), rgba(255, 255, 255, 1)), url(${photo?.download_url})`,
          backgroundPosition: "center",
          filter:
            "contrast(1.2) brightness(0.5) saturate(1.1) opacity(0.8) blur(5px)",
        }}
      ></div>
      {/*  */}

      <div className="relative h-[52px] p-[17px] text-white">
        <h3>이재현</h3>
      </div>

      <div className="relative flex flex-col w-full max-w-[1440px] dt:flex-row items-center justify-center">
        <ImageCard imageUrl={photo?.download_url} />
        <div className="flex flex-col p-5 items-center justify-center gap-4 w-full">
          <InfoBox data={idAuthorData} />
          <InfoBox data={sizeData} />
          <InfoBox data={linkData} isUrlInfo={true} />
          <Button
            text="이전"
            onClick={() => router.push("/")}
            className="w-full tb:w-[154px] h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base lg:text-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
