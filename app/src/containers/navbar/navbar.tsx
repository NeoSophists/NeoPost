import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./navbarStyles";
import { Graphrica } from "../../components/icons";

export interface Props {
  setShowWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPosting: (val) => void;
}

function Navbar(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.Navbar}>
      <Graphrica className={classes.logo} />
      <button
        className={classes.navButtons}
        onClick={() => props.setIsPosting(true)}
      >
        Post
      </button>
      <button
        className={classes.navButtons}
        onClick={() => props.setIsPosting(false)}
      >
        View Posts
      </button>
      <button
        className={classes.walletConnectButton}
        onClick={() => props.setShowWalletModal(true)}
      >
        Open Wallet Modal
      </button>
    </div>
  );
}

export default React.memo(Navbar);
