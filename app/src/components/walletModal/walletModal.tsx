import React from "react";
import useStyles from "./walletModalStyles";
import WalletButton from "./walletButton/walletButton";
import ClickAwayListener from "react-click-away-listener";

export interface Props {
  setShowWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleConnect: () => void;
  canConnect: boolean;
  activatingConnector: any;
  disconnectWallet: () => void;
  wallets: {
    name: string;
    connectFunction: () => void;
    selected: boolean;
    activating: boolean;
    active: boolean;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }[];
}

function WalletModal(props: Props) {
  // const [activatingConnector, setActivatingConnector] = useState<any>();
  const classes = useStyles(props);

  const handleClickAway = () => {
    props.setShowWalletModal(false);
  };

  const buttons = props.wallets.map((wallet) => (
    <WalletButton
      key={wallet.name}
      connectFunction={wallet.connectFunction}
      selected={wallet.selected}
      activating={wallet.activating}
      active={wallet.active}
      name={wallet.name}
      Icon={wallet.icon}
    />
  ));

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.WalletModal}>
        {buttons}
        <div className={classes.connectButtonContainer}>
          <button
            disabled={!props.canConnect}
            className={classes.button}
            onClick={props.handleConnect}
          >
            Connect
          </button>
          <button className={classes.button} onClick={props.disconnectWallet}>
            Disconnect
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default React.memo(WalletModal);
