import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Products } from "../ContextProvider";
import { Product } from "./Product";

const Container = styled.div`
  padding-top: 8rem;
  max-width: 800px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  img {
    width: 20rem;
  }

  h1 {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-bottom: 3rem;
  }

  p {
    margin-top: 2rem;
  }

  button {
    border: none;
    color: white;
    background-color: #00d0a9;
    padding: 0.8rem 1.4rem;
    cursor: pointer;

    &:hover {
      background-color: #008970;
    }
  }
`;

const DescriptionData = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<Products | null>(null);

  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const products = await response.json();
    setDetails(products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <DescriptionContainer>
        <img src={details?.image} alt={details?.title} />
        <DescriptionData>
          <h1>{details?.title}</h1>
          <h2>$ {details?.price}</h2>
          <h3>Free Returns</h3>
          <button>add to card</button>
        </DescriptionData>
      </DescriptionContainer>
      <p>{details?.description}</p>
    </Container>
  );
};

export default ProductDetails;
