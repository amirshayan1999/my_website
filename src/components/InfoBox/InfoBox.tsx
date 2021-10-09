import React, { ReactNode } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import useStyles from "./styles/InfoBox.styles";
interface InfoBoxProps {
  icon: ReactNode;
  title: string;
  desc: string[];
}
const InfoBox: React.FC<InfoBoxProps> = ({ icon, title, desc }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid className={classes.service}>
        {icon}
        <Grid className={classes.infoContainer}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1">{desc[0]}</Typography>
          <Typography variant="body1">{desc[1]}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoBox;
