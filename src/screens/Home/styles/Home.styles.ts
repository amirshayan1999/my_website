import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: "15px",
  },
  name: {
    color: "#e52764",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  desc: {
    marginBottom: "15px",
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
    },
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
  },
  iconBTN: {
    borderRadius: "50%",
    border: "2px solid #37374e",
    color: "#37374e",
    margin: "10px",
    transition: " 200ms ease",
    "&:hover": {
      borderColor: "#e52764",
      transition: " 500ms ease",
      color: "#e52764",
    },
  },
  Icon: {
    fontSize: "2rem",
    color: "inherit",
  },
}));
export default useStyles;
