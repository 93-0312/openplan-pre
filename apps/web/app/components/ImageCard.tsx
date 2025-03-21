import React from "react";
import Image from "next/image";

interface ImageCardProps {
  imageUrl?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl }) => {
  return (
    <>
      {imageUrl ? (
        <div className="w-full mb-[40px] p-5 dt:mb-0 dt:mr-[40px]">
          <Image
            src={imageUrl}
            alt="Preview"
            className="w-full h-auto object-cover rounded-2xl overflow-hidden"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ImageCard;
