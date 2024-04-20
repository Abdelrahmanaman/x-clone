import { create } from "zustand";

type MenuStore = {
  menuOpen: boolean;
  handleOpenMenu: () => void;
};

export const useMenuOpen = create<MenuStore>((set) => ({
  menuOpen: false,
  handleOpenMenu: () => {
    set((state) => ({ menuOpen: !state.menuOpen }));
  },
}));
