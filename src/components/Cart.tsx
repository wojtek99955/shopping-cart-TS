import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
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
export const Cart = () => {
  const ctx = useContext(Context);
  const handleCloseCart = () => {
    ctx?.setOpenCart(false);
  };

  return (
    <>
      {ctx?.openCart ? (
        <Container>
          <CloseIcon onClick={handleCloseCart} />
          <Wrapper>
            <h2>Your Cart</h2>
            {ctx.cartList?.map((item) => {
              return (
                <ItemContainer>
                  <ItemDescription>
                    <h3>{item.title}</h3>
                    <p>{item.price} $</p>
                    <p>{item.amount}</p>
                  </ItemDescription>
                  <Image src={item.image} />
                </ItemContainer>
              );
            })}
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};
