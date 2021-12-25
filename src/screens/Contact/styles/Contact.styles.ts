import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
  formContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  title: {
    textAlign: "left",
    marginBottom: 10,
    marginLeft: 10,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
  },
  input: {
    margin: 10,
  },
  sendBtn: {
    maxWidth: "50%",
    padding: "10px 30px",
    marginLeft: 10,
    lineHeight: 2,
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    "&:hover": {
      backgroundColor: "rgba(191, 23, 77, 0.6)",
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 55,
  },
  icon: {
    fontSize: "3rem",
    padding: 7,
    border: "1px solid #37374e",
    color: "#8383a7",
  },
}));
export default useStyles;
