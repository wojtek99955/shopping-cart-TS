import styled from "styled-components";

export const OrderContainer = styled.div`
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 1rem;

  h2 {
    font-weight: 400;
    font-size: 0.9rem;
    margin: 1rem 0;
    text-transform: uppercase;
    color: grey;

    &:last-of-type {
      color: black;
    }
  }
  h4 {
    font-size: 1.5rem;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;

  img {
    width: 7.5rem;
  }
`;

export const ItemsContainer = styled.div`
  overflow-y: scroll;
  max-height: 35rem;
  margin-bottom: 1rem;
`;

export const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  button {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: none;
    color: white;
    background-color: #00d0a9;
    cursor: pointer;

    &:hover {
      background-color: #008970;
    }
  }
`;

export const NoItemContainer = styled.div`
  h3 {
    text-align: center;
    padding: 2rem 0;
  }
  p {
    text-align: center;
  }
`;
