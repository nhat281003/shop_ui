import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
// import CartPage from "./pages/Cart";
import Header from "./components/Header";
// import Footer from "./components/Footer";
export default function MyApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
