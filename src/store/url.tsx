import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UrlStore {
  urlArr: string[];
  setUrlArr: (arr: string[]) => void;
}

export const useUrlStore = create<UrlStore>()(
  persist(
    (set) => ({
      urlArr: [],
      setUrlArr: (arr) => set({ urlArr: arr }),
    }),
    {
      name: "url-data-store",
    }
  )
);
