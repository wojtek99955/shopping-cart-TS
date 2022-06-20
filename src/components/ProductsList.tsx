import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { Context } from "../ContextProvider";
import { Products } from "../ContextProvider";
import LoadingSpinner from "../assets/LoadingSpinner";
import Filter from "./Filter";
import { device } from "../assets/media";

interface StyleProps {
  loading: boolean;
}

const Container = styled.div<StyleProps>`
  max-width: 1000px;
  margin: auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  padding: 8rem 0;
  display: grid;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;

const Wrapper = styled.section`
  max-width: 1300px;
  margin: auto;

  @media ${device.laptop} {
    display: flex;
  }
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
      <Filter loading={loading} setLoading={setLoading} />
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
