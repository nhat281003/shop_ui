import { Button } from "@mui/material";
export default function ButtonHandler({titleBtn , onClick}) {
    return (
         <Button
                 sx={{ backgroundColor: "#f5f5f5",
                    margin: "10px 10px 10px 10px",
                    height: "50px",
                    border: "1px solid black", '&:hover': { backgroundColor: '#f5f5f5'} ,}}
                 color="inherit"
    
                 onClick= {onClick}
                 className="item-other"
               >
                 {titleBtn}
               </Button>
    )
}