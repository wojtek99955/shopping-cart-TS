import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Context } from "../ContextProvider";
import { useContext } from "react";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const StyledHeader = styled.header`
  border-bottom: 1px solid grey;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 2;

  padding: 0.6rem;

  nav {
    display: flex;
    gap: 0.8rem;
  }
`;
const CartIcon = styled(AiOutlineShoppingCart)`
  color: black;
  font-size: 1.8rem;
`;

const HeartIcon = styled(AiOutlineHeart)`
  color: #ff555f;
  font-size: 1.8rem;
  cursor: pointer;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const Container = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ItemCounter = styled.div`
  position: absolute;
  top: -0.5rem;
  color: white;
  right: -1rem;
  background-color: #ff555f;
  font-size: 10px;
  border-radius: 50%;
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
  }
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
    <>
      <StyledHeader>
        <Container>
          <StyledLink to="/">
            <div>Fancy Shop</div>
          </StyledLink>
          <nav>
            <StyledLink to="/favorites">
              <HeartIcon />
            </StyledLink>
            <IconContainer>
              <CartIcon onClick={handleOpenCart} />
              <ItemCounter>
                <p>{allItems}</p>
              </ItemCounter>
            </IconContainer>
          </nav>
        </Container>
      </StyledHeader>
      <Cart />
    </>
  );
};

export default Header;
