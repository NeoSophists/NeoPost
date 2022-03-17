import { makeStyles, createStyles } from "@material-ui/styles";
import { navbarHeight } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    Main: {
      minWidth: "100vw",
      minHeight: "100vh",
      position: "relative",
      overflowX: "hidden",
      overflowY: "auto",
      backgroundColor: "lightgrey",
    },
    EditorWrapper: {
      paddingTop: navbarHeight,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      margin: "auto",
    },
  })
);

export default useStyles;
