import { Container, Box, CardMedia, Typography, Divider } from "@mui/material";
import ButtonHandler from "../components/Button";
import { AttachMoney, LoyaltyOutlined, Addchart } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { shopService } from "../services/shopServices";
import { useEffect, useState } from "react";

export default function DetailProduct() {
  const [data, setData] = useState({});

  useEffect(() => {
    getDetailProduct();
  }, []);

  const getDetailProduct = async () => {
    const res = await shopService.getDetailProduct("677fa11b555e20f4b1903f72");
    setData(res.data);
  };

  return (
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
          <ButtonHandler
            titleBtn={"Add to Cart"}
            backgroundColor={"green"}
            // onClick={handleSubmit}
          ></ButtonHandler>
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
            objectFit: "cover",
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
            <Typography>Số lượng</Typography>
            <OutlinedInput margin="10px" type={"text"} label="Số lượng" />
            <ButtonHandler
              titleBtn={"Add to Cart"}
              width={"100%"}
              backgroundColor={"green"}
              // onClick={handleSubmit}
            ></ButtonHandler>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
