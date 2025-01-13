import { Box, Typography, Button, Divider, Link } from "@mui/material";
import { useState } from "react";
const CartSummary = () => {
  const [items, setItems] = useState([
    {
      title: "[FIFA-FC] Adriano",
      subtitle: "gabri facemaker",
      price: 102.42,
      qty: 1,
      image: "https://public-files.gumroad.com/itoecbcbfvmur6gb4z0oi1axt3p8", // Example image URL
    },
    {
      title: "PES Master Plus",
      subtitle: "PES Master",
      price: 15.36,
      qty: 1,
      details: "Tier: Basic | Membership: Yearly",
      image: "https://public-files.gumroad.com/itoecbcbfvmur6gb4z0oi1axt3p8", // Example image URL
    },
  ]);

  const handleRemove = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  const subtotal = items
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        color: "#000",
      }}
    >
      {items.map((item, index) => (
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
            src={item.image}
            alt={item.title}
            style={{ width: 60, height: 60, borderRadius: 4, marginRight: 16 }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              {item.subtitle}
            </Typography>
            {item.details && (
              <Typography variant="body2" sx={{ color: "#555" }}>
                {item.details}
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Typography variant="body2">Qty: {item.qty}</Typography>
              <Typography variant="body2">
                US${item.price.toFixed(2)}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleRemove(index)}
            sx={{ alignSelf: "center", position: "absolute", top: 0, right: 0 }}
          >
            Remove
          </Button>
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
          Subtotal
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          US${subtotal}
        </Typography>
      </Box>
    </Box>
  );
};

export default CartSummary;
