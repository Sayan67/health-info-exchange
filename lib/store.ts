import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StoreToken {
  token: string | null;
  setToken: (token: string) => void;
  type: string | null;
  setType: (type: string) => void;
}

const useAuthStore = create<StoreToken>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => {
        set({ token });
      },
      type: null,
      setType: (type: string) => set({ type }),
    }),
    { name: "" }
  )
);

export { useAuthStore };
