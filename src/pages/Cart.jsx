import { useEffect, useState } from "react";
import { shopService } from "../services/shopServices";
import UserInfo from "../components/UserInfo";
import { Container, Grid2 as Grid, Box } from "@mui/material";
import CartSummary from "../components/CartSummary";
export default function Cart() {
  useEffect(() => {}, []);
  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <CartSummary />
      </Grid>
      <Grid size={4}>
        <UserInfo />
      </Grid>
    </Grid>
  );
}
