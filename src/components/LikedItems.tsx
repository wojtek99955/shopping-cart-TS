import { useContext, useEffect } from "react";
import { Context } from "../ContextProvider";
import styled from "styled-components";

const Container = styled.section`
  padding-top: 5rem;
  max-width: 800px;
  margin: auto;

  h1 {
    text-align: center;
    padding: 1rem 0;
  }

  img {
    width: 12rem;
    height: 12rem;
    object-fit: cover;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  gap: 2rem;
`;

const ItemDescription = styled.div`
  h3 {
    margin-bottom: 2rem;
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
              </ItemDescription>
            </ItemContainer>
          );
        })}
      </>
    </Container>
  );
};

export default LikedItems;
