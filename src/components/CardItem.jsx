import {
  Card,
  CardMedia,
  Typography,
  Grid2 as Grid,
  Box,
  Divider,
} from "@mui/material";
export default function CardItem() {
  return (
    <Card
      style={{
        border: "1px solid black",
        overflow: "hidden",
      }}
      className="item-other"
    >
      <CardMedia
        component="img"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        style={{
          height: 256,
        }}
      />

      <Box sx={{ padding: "16px" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          hehe
        </Typography>
        <Typography>des</Typography>
      </Box>
      <Divider sx={{ bgcolor: "black" }} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "16px" }}
      >
        <Typography>100$</Typography>
      </Box>
    </Card>
  );
}
