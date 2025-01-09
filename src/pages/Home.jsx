import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import { Container, Grid2 as Grid, Box } from "@mui/material";
import { shopService } from "../services/shopServices";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getListData();
  }, []);
  const getListData = async (params) => {
    const res = await shopService().getList(params);
    setData(res.data);
    console.log(res.data);
  };
  return (
    <Container>
      <Box
        sx={{
          height: "10px",
        }}
      ></Box>

      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid size={4} key={index}>
            <CardItem data={item.info} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
