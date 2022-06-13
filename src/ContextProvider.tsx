import { useState, createContext } from "react";

type ContextType = {
  children: React.ReactNode;
};

type openCartType = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<openCartType | null>(null);
export const ContextProvider = ({ children }: ContextType) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <Context.Provider value={{ openCart, setOpenCart }}>
      {children}
    </Context.Provider>
  );
};
