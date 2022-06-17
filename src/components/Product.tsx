import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context, Products } from "../ContextProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

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
    liked: boolean;
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
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemName = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin: 2rem 0;
  font-weight: 600;
`;

const Price = styled.h3`
  text-align: center;
  margin-bottom: 3rem;
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
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -1rem);

  &:hover {
    background-color: #008970;
  }
`;
const HeartIconContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;
const OutlineHeart = styled(AiOutlineHeart)`
  font-size: 1.5rem;
  color: #ff555f;
`;

const FilledHeart = styled(AiFillHeart)`
  font-size: 1.5rem;
  color: #ff555f;
`;

export const Product: React.FC<Props> = ({ product }) => {
  const ctx = useContext(Context);
  const [heartHovered, setHeartHovered] = useState(false);

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

  const handleLike = (clickedItem: Products, e: MouseEvent) => {
    e.stopPropagation();
    ctx?.setProductsList((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, liked: !item.liked } : item
        );
      }
      return [...prev];
    });
    console.log(clickedItem.liked);
  };

  let navigate = useNavigate();
  const showDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Container onClick={showDetails}>
      <HeartIconContainer
        onMouseEnter={() => setHeartHovered(true)}
        onMouseLeave={() => setHeartHovered(false)}
        onClick={(e) => {
          handleLike(product, e);
        }}
      >
        {heartHovered || product.liked ? <FilledHeart /> : <OutlineHeart />}
      </HeartIconContainer>
      <Image src={product.image} alt={product.title} />
      <ItemName>{product.title.slice(0, 35)}...</ItemName>
      <Price>{product.price} $</Price>
      <Button onClick={(e) => handleAddToCard(product, e)}>Add to cart</Button>
    </Container>
  );
};
