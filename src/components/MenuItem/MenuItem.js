import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles/MenuItem.styles";
function MenuItem(props) {
  const classes = useStyles();
  return (
    <ListItem
      onClick={() => {
        props.pageFunc();
        props.mobileFunc();
      }}
      style={{
        backgroundColor: props.page === props.num ? "#e52764" : "transparent",
      }}
      className={classes.menuItemsRoot}
      button
    >
      <ListItemText
        disableTypography={true}
        children={<Typography variant="body2">{props.text}</Typography>}
      />
      <div className={classes.overlay} />
    </ListItem>
  );
}

export default MenuItem;
