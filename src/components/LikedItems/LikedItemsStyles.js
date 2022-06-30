import styled from "styled-components";

export const Container = styled.section`
  padding-top: 5rem;
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
  justify-content: space-between;
  margin: 2rem 0;
  gap: 3rem;
  align-items: center;
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
