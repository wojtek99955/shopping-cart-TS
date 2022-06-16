import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingSpinner from "../assets/LoadingSpinner";
import { Products } from "../ContextProvider";
import { Context } from "../ContextProvider";

interface StyleProps {
  loading: boolean;
}

const Container = styled.div<StyleProps>`
  padding-top: 8rem;
  max-width: 800px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  height: ${({ loading }) => (loading ? "100vh" : null)};
  display: ${({ loading }) => (loading ? "flex" : "block")};
  justify-content: center;
  align-items: center;

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

const Loading = styled.h1`
  text-align: center;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<Products>({
    category: "string",
    title: "string",
    description: "string",
    id: 0,
    image: "string",
    price: 0,
    rating: {},
    amount: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const products = await response.json();
    setDetails(products);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const ctx = useContext(Context);
  const handleAddToCart = (clickedItem: Products) => {
    ctx?.setCartList((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  return (
    <Container loading={loading}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <DescriptionContainer>
            <img src={details?.image} alt={details?.title} />
            <DescriptionData>
              <h1>{details?.title}</h1>
              <h2>$ {details?.price}</h2>
              <h3>Free Returns</h3>
              <button onClick={() => handleAddToCart(details)}>
                add to card
              </button>
            </DescriptionData>
          </DescriptionContainer>
          <p>{details?.description}</p>
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
