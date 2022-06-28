import { useContext, useEffect, useState } from "react";
import { Context } from "../../../ContextProvider";
import { BtnsContainer, Title } from "../assets/atoms/CardsStyles";
import { Products } from "../../../ContextProvider";
import { useNavigate } from "react-router-dom";
import {
  OrderContainer,
  OrderButton,
  Item,
  ItemsContainer,
  ItemDetails,
  Quantity,
  NoItemContainer,
} from "./OrderSummaryStyles";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const OrderSummary = ({ setStep }: Props) => {
  const ctx = useContext(Context);
  const itemNumber = ctx?.cartList.reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);

  const totalSum = ctx?.cartList.reduce((accumulator, object) => {
    return accumulator + object.price * object.amount;
  }, 0);

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

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  let navigate = useNavigate();
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    let timer = setInterval(
      () =>
        ctx?.cartList.length === 0 &&
        counter > 0 &&
        setCounter((prev) => prev - 1),
      1000
    );
    let redirect = setTimeout(
      () => ctx?.cartList.length === 0 && navigate("/"),
      2000
    );

    return () => {
      clearTimeout(redirect);
      clearInterval(timer);
    };
  });

  return (
    <OrderContainer>
      <Title>
        <span>4</span>
        <h1>Order Summary</h1>
      </Title>
      {ctx?.cartList && ctx.cartList.length > 0 ? (
        <>
          <h2>{itemNumber} items in cart</h2>
          <ItemsContainer>
            {ctx.cartList.map((item) => {
              return (
                <Item>
                  <img src={item.image} alt="" />
                  <ItemDetails>
                    <h3>{item.title.slice(0, 15)}...</h3>
                    <Quantity>
                      <button
                        onClick={() => {
                          removeQuantity(item.id);
                        }}
                      >
                        -
                      </button>
                      {item.amount}
                      <button
                        onClick={() => {
                          addQuantity(item);
                        }}
                      >
                        +
                      </button>
                    </Quantity>
                    <h3>${(item.amount * item.price).toFixed(2)}</h3>
                  </ItemDetails>
                </Item>
              );
            })}
          </ItemsContainer>
          <h4>Order Total: $ {totalSum?.toFixed(2)}</h4>
        </>
      ) : (
        <NoItemContainer>
          <h3>There is no items</h3>
          <p>Redirecting to the shop</p>
          <p>{counter}</p>
        </NoItemContainer>
      )}
      <BtnsContainer>
        <button onClick={handlePrevStep}>prev</button>
        <button onClick={handleNextStep} disabled={ctx?.cartList.length === 0}>
          next
        </button>
      </BtnsContainer>
    </OrderContainer>
  );
};

export default OrderSummary;
