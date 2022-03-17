import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    Button: {
      padding: "1rem 2rem",
      color: "black",
      backgroundColor: "darkgrey",
      margin: "auto 5rem auto auto",
      borderRadius: "2rem",
      // we merge Props & Theme interfaces and call this merged object "style".
      //component props and ui theme properties are available on the style object (yay auto-complete!!).
    },
  })
);

export default useStyles;
