import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  overlay: {
    width: 0,
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(191, 23, 77, 0.6)",
    zIndex: -1,
  },
  menuItemsRoot: {
    position: "relative",
    paddingLeft: 0,
    paddingRight: 0,
    "&:hover $overlay": {
      width: "100%",
      transition: "800ms cubic-bezier(0.25, 1, 0.5, 1)",
    },
  },
  backgroundColorTransparent: {
    backgroundColor: "transparent !important",
  },
  backgroundColorActiveItem: {
    backgroundColor: "#e52764 !important",
  },
}));
export default useStyles;
