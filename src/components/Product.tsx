import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../ContextProvider";

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
  border: 1px solid grey;
  border-radius: 20px;
  padding: 1rem;
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

  &:hover {
    background-color: #008970;
  }
`;

export const Product: React.FC<Props> = ({ product }) => {
  const ctx = useContext(Context);
  const handleAddToCard = () => {
    ctx?.setCartList([product, ...ctx.cartList]);
  };
  return (
    <Container>
      <Image src={product.image} alt={product.title} />
      <ItemName>{product.title}</ItemName>
      <Price>{product.price}</Price>
      <Button onClick={handleAddToCard}>Add to cart</Button>
    </Container>
  );
};
