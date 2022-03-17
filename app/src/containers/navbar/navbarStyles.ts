import { makeStyles, createStyles } from "@material-ui/styles";
import { navbarHeight } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    Navbar: {
      borderBottom: "1px solid darkgrey",
      width: "100%",
      height: navbarHeight,
      position: "absolute",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "lightgrey",
      left: 0,
      top: 0,
    },
    walletConnectButton: {
      padding: "1rem 2rem",
      color: "black",
      backgroundColor: "darkgrey",
      margin: "auto 5rem auto auto",
      borderRadius: "2rem",
    },
    navButtons: {
      padding: "1rem 2rem",
      color: "black",
      backgroundColor: "darkgrey",
      margin: "2.5rem",
      borderRadius: "2rem",
    },
    logo: {
      height: "50%",
      margin: "auto 5rem auto 4rem",
    },
  })
);

export default useStyles;
