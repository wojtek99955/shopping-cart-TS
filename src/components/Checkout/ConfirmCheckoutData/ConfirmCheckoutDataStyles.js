import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../assets/media";

export const DataContainer = styled.div`
  box-shadow: 0px 0px 24px -15px rgba(66, 68, 90, 1);
  border-radius: 15px;
  padding: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.6rem;
  }
  hr {
    margin-bottom: 1.2rem;
  }
`;

export const Data = styled.div`
  padding-top: 2rem;
  margin: auto;
  padding-bottom: 3rem;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
    column-gap: 2rem;
  }
`;
export const UserData = styled.div``;
export const Address = styled.div``;
export const Shipping = styled.div``;
export const Payment = styled.div``;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const CartItems = styled.div``;
export const ItemContainer = styled.div`
  img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
  }
  strong {
    font-size: 1.2rem;
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1rem;
    &:first-child {
      font-weight: 600;
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const StyledButton = styled.button`
  background-color: #00d0a9;
  border: none;
  border-radius: 15px;
  padding: 1rem 3.6rem;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #008970;
  }
`;

export const TotalCost = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  max-width: 18rem;
  margin-left: auto;
  span {
    text-align: end;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
  }
  strong {
    font-size: 1.2rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const UpdateBtn = styled.button`
  display: block;
  height: 1rem;
  border: none;
  background-color: transparent;
  width: 3rem;
  height: 1.6rem;
  color: #00d0a9;
  font-size: 1rem;
  cursor: pointer;
  &:active {
    background-color: rgb(0, 208, 169, 0.2);
  }
`;
export const DataDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardData = styled.div`
  display: flex;
  flex-direction: column;
`;
