import { makeStyles } from "@material-ui/core/styles";
import { getDirection } from "../../../localization";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 10,
  },
  service: {
    width: "100%",
    padding: 20,
    margin: 20,
    backgroundColor: "#0f0f24",
    border: "1px solid #37374e",
    borderTop: "8px solid #37374e",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "300ms",
    "&:hover": {
      borderTop: "8px solid rgb(229,39,100)",
    },
  },
  title: {
    margin: "20px 0 20px 0",
    paddingBottom: 20,
    position: "relative",
    "&::before": {
      content: "''",
      width: 60,
      height: 5,
      backgroundColor: "#37374e",
      position: "absolute",
      top: "auto",
      left: 0,
      bottom: 0,
      borderRadius: 100,
    },
  },
  desc: {
    // [theme.breakpoints.down("md")]: {
    //     fontSize: getDirection() === "rtl" ? 16 : 18,
    // },
    // [theme.breakpoints.down("md")]: {
    //     fontSize: getDirection() === "rtl" ? 18 : 20,
    // },
    [theme.breakpoints.down("md")]: {
      fontSize: getDirection() === "rtl" ? 16 : 18,
    },
  },
}));
export default useStyles;
