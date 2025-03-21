import React from "react";
import Skeleton from "./Skeleton";

interface InfoBoxProps {
  data: { label: string; value: string | number | undefined }[];
  isUrlInfo?: boolean;
}

const InfoBox = ({ data, isUrlInfo }: InfoBoxProps) => {
  return (
    <div
      className={`flex ${
        isUrlInfo ? "flex-col" : "flex-col tb:flex-row"
      } gap-4 w-full bg-white p-3 rounded-lg shadow-md text-sm `}
    >
      {data.map((item, index) => (
        <div key={index} className="flex flex-col py-2 tb:w-1/2">
          <p className="font-semibold">{item.label}</p>
          {data[0]?.value ? (
            <p className="text-gray-500">{item.value}</p>
          ) : (
            <Skeleton className="w-full h-4 mt-1" />
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoBox;
