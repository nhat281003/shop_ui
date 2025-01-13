import { TextField, Button, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const isPhoneNumberValid = (phone) => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  return phoneRegex.test(phone);
};

const UserInfo = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    address: "",
  });
  const [errors, setErrors] = useState({
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = "Phone number is required.";
    } else if (!isPhoneNumberValid(formData.phoneNumber)) {
      validationErrors.phoneNumber = "Invalid phone number.";
    }

    if (!formData.address) {
      validationErrors.address = "Address is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      // Process form submission
      onSubmit(formData);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
        Form Validation
      </Typography>

      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        error={Boolean(errors.phoneNumber)}
        helperText={errors.phoneNumber}
        fullWidth
      />

      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        error={Boolean(errors.address)}
        helperText={errors.address}
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className="item-other"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default UserInfo;
