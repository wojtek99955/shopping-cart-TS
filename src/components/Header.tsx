import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Context } from "../ContextProvider";
import { useContext } from "react";

const StyledHeader = styled.header`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;
`;
const CartIcon = styled(AiOutlineShoppingCart)`
  color: blue;
  font-size: 30px;
`;

const Header: React.FC = () => {
  const ctx = useContext(Context);
  const handleOpenCart = () => {
    ctx?.setOpenCart((prev) => !prev);
  };
  console.log(ctx?.openCart);
  return (
    <StyledHeader>
      <div>Fancy Shop</div>
      <CartIcon onClick={handleOpenCart} />
    </StyledHeader>
  );
};

export default Header;
