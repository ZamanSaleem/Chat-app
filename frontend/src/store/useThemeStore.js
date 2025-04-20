// import { create } from "zustand";

// export const useThemeStore = create((set) => ({
//   theme: localStorage.getItem("chat-theme") || "coffee",
//   setTheme: (theme) => {
//     localStorage.setItem("chat-theme", theme);
//     set({ theme });
//   },
// }));

import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "light",
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("chat-theme", newTheme);
      return { theme: newTheme };
    });
  },
}));