import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./viewerStyles";
import Editor from "rich-markdown-editor";

export interface Props {
  value : string;
  name: string;
} 

function Viewer(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.BoilerPlate}>
      <h1 className={classes.title}>{props.name}</h1>
      <Editor
        dark={true}
        readOnly={true}
        value={props.value}
      />
    </div>
  );
}

export default React.memo(Viewer);
