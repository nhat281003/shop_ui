import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import ButtonHandler from "../components/Button";
import { Select, Box, MenuItem } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { shopService } from "../services/shopServices";
import { useEffect, useState } from "react";

export default function CreateProduct() {
  const [name, setName] = useState("");

  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [trademark, setTrademark] = useState("");

  const [notification, setNotification] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorImage, setErrorImage] = useState(false);
  const [errorPrice, setErrorPrice] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorStock, setErrorStock] = useState(false);
  const [errorTrademark, setErrorTrademark] = useState(false);

  const [open, setOpen] = useState(false);

  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    getListCategory();
  }, []);

  const getListCategory = async () => {
    const res = await shopService().getCategory();
    console.log("res", res);

    setCategory(res.data);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleChangeCat = (e) => {
    setCategoryId(e.target.value);
    console.log(categoryId);
  };

  const handleClose = () => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async () => {
    if (name === "" || name === null) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (image === "" || image === null) {
      setErrorImage(true);
    } else {
      setErrorImage(false);
    }

    if (price === "" || price === null) {
      setErrorPrice(true);
    } else {
      setErrorPrice(false);
    }

    if (description === "" || description === null) {
      setErrorDescription(true);
    } else {
      setErrorDescription(false);
    }

    if (stock === "" || stock === null) {
      setErrorStock(true);
    } else {
      setErrorStock(false);
    }

    if (trademark === "" || trademark === null) {
      setErrorTrademark(true);
    } else {
      setErrorTrademark(false);
    }

    if (
      errorName === false &&
      errorImage === false &&
      errorPrice === false &&
      errorDescription === false &&
      errorTrademark === false &&
      errorStock === false
    ) {
      const res = await shopService().createProduct({
        categoryId: categoryId,
        info: {
          name: name,
          url_image: image,
          price: price,
          description: description,
          stock: stock,
          trademark: trademark,
        },
      });

      if (res.success) {
        setNotification(res.message);
        handleClick();
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        setNotification(res.message);
        handleClick();
      }
    }
  };

  const setValueName = (event) => {
    setName(event.target.value);
  };

  const setValueImage = (event) => {
    setImage(event.target.value);
  };
  const setValuePrice = (event) => {
    setPrice(event.target.value);
  };
  const setValueDescription = (event) => {
    setDescription(event.target.value);
  };
  const setValueTrademark = (event) => {
    setTrademark(event.target.value);
  };
  const setValueStock = (event) => {
    setStock(event.target.value);
  };

  return (
    <Box
      sx={{
        alignItems: "start",
        width: "100%",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <Typography
        variant="h8"
        component="div"
        sx={{
          textAlign: "start",
          "&:hover": {
            color: "red",
          },
          fontSize: "50px",
        }}
      >
        Create Product
      </Typography>

      {/* <InputLabel id="demo-multiple-name-label">Category</InputLabel> */}
      <Typography variant="body1">Category</Typography>
      <Select
        sx={{
          width: "100%",
        }}
        value={categoryId}
        onChange={handleChangeCat}
      >
        {category.map((item) => (
          <MenuItem key={item._id} value={item._id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <Typography variant="body1">Name</Typography>
      <OutlinedInput
        sx={{
          width: "100%",
        }}
        type={"text"}
        onChange={setValueName}
        error={errorName}
        label="Name"
      />
      <Box
        sx={{
          height: "10px",
        }}
      ></Box>
      <Typography
        sx={{
          textAlign: "center left",
        }}
        variant="body1"
        textAlign={"left"}
      >
        Image
      </Typography>
      <OutlinedInput
        type={"text"}
        sx={{
          width: "100%",
        }}
        onChange={setValueImage}
        label="Image"
        error={errorImage}
      />

      <Box
        sx={{
          height: "10px",
        }}
      ></Box>
      <Typography variant="body1">Price</Typography>
      <OutlinedInput
        type={"text"}
        sx={{
          width: "100%",
        }}
        onChange={setValuePrice}
        label="Price"
        error={errorPrice}
      />

      <Box
        sx={{
          height: "10px",
        }}
      ></Box>
      <Typography variant="body1">Description</Typography>
      <OutlinedInput
        type={"text"}
        sx={{
          width: "100%",
        }}
        onChange={setValueDescription}
        label="Description"
        error={errorDescription}
      />

      <Box
        sx={{
          height: "10px",
        }}
      ></Box>
      <Typography variant="body1">Stock</Typography>
      <OutlinedInput
        type={"number"}
        sx={{
          width: "100%",
        }}
        onChange={setValueStock}
        label="Stock"
        error={errorStock}
      />

      <Box
        sx={{
          height: "10px",
        }}
      ></Box>
      <Typography variant="body1">Trademark</Typography>
      <OutlinedInput
        type={"text"}
        sx={{
          width: "100%",
        }}
        onChange={setValueTrademark}
        label="Trademark"
        error={errorTrademark}
      />

      <ButtonHandler
        titleBtn={"Create"}
        width={"100%"}
        backgroundColor={"green"}
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
  );
}
