import { Box, Typography, Button, Divider, Link } from "@mui/material";
const CartSummaryHistory = ({ data }) => {
  const total = data.items.reduce((total, item) => total + item.price, 0);

  return (
    data && (
      <Box
        sx={{
          p: 2,
          border: "1px solid #ccc",
          borderRadius: 2,
          color: "#000",
        }}
      >
        {data.items.map((item, index) => (
          <Box
            key={index}
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            <img
              src={item?.url_image}
              alt={item?.title}
              style={{
                width: 60,
                height: 60,
                borderRadius: 4,
                marginRight: 16,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item?.name}
              </Typography>
              {item?.description && (
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {item?.description}
                </Typography>
              )}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Typography variant="body2">{item?.price}</Typography>
              </Box>
            </Box>
          </Box>
        ))}

        <Divider sx={{ mb: 2, borderColor: "#ddd" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            US${total}
          </Typography>
        </Box>
      </Box>
    )
  );
};

export default CartSummaryHistory;
