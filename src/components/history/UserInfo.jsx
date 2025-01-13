import { TextField, Button, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const UserInfoHistory = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "1px solid #ccc",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Infomation
      </Typography>

      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={data.phoneNumber}
        fullWidth
        disabled
      />

      <TextField
        label="Address"
        name="address"
        value={data.address}
        fullWidth
        disabled
      />
    </Box>
  );
};

export default UserInfoHistory;
