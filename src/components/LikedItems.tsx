import { useContext, useEffect } from "react";
import { Context } from "../ContextProvider";
import styled from "styled-components";

const Container = styled.section`
  padding-top: 5rem;
  max-width: 1200px;
  margin: auto;

  h1 {
    text-align: center;
  }

  img {
    width: 10rem;
  }
`;

const ItemContainer = styled.div``;

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
            </ItemContainer>
          );
        })}
      </>
    </Container>
  );
};

export default LikedItems;
