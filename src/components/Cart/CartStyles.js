import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Container = styled.section`
  position: fixed;
  height: 100vh;
  width: 500px;
  top: 0;
  right: 0;
  background-color: white;
  overflow: scroll;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  z-index: 3;
`;
export const Wrapper = styled.div`
  padding: 2rem;
`;
export const CloseIcon = styled(AiOutlineCloseCircle)`
  font-size: 2rem;
  color: black;
  margin-left: auto;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;
export const ItemDescription = styled.div`
  p {
    margin-top: 2rem;
  }
`;
export const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 10rem;
  margin-top: 2rem;

  p {
    margin: 0;
  }
`;
export const QuantityBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #00d0a9;
  color: white;
  &:hover {
    background-color: #008970;
  }
  &:disabled {
    background-color: #d2fff6;
  }
`;

export const CheckoutBtn = styled.button`
  display: block;
  margin: auto;
  width: 7rem;
  height: 2.5rem;
  background-color: #00d0a9;
  border: none;
  text-transform: uppercase;
  border-radius: 12px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #008970;
  }
`;

export const TotalSum = styled.h3`
  text-align: right;
  padding: 2rem 0;
`;

export const Divider = styled.hr`
  height: 1px;
  background-color: grey;
`;

export const NoItemContainer = styled.div`
  padding: 2rem;

  h3 {
  }
`;

export const Title = styled.h2`
  padding: 2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
