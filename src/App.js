import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import CategoryScreen from "./screens/CategoryScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryScreen />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
