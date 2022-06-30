import { useContext, useEffect } from "react";
import { Context } from "../ContextProvider";
import styled from "styled-components";

const Container = styled.section`
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

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  gap: 3rem;
  align-items: center;
`;

const ItemDescription = styled.div`
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

const LikedItems = () => {
  const ctx = useContext(Context);

  useEffect(() => {
    const likedItems = ctx?.productsList.filter((item) => {
      return item.liked === true;
    });
    const allLikedItems = [...likedItems!, ...ctx?.likedItem!];
    if (ctx?.likedItem) {
      ctx.setLikedItem(allLikedItems);
    }
  }, []);
  return (
    <Container>
      <>
        <h1>Your Favorites!</h1>
        {ctx?.likedItem?.map((item) => {
          return (
            <ItemContainer>
              <img src={item.image} alt="" />
              <ItemDescription>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button>Add To Cart</button>
              </ItemDescription>
            </ItemContainer>
          );
        })}
      </>
    </Container>
  );
};

export default LikedItems;
