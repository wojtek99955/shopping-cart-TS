import styled from "styled-components";
import { device } from "../../assets/media";

export const Container = styled.section`
  padding: 5rem 1rem;
  max-width: 700px;
  margin: auto;

  h1 {
    text-align: center;
    padding: 1rem 0;
  }

  img {
    width: 10rem;
    display: block;
    object-fit: fill;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 3rem;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 2rem;
  }
  button {
    margin: 2rem;
    border: none;
    background-color: #00d0a9;
    padding: 1rem;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #008970;
    }
  }
`;
