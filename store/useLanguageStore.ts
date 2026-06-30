import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LanguageState {
  selectedLanguage: string | null;
  _hasHydrated: boolean;
  setLanguage: (code: string) => void;
  clearLanguage: () => void;
  setHasHydrated: (value: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      _hasHydrated: false,
      setLanguage: (code: string) => set({ selectedLanguage: code }),
      clearLanguage: () => set({ selectedLanguage: null }),
      setHasHydrated: (value: boolean) => set({ _hasHydrated: value }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
