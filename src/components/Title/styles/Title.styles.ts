import { makeStyles } from "@material-ui/core/styles";
import { getDirection } from "../../../localization";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "120px",
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    marginBottom: 40,
  },
  title: {
    margin: "50px 0 0 40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: getDirection() === "rtl" ? 33 : 35,
    },
    "&::before": {
      content: "''",
      width: "150px",
      height: "5px",
      backgroundColor: "#e52764",
      position: "absolute",
      top: "auto",
      left: 0,
      bottom: 0,
      margin: "30px 0 0 50px",
      borderRadius: "100px",
    },
    "&:hover": {
      "&::before": {
        content: "''",
        width: "180px",
        height: "5px",
        backgroundColor: "#e52764",
        position: "absolute",
        top: "auto",
        left: 0,
        bottom: 0,
        margin: "30px 0 0 35px",
        borderRadius: "100px",
      },
    },
  },
}));
export default useStyles;
