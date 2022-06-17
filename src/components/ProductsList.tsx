import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { Context } from "../ContextProvider";
import { Products } from "../ContextProvider";
import LoadingSpinner from "../assets/LoadingSpinner";
import Filter from "./Filter";

interface StyleProps {
  loading: boolean;
}

const Container = styled.div<StyleProps>`
  max-width: 1000px;
  margin: auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8rem 0;
  height: ${({ loading }) => (loading ? "100vh" : null)};
  display: ${({ loading }) => (loading ? "flex" : "grid")};
  justify-content: center;
  align-items: ${({ loading }) => (loading ? "center" : "none")};
`;

const Wrapper = styled.section`
  display: flex;
  max-width: 1300px;
  margin: auto;
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
          liked: false,
        };
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <p>fefe</p>
      <Filter />
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
    </Wrapper>
  );
};
