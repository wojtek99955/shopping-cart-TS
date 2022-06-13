import { useState, useEffect } from "react";

export const ProductsList: React.FC = () => {
  const [productsList, setProductsList] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setProductsList(products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(productsList);
  return <div>ProductsList</div>;
};
