import { makeStyles } from "@material-ui/core";
import { getDirection } from "../../../localization";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex: 100,
    borderRadius: 2,
    backgroundColor: "rgba(15,15,36,0.5)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#0f0f24",
    height: "100vh",
  },
  topDrawer: {
    padding: "0 20px",
    borderBottom: "1px solid #37374e",
    textAlign: "center",
  },
  profileImage: {
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    border: "5px solid #37374e",
  },
  mainDrawer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomDrawer: {
    marginTop: 10,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginLeft: 20,
  },
  button: {
    lineHeight: 1,
    borderRadius: 0,
    height: 35,
    width: "100%",
  },
  inActiveButton: {
    borderBottomRightRadius: getDirection() === "ltr" ? 0 : 5,
    borderTopRightRadius: getDirection() === "ltr" ? 0 : 5,
    borderBottomLeftRadius: getDirection() === "ltr" ? 5 : 0,
    borderTopLeftRadius: getDirection() === "ltr" ? 5 : 0,
    "&:hover": {
      backgroundColor: "#0a0a1f",
    },
  },
  activeButton: {
    backgroundColor: "#e6e6e6",
    borderBottomRightRadius: getDirection() === "ltr" ? 5 : 0,
    borderTopRightRadius: getDirection() === "ltr" ? 5 : 0,
    borderBottomLeftRadius: getDirection() === "ltr" ? 0 : 5,
    borderTopLeftRadius: getDirection() === "ltr" ? 0 : 5,
    color: "#0a0a1f",
    "&:hover": {
      background: "#0a0a1f",
      color: "#e6e6e6",
    },
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    padding: 0,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  menuIcon: {
    margin: "10px",
    fontSize: "2.5 rem",
    position: "fixed",
  },
}));
export default useStyles;
