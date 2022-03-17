import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./editorStyles";
import Editor from "rich-markdown-editor";

export interface Props {
  value : string;
  onChange : (val : string) => void;
  nameChange : (val) => void;
}

function MdEditor(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.BoilerPlate}>
      <input className={classes.title} type="text" name="article name" onChange={(e) => props.nameChange(e.target.value)} placeholder="Article Name.."></input>
      <Editor
        dark={true}

        onChange={(fn) => props.onChange(fn())}
      />
    </div>
  );
}

export default React.memo(MdEditor);
