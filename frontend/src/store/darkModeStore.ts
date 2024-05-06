import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TodoListType = {
  dueDate: string;
  title: string;
  checked: boolean;
  id: string;
  content: string;
};

interface IDartModeStoreProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const useDarkModeStore = create(
  persist<IDartModeStoreProps>(
    (set) => ({
      darkMode: false,
      setDarkMode: (mode) => {
        set(() => ({ darkMode: mode }));
      }
    }),
    {
      name: "mode"
    }
  )
);

export { useDarkModeStore };
