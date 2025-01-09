import { Container } from "@mui/material";
import Header from "../components/layouts/Header";
import { Outlet } from "react-router-dom";

// import CartPage from "./pages/Cart";
// import Footer from "./layouts/Footer";
export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <Container sx={{ py: 3 }}>
        <Outlet />
      </Container>
      {/* <Footer /> */}
    </div>
  );
}
