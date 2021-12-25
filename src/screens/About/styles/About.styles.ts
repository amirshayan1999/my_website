import { makeStyles } from "@material-ui/core/styles";
import { getDirection } from "../../../localization";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
  },
  picContainer: {
    position: "relative",
    padding: 20,
    minHeight: 400,
    [theme.breakpoints.down("xs")]: {
      minHeight: 300,
    },
    "&::before": {
      content: "''",
      width: 20,
      height: "60%",
      backgroundColor: "rgba(229,39,100,.7)",
      position: "absolute",
      top: 20,
      left: 20,
    },
    "&::after": {
      content: "''",
      width: 20,
      height: "60%",
      backgroundColor: "rgba(229,39,100,.7)",
      position: "absolute",
      bottom: 20,
      right: 20,
    },
  },
  aboutMePic: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    padding: 20,
    textAlign: "left",
  },
  info: {
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: getDirection() === "rtl" ? 18 : 20,
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: getDirection() === "rtl" ? 15 : 17,
    },
  },
  name: {
    color: "rgb(229,39,100)",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  bold: {
    minWidth: 130,
    display: "inline-block",
  },
  cvButton: {
    "&:hover": {
      backgroundColor: "rgba(191, 23, 77, 0.6)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  servicesContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    paddingBottom: 40,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  icon: {
    fontSize: "3.5rem",
    color: "rgb(229,39,100)",
  },
  marginBottom: { marginBottom: 15 },
  buttonContainer: { display: "flex", marginTop: 25 },
}));
export default useStyles;
