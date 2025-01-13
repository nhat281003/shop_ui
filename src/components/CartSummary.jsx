import { Box, Typography, Button, Divider, Link } from "@mui/material";
const CartSummary = ({ data, onRemove }) => {
  const handleRemove = (id) => {
    onRemove(id);
  };

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
        {data.map((item, index) => (
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
              src={item?.productDetail?.info?.url_image}
              alt={item?.productDetail?.info?.title}
              style={{
                width: 60,
                height: 60,
                borderRadius: 4,
                marginRight: 16,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item?.productDetail?.info?.name}
              </Typography>
              {item?.productDetail?.info?.description && (
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {item?.productDetail?.info?.description}
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
                <Typography variant="body2">
                  {item?.productDetail?.info?.price}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => handleRemove(item?.productDetail?.info?._id)}
              sx={{
                alignSelf: "center",
                position: "absolute",
                top: 0,
                right: 0,
              }}
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
            {/* US${subtotal} */}
          </Typography>
        </Box>
      </Box>
    )
  );
};

export default CartSummary;
