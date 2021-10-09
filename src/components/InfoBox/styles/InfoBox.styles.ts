import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: "0 20px",
  },
  service: {
    width: "100%",
    height: 120,
    padding: 20,
    margin: 10,
    backgroundColor: "#0f0f24",
    border: "1px solid #37374e",
    borderTop: "8px solid #37374e",
    display: "flex",
    alignItems: "center",
    transition: "300ms",
    "&:hover": {
      borderTop: "8px solid rgba(229,39,100,1)",
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  title: {
    paddingBottom: 10,
    position: "relative",
  },
}));
export default useStyles;
