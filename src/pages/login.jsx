import Typography from "@mui/material/Typography";
import { Button, Container, TextField } from "@mui/material";
import ButtonHandler from "../components/Button";
import TextFieldHandler from "../components/TextField";
import React, { useState } from "react";


import { FormControl } from '@mui/material';

export default function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const [helperTextName, setHelperTextName] = useState("");
 const [helperTextPass, setHelperTextPass] = useState("");

  const handleSubmit = () => {

    if(username === "" || username === null){
      setErrorName(true);
      setHelperTextName("Username is required");
    
    }else {
      setErrorName(false);
      setHelperTextName("");
    
    }


    if(password === "" || password === null){
      setErrorPass(true);
      setHelperTextPass("Password is required");
    
    } else {
      setErrorPass(false);
      setHelperTextPass("");
    
    }

  };



  const setValueName = (event) => {
    setUsername(event.target.value); 
  }

  const setValuePass = (event) => {
    setPassword(event.target.value); // Lưu giá trị nhập vào state
  };


    return (
       <Container 
       sx={{
        width: "30%",
        height: "50%",
        borderRadius: "10px",
        alignItems: 'center',
        border: "1px solid",    
        flexDirection: "column",
        display: "flex",
       }}   
       >

<Typography variant="h8" component="div" 
        sx={{ 
            flexGrow: 1,
             textAlign: "center",
             "&:hover": {
                 color: "red",
             },
             fontSize: "50px",
        
              }}>
            Login
          </Typography>
          

      <TextFieldHandler labelText={"UserName"}
      errorHandler={errorName}
      onChangeTextField={setValueName}
      helperText={helperTextName}>
      </TextFieldHandler>


      <TextFieldHandler labelText={"Password"} helperText={helperTextPass} 
      errorHandler={errorPass}
      onChangeTextField={setValuePass}>

</TextFieldHandler>


        <ButtonHandler 
        titleBtn={Login}
        onClick={handleSubmit}
        
        >
        
        </ButtonHandler>


       </Container>

);
}