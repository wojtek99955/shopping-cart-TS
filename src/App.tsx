import { GlobalStyle } from "./assets/globalStyle";
import Header from "./components/Header";
import { ProductsList } from "./components/ProductsList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductsList />
    </>
  );
}

export default App;
