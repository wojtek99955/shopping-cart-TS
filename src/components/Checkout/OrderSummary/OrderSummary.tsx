import { useContext } from "react";
import { Context } from "../../../ContextProvider";
import { Title } from "../assets/atoms/CardsStyles";
import { Products } from "../../../ContextProvider";
import {
  OrderContainer,
  OrderButton,
  Item,
  ItemsContainer,
  ItemDetails,
  Quantity,
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

  return (
    <OrderContainer>
      <Title>
        <span>4</span>
        <h1>Order Summary</h1>
      </Title>
      <h2>{itemNumber} items in cart</h2>
      <ItemsContainer>
        {ctx?.cartList.map((item) => {
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
      <OrderButton onClick={handleNextStep}>Place Order</OrderButton>
    </OrderContainer>
  );
};

export default OrderSummary;
