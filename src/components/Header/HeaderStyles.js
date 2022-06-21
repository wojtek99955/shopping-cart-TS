import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

export const StyledHeader = styled.header`
  border-bottom: 1px solid grey;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 2;

  padding: 0.6rem;

  nav {
    display: flex;
    gap: 0.8rem;
  }
`;
export const CartIcon = styled(AiOutlineShoppingCart)`
  color: black;
  font-size: 1.8rem;
`;

export const HeartIcon = styled(AiOutlineHeart)`
  color: #ff555f;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Container = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0.5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ItemCounter = styled.div`
  position: absolute;
  top: -0.5rem;
  color: white;
  right: -1rem;
  background-color: #ff555f;
  font-size: 10px;
  border-radius: 50%;
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
  }
`;
