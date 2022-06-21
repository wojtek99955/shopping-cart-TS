import { GlobalStyle } from "./assets/globalStyle";
import Header from "./components/Header/Header";
import { ContextProvider } from "./ContextProvider";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Views/Home";
import Checkout from "./components/Checkout/Checkout";
import ProductDetails from "./components/ProductDetails";
import LikedItems from "./components/LikedItems";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<LikedItems />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
