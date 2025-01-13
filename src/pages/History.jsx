import { useEffect, useState } from "react";
import { shopService } from "../services/shopServices";
import { cartService } from "../services/cartServices";
import UserInfoHistory from "../components/history/UserInfo";
import { Container, Grid2 as Grid, Box, Divider } from "@mui/material";
import CartSummaryHistory from "../components/history/CartSummary";
export default function Cart() {
  const [data, setData] = useState(null);
  const getList = async () => {
    const res = await cartService().history();
    console.log(res.orders);
    setData(res.orders);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <Grid container spacing={3}>
      {data && data.length > 0 ? (
        data.map((order, index) => (
          <>
            <Grid size={{ xs: 12, md: 8 }}>
              <CartSummaryHistory data={order} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <UserInfoHistory data={order} />
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
          </>
        ))
      ) : (
        <Box>No items in the cart</Box>
      )}
    </Grid>
  );
}
