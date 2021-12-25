import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles/MenuItem.styles";
interface MenuItemProps {
  pageFunc: () => void;
  mobileFunc: () => void;
  page: number;
  num: number;
  text: string;
}
const MenuItem: React.FC<MenuItemProps> = ({
  pageFunc,
  mobileFunc,
  page,
  num,
  text,
}) => {
  const classes = useStyles();
  return (
    <ListItem
      onClick={() => {
        pageFunc();
        mobileFunc();
      }}
      className={[
        classes.menuItemsRoot,
        page === num
          ? classes.backgroundColorActiveItem
          : classes.backgroundColorTransparent,
      ].join(" ")}
      button
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
