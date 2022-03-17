import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./walletButton";

const useStyles = makeStyles(() =>
  createStyles({
    WalletButton: {
      backgroundColor: "lightgrey",
      width: "80%",
      height: "20%",
      borderRadius: "10px",
      margin: "auto",
      border: (style: Theme & Props) =>
        style.selected ? `2px solid teal` : `1px solid black`,
      "&:hover": {
        filter: "brightness(1.2)",
      },
    },
    container: {
      width: "100%",
      height: "50%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    labelContainer: {
      display: "flex",
      justifyContent: "flex--start",
      alignItems: "center",
      margin: "auto auto auto 10%",
      width: "fit-content",
    },
    label: {
      margin: "auto 2rem auto 0",
      font: (style: Theme & Props) => style.typography.h1,
      textTransform: "capitalize",
    },
    icon: {
      height: "100%",
      margin: "auto 10% auto auto ",
    },
    check: {
      margin: "auto auto auto 2rem",
      height: "80%",
      width: "4rem",
      color: "teal",
    },
  })
);

export default useStyles;
