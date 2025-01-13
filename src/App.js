import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./pages/Cart";
import BlankLayout from "./layouts/blank";
import DefaultLayout from "./layouts/default";
import DetailProduct from "./pages/DetailProduct";
export default function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BlankLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
