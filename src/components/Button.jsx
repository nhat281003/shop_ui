import { Button } from "@mui/material";
export default function ButtonHandler({ titleBtn, onClick , width}) {
  return (
    <Button
      sx={{
        width: {width},
        color: "white",
        backgroundColor: "blue",
        margin: "10px 10px 10px 10px",
        height: "50px",
        border: "1px solid black",
        "&:hover": { backgroundColor: "blue" },
      }}
      color="inherit"
      onClick={onClick}
      className="item-other"
    >
      {titleBtn}
    </Button>
  );
}
