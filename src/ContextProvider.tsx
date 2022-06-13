import { useState, createContext } from "react";

type ContextType = {
  children: React.ReactNode;
};

export type Products = {
  category: string;
  title: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Object;
  amount: number;
};

type openCartType = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  productsList: Products[] | null;
  setProductsList: React.Dispatch<React.SetStateAction<Products[] | null>>;
  cartList: Products[];
  setCartList: React.Dispatch<React.SetStateAction<Products[]>>;
};

export const Context = createContext<openCartType | null>(null);
export const ContextProvider = ({ children }: ContextType) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [productsList, setProductsList] = useState<Products[] | null>(null);
  const [cartList, setCartList] = useState<Array<Products>>([]);
  return (
    <Context.Provider
      value={{
        openCart,
        setOpenCart,
        productsList,
        setProductsList,
        cartList,
        setCartList,
      }}
    >
      {children}
    </Context.Provider>
  );
};
