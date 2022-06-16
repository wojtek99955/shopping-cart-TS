import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { Context } from "../ContextProvider";
import { Products } from "../ContextProvider";
import LoadingSpinner from "../assets/LoadingSpinner";

interface StyleProps {
  loading: boolean;
}

const Container = styled.section<StyleProps>`
  max-width: 1000px;
  margin: auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8rem 0;
  height: ${({ loading }) => (loading ? "100vh" : null)};
  display: ${({ loading }) => (loading ? "flex" : "grid")};
  justify-content: center;
  align-items: center;
`;

export const ProductsList: React.FC = () => {
  const ctx = useContext(Context);
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(ctx?.productsList);

  return (
    <Container loading={loading}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {ctx?.productsList?.map((product) => (
            <Product product={product} />
          ))}
        </>
      )}
    </Container>
  );
};
