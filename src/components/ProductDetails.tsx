import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingSpinner from "../assets/LoadingSpinner";
import { Products } from "../ContextProvider";
import { Context } from "../ContextProvider";
import { device } from "../assets/media";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface StyleProps {
  loading: boolean;
}

const Container = styled.div<StyleProps>`
  padding-top: 8rem;
  max-width: 800px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;

  img {
    width: 20rem;
    display: block;
    margin: auto;
  }

  h1 {
    margin: 2rem 0;
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
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

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
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }
`;

const Loading = styled.h1`
  text-align: center;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  color: white;
  font-size: 1.2rem;
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
    liked: false,
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
                <CartIcon />
                add to cart
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
