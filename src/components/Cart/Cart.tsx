import { useContext } from "react";
import { Context } from "../../ContextProvider";
import { Products } from "../../ContextProvider";
import {
  Container,
  Wrapper,
  CloseIcon,
  ItemContainer,
  ItemDescription,
  Image,
  QuantityContainer,
  QuantityBtn,
  CheckoutBtn,
  TotalSum,
  Divider,
  NoItemContainer,
  Title,
  StyledLink,
} from "./CartStyles";

export const Cart = () => {
  const ctx = useContext(Context);
  const handleCloseCart = () => {
    ctx?.setOpenCart(false);
  };

  const addQuantity = (clickedItem: Products) => {
    ctx?.setCartList((prev) => {
      const findItem = prev.find((item) => item.id === clickedItem.id);
      if (findItem) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const removeQuantity = (id: number) => {
    ctx?.setCartList((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as Products[])
    );
  };

  const totalSum = ctx?.cartList.reduce((accumulator, object) => {
    return accumulator + object.price * object.amount;
  }, 0);

  return (
    <>
      {ctx?.openCart ? (
        <Container>
          <Title>Your Cart</Title>
          <CloseIcon onClick={handleCloseCart} />
          {ctx.cartList.length > 0 ? (
            <Wrapper>
              {ctx.cartList?.map((item) => {
                return (
                  <ItemContainer>
                    <ItemDescription>
                      <h3>{item.title}</h3>
                      <p>Price: ${(item.amount * item.price).toFixed(2)} </p>
                      <QuantityContainer>
                        <QuantityBtn
                          onClick={() => {
                            removeQuantity(item.id);
                          }}
                          disabled={item.amount === 0}
                        >
                          -
                        </QuantityBtn>
                        <p>{item.amount}</p>
                        <QuantityBtn
                          onClick={() => {
                            addQuantity(item);
                          }}
                        >
                          +
                        </QuantityBtn>
                      </QuantityContainer>
                    </ItemDescription>
                    <Image src={item.image} />
                  </ItemContainer>
                );
              })}
              <Divider />
              <TotalSum>TOTAL: ${totalSum?.toFixed(2)} </TotalSum>
              <StyledLink to="/checkout">
                <CheckoutBtn onClick={() => ctx.setOpenCart(false)}>
                  checkout
                </CheckoutBtn>
              </StyledLink>
            </Wrapper>
          ) : (
            <NoItemContainer>
              <h3>No item here</h3>
            </NoItemContainer>
          )}
        </Container>
      ) : null}
    </>
  );
};
