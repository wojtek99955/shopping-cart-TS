import { useEffect, useContext } from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { Context } from "../ContextProvider";
import { Products } from "../ContextProvider";

const Container = styled.section`
  max-width: 1000px;
  margin: auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  padding: 5rem 0;
`;

export const ProductsList: React.FC = () => {
  const ctx = useContext(Context);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    ctx?.setProductsList(
      products.map((item: Products) => {
        return {
          ...item,
          amount: 0,
        };
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(ctx?.productsList);

  return (
    <Container>
      {ctx?.productsList?.map((product) => (
        <Product product={product} />
      ))}
    </Container>
  );
};
