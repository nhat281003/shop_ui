import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
// import CartPage from "./pages/Cart";
import Header from "./layouts/Header";
// import Footer from "./layouts/Footer";
export default function MyApp() {
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}
        </Routes>
      </Container>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
