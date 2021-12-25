import React, { ReactNode } from "react";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles/Sernice.styles";
interface ServiceProps {
  icon: ReactNode;
  title: string;
  desc: string;
}
const Service: React.FC<ServiceProps> = ({ icon, title, desc }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.service}>
        {icon}
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.desc}>
          {desc}
        </Typography>
      </div>
    </div>
  );
};

export default Service;
