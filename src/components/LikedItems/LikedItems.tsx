import React, { useContext, useEffect } from "react";
import { Context } from "../../ContextProvider";
import {
  Container,
  ItemContainer,
  ItemDescription,
  StyledLink,
} from "./LikedItemsStyles";
import { Products } from "../../ContextProvider";

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
  const handleAddToCard = (clickedItem: Products, e: React.MouseEvent) => {
    e.stopPropagation();
    ctx?.setCartList((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  return (
    <Container>
      <>
        <h1>Your Favorites!</h1>
        {ctx?.likedItem?.map((item) => {
          return (
            <ItemContainer>
              <StyledLink to={`/product/${item.id}`}>
                <img src={item.image} alt="" />
              </StyledLink>
              <ItemDescription>
                <StyledLink to={`/product/${item.id}`}>
                  <h3>{item.title}</h3>
                </StyledLink>
                <p>{item.description}</p>
                <button onClick={(e) => handleAddToCard(item, e)}>
                  Add to cart
                </button>
              </ItemDescription>
            </ItemContainer>
          );
        })}
      </>
    </Container>
  );
};

export default LikedItems;
