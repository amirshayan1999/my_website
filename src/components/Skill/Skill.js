import React from "react";
import Typography from "@material-ui/core/Typography";
import { LinearProgress } from "@material-ui/core";
import useStyles from "./styles/Skills.styles";

function Skill(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        let diff = 1;
        diff = diff + 2;
        return Math.min(oldProgress + diff, props.val);
      });
    }, 20);
    return () => {
      clearInterval(timer);
    };
  }, [props.val]);

  return (
    <div className={classes.root}>
      <Typography variant={"h6"}>{props.title}</Typography>
      <div className={classes.progressiveContainer}>
        <Typography variant={"body1"}>{progress + "%"}</Typography>
        <LinearProgress
          className={classes.progressive}
          variant="determinate"
          value={progress}
        />
      </div>
    </div>
  );
}

export default Skill;
