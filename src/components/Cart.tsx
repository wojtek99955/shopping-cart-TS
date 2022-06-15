import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Products } from "../ContextProvider";
import { Link } from "react-router-dom";

const Container = styled.section`
  position: fixed;
  height: 100vh;
  width: 500px;
  top: 0;
  right: 0;
  background-color: white;
  overflow: scroll;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;
const Wrapper = styled.div`
  padding: 2rem;
`;
const CloseIcon = styled(AiOutlineCloseCircle)`
  font-size: 2rem;
  color: black;
  margin-left: auto;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;
const ItemDescription = styled.div`
  p {
    margin-top: 2rem;
  }
`;
const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
`;

const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 10rem;
  margin-top: 2rem;

  p {
    margin: 0;
  }
`;
const QuantityBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #00d0a9;
  color: white;
  &:hover {
    background-color: #008970;
  }
  &:disabled {
    background-color: #d2fff6;
  }
`;

const CheckoutBtn = styled.button`
  display: block;
  margin: auto;
  width: 7rem;
  height: 2.5rem;
  background-color: #00d0a9;
  border: none;
  text-transform: uppercase;
  border-radius: 12px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #008970;
  }
`;

const TotalSum = styled.h3`
  text-align: right;
  padding: 2rem 0;
`;

const Divider = styled.hr`
  height: 1px;
  background-color: grey;
`;

const NoItemContainer = styled.div`
  padding: 2rem;

  h3 {
  }
`;

const Title = styled.h2`
  padding: 2rem;
`;

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

  const removeQuantity = (clickedItem: Products) => {
    ctx?.setCartList((prev) => {
      const findItem = prev.find((item) => item.id === clickedItem.id);
      if (findItem) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? {
                ...item,
                amount: item.amount - 1,
              }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
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
                            removeQuantity(item);
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
              <Link to="/checkout">
                <CheckoutBtn>checkout</CheckoutBtn>
              </Link>
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
