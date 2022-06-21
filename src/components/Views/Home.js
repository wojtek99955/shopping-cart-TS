import Header from "../Header/Header";
import { ProductsList } from "../ProductsList";
import { Cart } from "../Cart/Cart";

const Home = () => {
  return (
    <>
      <ProductsList />
      <Cart />
    </>
  );
};

export default Home;
