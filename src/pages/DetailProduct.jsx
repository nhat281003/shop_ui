import {
  Container,
  Box,
  CardMedia,
  Typography,
  Divider,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import ButtonHandler from "../components/Button";
import { AttachMoney, LoyaltyOutlined, Addchart } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { shopService } from "../services/shopServices";
import { cartService } from "../services/cartServices";
import { useEffect, useState } from "react";

export default function DetailProduct() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    getDetailProduct(id);
  }, []);

  const getDetailProduct = async (id) => {
    const res = await shopService().getDetail(id);
    setData(res.data);
  };

  const handleSubmit = async () => {
    const res = await cartService().add({
      product: data._id,
      quantity: 1,
    });
  };

  return data ? (
    <div
      sx={{
        flexDirection: "column",
        display: "flex",
      }}
    >
      <Divider sx={{ bgcolor: "black" }}></Divider>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          width: "100%",
          height: "80px",
        }}
      >
        <Container
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <LoyaltyOutlined style={{ fontSize: 30, color: "orangered" }} />{" "}
          <Typography
            sx={{
              marginLeft: "20px",
              fontSize: 25,
              fontWeight: "bold",
              flexGrow: 1,
            }}
          >
            {data.info.name}
          </Typography>
        </Container>
      </Box>
      <Divider sx={{ bgcolor: "black", marginBottom: "20px" }}></Divider>

      <Container
        sx={{
          justifyContent: "space-between",
          border: "1px solid",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <CardMedia
          component="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDp9xjDfEPD1K1TcFXoxdPsH3W2rfUVQ4zXQ&s"
          style={{
            objectFit: "contain",
            height: 600,
          }}
        />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            marginTop: "20px",
            border: "0.5px solid",
          }}
        >
          <Box
            sx={{
              paddingBottom: "20px",
              flexDirection: "column",
              width: "70%",
              border: "0.5px solid",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "35px",
                padding: "10px",
              }}
            >
              Product Name
            </Typography>
            <Divider sx={{ bgcolor: "black" }} />

            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AttachMoney style={{ fontSize: 30, color: "orangered" }} />{" "}
              <Typography
                sx={{
                  padding: "10px",
                }}
              >
                Product Price
              </Typography>
              <Box
                sx={{
                  height: "50px",
                  width: "1px",
                  bgcolor: "black",
                }}
              ></Box>
              <Addchart style={{ fontSize: 30, color: "orangered" }} />{" "}
              <Typography
                sx={{
                  padding: "10px",
                }}
              >
                Product Stock
              </Typography>
              <Box
                sx={{
                  height: "50px",
                  width: "1px",
                  bgcolor: "black",
                }}
              ></Box>
            </Box>

            <Divider sx={{ bgcolor: "black" }} />
            <Typography
              sx={{
                padding: "10px",
              }}
            >
              Product Description
            </Typography>
          </Box>

          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              width: "30%",
              padding: "10px",
              border: "0.5px solid",
            }}
          >
            <ButtonHandler
              titleBtn={"Add to Cart"}
              width={"100%"}
              backgroundColor={"green"}
              onClick={handleSubmit}
            ></ButtonHandler>
          </Box>
        </Box>
      </Container>
    </div>
  ) : null;
}
