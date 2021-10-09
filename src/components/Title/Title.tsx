import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles/Title.styles";
interface MenuItemProps {
  text: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} className={classes.title}>
        {text}
      </Typography>
    </div>
  );
};

export default MenuItem;
