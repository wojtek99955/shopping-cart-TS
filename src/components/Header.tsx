import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Context } from "../ContextProvider";
import { useContext } from "react";

const StyledHeader = styled.header`
  border-bottom: 1px solid grey;
  position: fixed;
  width: 100%;
  background-color: white;

  padding: 0.6rem;
`;
const CartIcon = styled(AiOutlineShoppingCart)`
  color: black;
  font-size: 30px;
`;
const IconContainer = styled.div`
  position: relative;
  cursor: pointer;

  p {
    position: absolute;
    top: -0.5rem;
    color: red;
    right: -1rem;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0.5rem;
`;

const Header: React.FC = () => {
  const ctx = useContext(Context);
  const handleOpenCart = () => {
    ctx?.setOpenCart((prev) => !prev);
  };
  console.log(ctx?.openCart);
  const allItems = ctx?.cartList.reduce((acc, obj) => {
    return acc + obj.amount;
  }, 0);
  return (
    <StyledHeader>
      <Container>
        <div>Fancy Shop</div>
        <IconContainer>
          <CartIcon onClick={handleOpenCart} />
          <p>{allItems}</p>
        </IconContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
