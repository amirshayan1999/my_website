import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles/Title.styles";
function MenuItem(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} className={classes.title}>
        {props.text}
      </Typography>
    </div>
  );
}

export default MenuItem;
