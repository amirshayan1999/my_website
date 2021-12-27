import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles/MenuItem.styles";
import { Link, useLocation } from "react-router-dom";

interface MenuItemProps {
  text: string;
  link: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ text, link }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <ListItem
      button
      component={Link}
      to={link}
      className={[
        classes.menuItemsRoot,
        location.pathname.match(text.toLowerCase())
          ? classes.backgroundColorActiveItem
          : classes.backgroundColorTransparent,
      ].join(" ")}
    >
      <ListItemText
        disableTypography={true}
        children={<Typography variant="body2">{text}</Typography>}
      />
      <div className={classes.overlay} />
    </ListItem>
  );
};

export default MenuItem;
