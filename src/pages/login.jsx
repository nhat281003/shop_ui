import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";
import { Box, CardMedia, Link } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import ButtonHandler from "../components/Button";
import React, { useState } from "react";
import { FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { authService } from "../services/authServices";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [notification, setNotification] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    if (username === "" || username === null) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (password === "" || password === null) {
      setErrorPass(true);
      return;
    } else {
      setErrorPass(false);
    }

    if (errorName === false && errorPass === false) {
      const res = await authService().login({
        username: username,
        password: password,
      });

      if (res.success === true) {
        setNotification(res.message);
        handleClick();
        Cookies.set("token", res.data.token, { expires: 7 });

        setTimeout(() => {
          window.location.href = "/";
        }, 1000); // 2000ms = 2 giây
      } else {
        setNotification(res.message);
        handleClick();
      }
    }
  };

  const setValueName = (event) => {
    setUsername(event.target.value);
  };

  const setValuePass = (event) => {
    setPassword(event.target.value); // Lưu giá trị nhập vào state
  };

  return (
    <Box
      sx={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        // height: "calc(100vh - 96px)",
      }}
    >
      <Box
        sx={{
          alignItems: " center",
          width: "60%",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "90%",
            justifyContent: "space-between",
            marginBottom: "150px",
            flexDirection: "row",
            alignItems: " center",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              "&:hover": {
                color: "red",
              },
            }}
          >
            Shop
          </Typography>
          {/* 
          <Link
            href="/signup"
            target="_blank"
            underline="always"
            fontWeight="bold"
            color="primary"
          >
            Sign Up
          </Link> */}

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              "&:hover": {
                color: "red",
              },
            }}
            onClick={() => {
              window.location.href = "/signup";
            }}
          >
            Sign Up
          </Typography>
        </Box>
        <Typography
          variant="h8"
          component="div"
          sx={{
            textAlign: "start",
            "&:hover": {
              color: "red",
            },
            fontSize: "40px",
          }}
        >
          Log in
        </Typography>

        <FormControl
          sx={{ m: 1, width: "90%" }}
          variant="outlined"
          display="flexible"
        >
          <Typography variant="body1">UserName</Typography>
          <OutlinedInput
            type={"text"}
            onChange={setValueName}
            label="UserName"
            error={errorName}
          />
          <Box
            sx={{
              height: "10px",
            }}
          ></Box>
          <Typography variant="body1">Password</Typography>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={setValuePass}
            error={errorPass}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <ButtonHandler
          titleBtn={"Login"}
          width={"90%"}
          backgroundColor={"blue"}
          onClick={handleSubmit}
        ></ButtonHandler>

        <Snackbar
          open={open}
          // anchorOrigin={{"top", "bottom"}}
          position="top right"
          backgroundColor="#f5f5f5"
          autoHideDuration={600}
          onClose={handleClose}
          message={notification}
          // action={action}
        />

        <Box
          sx={{
            height: "100px",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          width: "40%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "pink",
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          src="https://assets.gumroad.com/packs/static/822e112a3b444c69f7ef.png"
          style={{
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}
