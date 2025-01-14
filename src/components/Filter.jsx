import {
  Grid2 as Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { shopService } from "../services/shopServices";

export default function Filter({
  data,
  onCatChange,
  onNameChange,
  onReset,
  onSubmit,
}) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getListCategory();
  }, []);
  const getListCategory = async () => {
    const res = await shopService().getCategory();
    setCategory(res.data);
  };
  const handleChangeCat = (e) => {
    onCatChange(e.target.value);
  };
  const handleReset = () => {
    onReset();
  };
  const handleChangeName = (e) => {
    onNameChange(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit();
  };
  return (
    <FormControl
      fullWidth
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <InputLabel id="demo-multiple-name-label">Category</InputLabel>
      <Select value={data.categoryName} onChange={handleChangeCat}>
        {category.map((item) => (
          <MenuItem key={item.name} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <TextField
        id="outlined-required"
        label="Name"
        value={data.name}
        onChange={handleChangeName}
      />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className="item-other"
          sx={{ flexGrow: 1 }}
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="item-other"
          sx={{ flexGrow: 1 }}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Box>
    </FormControl>
  );
}
