import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PhotoData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface PhotoStore {
  photo: PhotoData | null;
  setPhoto: (photo: PhotoData) => void;
}

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set) => ({
      photo: null,
      setPhoto: (photo) => set({ photo }),
    }),
    {
      name: "photo-storage", // 로컬스토리지 키
    }
  )
);
