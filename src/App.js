import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./pages/Cart";
import History from "./pages/History";
import BlankLayout from "./layouts/blank";
import DefaultLayout from "./layouts/default";
import DetailProduct from "./pages/DetailProduct";
import CreateProduct from "./pages/CreateProduct";
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
          <Route path="/history" element={<History />} />
          <Route path="/createProduct" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
