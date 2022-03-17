import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./buttonStyles";

export interface Props {
  text : string;
  onClick : () => void;
}

function Button(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <button
      className={classes.Button}
      onClick={props.onClick ? props.onClick : null}
    >{props.text}</button>
  );
}

export default React.memo(Button);
