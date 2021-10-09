import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    position: "relative",
    padding: "20px 40px",
  },
  progressiveContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressive: {
    width: "80%",
    backgroundColor: "#37374e",
    alignItems: "center",
    justifyContent: "center",
    height: 8,
    marginLeft: 10,
    borderRadius: 5,
  },
}));
export default useStyles;
