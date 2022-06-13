import { GlobalStyle } from "./assets/globalStyle";
import { Cart } from "./components/Cart";
import Header from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { ContextProvider } from "./ContextProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <Header />
        <ProductsList />
        <Cart />
      </ContextProvider>
    </>
  );
}

export default App;
