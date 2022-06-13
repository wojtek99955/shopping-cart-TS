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
`;
const Wrapper = styled.div``;
const CloseIcon = styled(AiOutlineCloseCircle)`
  font-size: 2rem;
  color: black;
  margin-left: auto;
  position: absolute;
  right: 1rem;
  top: 1rem;
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
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};
