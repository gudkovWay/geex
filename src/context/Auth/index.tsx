import { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isAuthOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useAuthModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Проведи провайдер');
  }
  return context;
}

export const ModalProvider = ({ children}: {children: React.ReactNode}) => {
  const [isAuthOpen, setAuthIsOpen] = useState(false);

  const openAuthModal = () => {
    setAuthIsOpen(true);
  }

  const closeAuthModal = () => {
    setAuthIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ isAuthOpen, openAuthModal, closeAuthModal }}>
      {children}
    </ModalContext.Provider>
  );
}

