import Typography from "@mui/material/Typography";
import {
  Button,
  Container,
  TextField,
  Box,
  CardMedia,
  Link,
} from "@mui/material";
import ButtonHandler from "../components/Button";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { authService } from "../services/authServices";
import baseApiService from "../base_api/api_service";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const [helperTextName, setHelperTextName] = useState("");
  const [helperTextPass, setHelperTextPass] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    if (username === "" || username === null) {
      setErrorName(true);
      setHelperTextName("Username is required");
    } else {
      setErrorName(false);
      setHelperTextName("");
    }

    if (password === "" || password === null) {
      setErrorPass(true);
      setHelperTextPass("Password is required");
      return;
    } else {
      setErrorPass(false);
      setHelperTextPass("");
    }

    if (errorName === false && errorPass === false) {
      // const res = authService().login({
      //   username: username,
      //   password: password,
      // });

      const res = baseApiService.post("/user/login", {
        username: username,
        password: password,
      });

      console.log(res);

      if (res != null) {
        window.location.href = "/";
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

          <Link
            href="/signup"
            target="_blank"
            underline="always"
            fontWeight="bold"
            color="primary"
          >
            Sign Up
          </Link>
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
          onClick={handleSubmit}
        ></ButtonHandler>

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
