import { TextField } from "@mui/material";


export default function TextFieldHandler({labelText, helperText , errorHandler, onChangeTextField}){
    return (
           <TextField 
           onChange={onChangeTextField}
           error = {errorHandler}
           helperText={helperText}
                 id="outlined-basic" variant="outlined"
                 sx = {{margin: "5px",
                   ":required" : true,
                   alignItems: "center",}}
                 label = {labelText}
                
                 />
    );
}