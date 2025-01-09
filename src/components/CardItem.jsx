import {
  Card,
  CardMedia,
  Typography,
  Grid2 as Grid,
  Box,
  Divider,
} from "@mui/material";
export default function CardItem({ data }) {
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
        src={data.url_image}
        style={{
          height: 256,
        }}
      />

      <Box sx={{ padding: "16px" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {data.name}
        </Typography>
        <Typography>{data.description}</Typography>
      </Box>
      <Divider sx={{ bgcolor: "black" }} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "16px" }}
      >
        <Typography>{data.price}</Typography>
        <Typography>{data.price}</Typography>
      </Box>
    </Card>
  );
}
