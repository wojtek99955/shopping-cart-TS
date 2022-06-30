import { useContext, useEffect } from "react";
import { Context } from "../../ContextProvider";
import { Container, ItemContainer, ItemDescription } from "./LikedItemsStyles";

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
