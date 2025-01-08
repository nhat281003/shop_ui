import CardItem from "../components/CardItem";
import { Grid2 as Grid } from "@mui/material";
export default function Home() {
  return (
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
  );
}
