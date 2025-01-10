import {
  Card,
  CardMedia,
  Typography,
  Grid2 as Grid,
  Box,
  Divider,
} from "@mui/material";
export default function CardItem({ data, handleClick }) {
  return (
    <Card
      onClick={handleClick(data.id)}
      style={{
        border: "1px solid black",
        overflow: "hidden",
      }}
      className="item-other"
    >
      <CardMedia
        component="img"
        src={data.info.url_image}
        style={{
          height: 260,
        }}
      />

      <Box sx={{ padding: "16px" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {data.info.name}
        </Typography>
        <Typography>{data.info.description}</Typography>
        {/* <Typography>{data.category.categoryName}</Typography> */}
      </Box>
      <Divider sx={{ bgcolor: "black" }} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "16px" }}
      >
        <Typography>{data.info.price}</Typography>
        <Typography>SL: {data.info.stock || "0"}</Typography>
      </Box>
    </Card>
  );
}
