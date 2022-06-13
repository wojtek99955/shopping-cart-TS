import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
  return (
    <StyledHeader>
      <div>Fancy Shop</div>
      <CartIcon />
    </StyledHeader>
  );
};

export default Header;
