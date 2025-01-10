import { Button } from "@mui/material";
export default function ButtonHandler({
  titleBtn,
  onClick,
  width,
  backgroundColor,
}) {
  return (
    <Button
      sx={{
        width: { width },
        color: "white",
        backgroundColor: { backgroundColor },
        marginTop: "10px",
        marginBottom: "10px",
        height: "50px",
        border: "1px solid black",
        "&:hover": { backgroundColor: { backgroundColor } },
      }}
      color="inherit"
      onClick={onClick}
      className="item-other"
    >
      {titleBtn}
    </Button>
  );
}
