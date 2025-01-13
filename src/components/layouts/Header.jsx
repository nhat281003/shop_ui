import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function Header() {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
          borderBottom: "1px solid black",
          height: "96px",
          color: "black",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Shop
          </Typography>
          {token ? (
            <Button
              sx={{
                backgroundColor: "#f5f5f5",
                border: "1px solid black",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              color="inherit"
              onClick={() => {
                window.location.href = "/cart";
              }}
              className="item-other"
            >
              Cart
            </Button>
          ) : (
            <Button
              sx={{
                backgroundColor: "#f5f5f5",
                border: "1px solid black",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              color="inherit"
              onClick={() => {
                window.location.href = "/login";
              }}
              className="item-other"
            >
              Login
            </Button>
          )}
        </Container>
      </AppBar>
    </Box>
  );
}
