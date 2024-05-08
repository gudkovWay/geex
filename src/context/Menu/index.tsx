import { createContext, useContext, useState } from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('Проведи провайдер');
  }
  return context;
}

export const MenuProvider = ({ children}: {children: React.ReactNode}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  }

  const closeAuthModal = () => {
    setMenuOpen(false);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, openMenu: openMenu, closeMenu: closeAuthModal }}>
      {children}
    </MenuContext.Provider>
  );
}

