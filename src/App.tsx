import { GlobalStyle } from "./assets/globalStyle";
import Header from "./components/Header";
import { ContextProvider } from "./ContextProvider";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Views/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
