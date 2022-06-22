import React, { useContext, useState } from "react";
import { Context, Products } from "../../ContextProvider";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import {
  Image,
  Container,
  ItemName,
  Price,
  Button,
  HeartIconContainer,
  OutlineHeart,
  FilledHeart,
} from "./ProductStyles";

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
