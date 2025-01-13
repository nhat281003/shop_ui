import { useEffect, useState } from "react";
import { shopService } from "../services/shopServices";
import { cartService } from "../services/cartServices";
import UserInfo from "../components/UserInfo";
import { Container, Grid2 as Grid, Box } from "@mui/material";
import CartSummary from "../components/CartSummary";
export default function Cart() {
  const [data, setData] = useState(null);
  const getList = async () => {
    const res = await cartService().getList();
    setData(res.data);
  };
  const handleRemove = async (id) => {
    const res = await cartService().remove(id);
    if (res.success) getList();
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <Grid container spacing={3}>
      {data && data.length > 0 ? (
        <>
          <Grid size={{ xs: 12, md: 8 }}>
            <CartSummary data={data} onRemove={(e) => handleRemove(e)} />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <UserInfo onSubmit={(e) => console.log(e)} />
          </Grid>
        </>
      ) : (
        <Box>No items in the cart</Box>
      )}
    </Grid>
  );
}
