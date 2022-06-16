import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Products } from "../ContextProvider";

const Container = styled.div`
  padding-top: 20rem;
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
      <p>{details?.title}</p>
    </Container>
  );
};

export default ProductDetails;
