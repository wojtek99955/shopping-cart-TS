import { useState, useEffect } from "react";
import styled from "styled-components";
import { Product } from "./Product";

const Container = styled.section`
  max-width: 1000px;
  margin: auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  padding: 5rem 0;
`;

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
  return (
    <Container>
      {productsList.map((product) => {
        return <Product product={product} />;
      })}
    </Container>
  );
};
