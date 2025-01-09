import CardItem from "../components/CardItem";
import { Container, Grid2 as Grid, Box } from "@mui/material";
export default function Home() {
  return (
    <Container>
      <Box
        sx={{
          height: "10px",
        }}
      ></Box>
    
        <h2>Danh sách sản phẩm</h2>

      <Grid container spacing={3}>
        <Grid size={4}>
          <CardItem />
        </Grid>
        <Grid size={4}>
          <CardItem />
        </Grid>
        <Grid size={4}>
          <CardItem />
        </Grid>
        <Grid size={4}>
          <CardItem />
        </Grid>
      </Grid>
    </Container>
  );
}
