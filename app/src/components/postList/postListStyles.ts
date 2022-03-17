import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    BoilerPlate: {
      width: "100%",
      float: "left"
      // we merge Props & Theme interfaces and call this merged object "style".
      //component props and ui theme properties are available on the style object (yay auto-complete!!).
    },
    sideList: {
      width: "20rem",
      height: "10rem"
    },
    listItem: {
      padding: "1rem 2rem",
      color: "black",
      overflow: "hidden",
      backgroundColor: "darkgrey",
      margin: "auto 5rem auto auto",
      "&:hover": {
        border: "1px solid blue",
        color: 'blue',
      }
    }
  })
);

export default useStyles;
