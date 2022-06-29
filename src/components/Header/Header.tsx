import { Context } from "../../ContextProvider";
import { useContext } from "react";
import { Cart } from "../Cart/Cart";
import {
  StyledHeader,
  CartIcon,
  HeartIcon,
  IconContainer,
  Container,
  StyledLink,
  ItemCounter,
} from "./HeaderStyles";

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
            <IconContainer onClick={handleOpenCart}>
              <CartIcon />
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
