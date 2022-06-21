import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../assets/LoadingSpinner";
import { Products } from "../../ContextProvider";
import { Context } from "../../ContextProvider";
import {
  Container,
  DescriptionData,
  DescriptionContainer,
  CartIcon,
} from "./ProductDetailsStyles";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<Products>({
    category: "string",
    title: "string",
    description: "string",
    id: 0,
    image: "string",
    price: 0,
    rating: {},
    amount: 0,
    liked: false,
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const products = await response.json();
    setDetails(products);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const ctx = useContext(Context);
  const handleAddToCart = (clickedItem: Products) => {
    ctx?.setCartList((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  return (
    <Container loading={loading}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <DescriptionContainer>
            <img src={details?.image} alt={details?.title} />
            <DescriptionData>
              <h1>{details?.title}</h1>
              <h2>$ {details?.price}</h2>
              <h3>Free Returns</h3>
              <button onClick={() => handleAddToCart(details)}>
                <CartIcon />
                add to cart
              </button>
            </DescriptionData>
          </DescriptionContainer>
          <p>{details?.description}</p>
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
