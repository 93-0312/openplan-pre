import { useQuery } from "@tanstack/react-query";
import { usePhotoStore } from "../store/usePhotoStore";

const fetchPhoto = async () => {
  const response = await fetch("https://picsum.photos/id/0/info");
  if (!response.ok) throw new Error("Failed to fetch photo");
  return response.json();
};

export const usePhotoQuery = () => {
  const setPhoto = usePhotoStore((state) => state.setPhoto);

  return useQuery({
    queryKey: ["photo"],
    queryFn: fetchPhoto,

    meta: {
      onSettled: (data: any, error: any) => {
        if (data) setPhoto(data); // 렌더링 후 상태 업데이트
      },
    },
  });
};
