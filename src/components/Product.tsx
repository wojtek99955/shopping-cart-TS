import React, { useContext } from "react";
import styled from "styled-components";
import { Context, Products } from "../ContextProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";

interface Props {
  product: {
    category: string;
    title: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Object;
    amount: number;
  };
}

const Image = styled.img`
  height: 11rem;
  width: 11rem;
  object-fit: contain;
  display: block;
  margin: auto;
`;

const Container = styled.div`
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 1rem;
  transition: transform 100ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemName = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  margin: 2rem 0;
`;

const Price = styled.h3`
  text-align: center;
`;

const Button = styled.button`
  display: block;
  margin: auto;
  background-color: #00d0a9;
  border: none;
  padding: 10px 25px;
  border-radius: 12px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #008970;
  }
`;

export const Product: React.FC<Props> = ({ product }) => {
  const ctx = useContext(Context);
  const handleAddToCard = (clickedItem: Products, e: MouseEvent) => {
    e.stopPropagation();
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
  let navigate = useNavigate();
  const showDetails = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <Container onClick={showDetails}>
      <Image src={product.image} alt={product.title} />
      <ItemName>{product.title}</ItemName>
      <Price>{product.price} $</Price>
      <Button onClick={(e) => handleAddToCard(product, e)}>Add to cart</Button>
    </Container>
  );
};
