import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./viewer";
// import interface for component Props and Theme

const useStyles = makeStyles(() =>
  createStyles({
    BoilerPlate: {
      margin:"0 20rem 0rem 20rem",
      height: "100%",
      // we merge Props & Theme interfaces and call this merged object "style".
      //component props and ui theme properties are available on the style object (yay auto-complete!!).
    },
    title: {
      padding: "2rem 0 2rem 0"
    },
    
  })
);

export default useStyles;
