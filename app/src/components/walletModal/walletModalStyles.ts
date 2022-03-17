import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    WalletModal: {
      backgroundColor: "transparent",
      border: "1px solid grey",
      width: "40rem",
      height: "40rem",
      display: "flex",
      flexDirection: "column",
      borderRadius: "1rem",
      position: "absolute",
      top: "calc(50% - 20rem)",
      left: "calc(50% - 20rem)",
      zIndex: 5,
    },
    connectButtonContainer: {
      display: "flex",
      width: "100%",
      margin: "auto",
    },
    button: {
      border: "2px solid black",
      borderRadius: "5px",
      padding: "1rem 2rem",
      margin: "auto",
    },
  })
);

export default useStyles;
