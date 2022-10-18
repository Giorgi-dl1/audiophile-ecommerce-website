import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import CategoryScreen from "./screens/CategoryScreen";
import ProductScreen from "./screens/ProductScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="App" id="scroller">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryScreen />} />
          <Route path="/product/:id/:redirect" element={<ProductScreen />} />
          <Route path="/checkout/:redirect" element={<CheckoutScreen />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
