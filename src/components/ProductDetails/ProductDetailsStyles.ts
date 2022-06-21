import styled from "styled-components";
import { device } from "../../assets/media";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface StyleProps {
  loading: boolean;
}

export const Container = styled.div<StyleProps>`
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

export const DescriptionData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }
`;

export const Loading = styled.h1`
  text-align: center;
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  color: white;
  font-size: 1.2rem;
`;
