import { useEffect, useContext, useState } from "react";
import { Product } from "../Product/Product";
import { Context } from "../../ContextProvider";
import { Products } from "../../ContextProvider";
import LoadingSpinner from "../../assets/LoadingSpinner";
import Filter from "../Filter/Filter";
import { Container, Wrapper } from "./ProductsListStyle";

export const ProductsList: React.FC = () => {
  const ctx = useContext(Context);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    ctx?.setProductsList(
      products.map((item: Products) => {
        return {
          ...item,
          amount: 0,
          liked: false,
        };
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <p>fefe</p>
      <Filter loading={loading} setLoading={setLoading} />
      <Container loading={loading}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {ctx?.productsList?.map((product) => (
              <Product product={product} />
            ))}
          </>
        )}
      </Container>
    </Wrapper>
  );
};
