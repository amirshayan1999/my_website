import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { LinearProgress } from "@material-ui/core";
import useStyles from "./styles/Skills.styles";
interface SkillProps {
  val: number;
  title: string;
}
const Skill: React.FC<SkillProps> = ({ val, title }) => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        let diff = 1;
        diff = diff + 2;
        return Math.min(oldProgress + diff, val);
      });
    }, 20);
    return () => {
      clearInterval(timer);
    };
  }, [val]);

  return (
    <div className={classes.root}>
      <Typography variant="h6">{title}</Typography>
      <div className={classes.progressiveContainer}>
        <Typography variant="body1">{`${progress}%`}</Typography>
        <LinearProgress
          className={classes.progressive}
          variant="determinate"
          value={progress}
        />
      </div>
    </div>
  );
};

export default Skill;
