import { useMutation } from "@tanstack/react-query";
import { usePhotoStore } from "../store/usePhotoStore";

const fetchPhoto = async () => {
  const response = await fetch("https://picsum.photos/id/0/info");
  if (!response.ok) throw new Error("Failed to fetch photo");
  return response.json();
};

export const usePhotoMutation = () => {
  const setPhoto = usePhotoStore((state) => state.setPhoto);

  return useMutation({
    mutationFn: fetchPhoto,
    onSuccess: (data) => {
      setPhoto(data);
    },
  });
};
