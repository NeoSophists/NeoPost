import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../store/store";
import { isMetamaskEnabled } from "../wallets/utils";
import { useWeb3React } from "@web3-react/core";
import { useToggle } from "../hooks";
import { injectedConnector, portis } from "../wallets/connectors";
import { Metamask, Portis } from "../components/icons";
import Web3 from "web3";
import Main from "./main/main";
import { ContractContext } from "../store/contractContext/contractContext";

export default function WalletWrapper() {
  const { actions } = useContext(StoreContext);
  const { updateContractsWeb3 } = useContext(ContractContext);
  const [showWalletModal, setShowWalletModal, toggleWalletModal] = useToggle(
    false
  );
  const [wallet, setWallet] = useState<any>(undefined);
  const [metamaskEnabled, setMetamaskEnabled] = useState(false);
  const [activatingConnector, setActivatingConnector] = useState<any>();
  const {
    connector,
    activate,
    deactivate,
    active,
    chainId,
    account,
  } = useWeb3React();

  useEffect(() => {
    const enabled = isMetamaskEnabled();
    setMetamaskEnabled(enabled);
     // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (account) {
      actions.setWalletAddress(account);
    }
     // eslint-disable-next-line
  }, [account]);

  // ? if you want the modal to close when there is a completed connection, use this useEffect below
  // useEffect(() => {
  //   if (activatingConnector && activatingConnector === connector) {
  //     setActivatingConnector(undefined);
  //   }
  //   active && setShowWalletModal(false);
  // }, [activatingConnector, connector, active, setShowWalletModal]);

  const connectMetamask = () => {
    setWallet(injectedConnector);
  };

  const connectPortis = () => {
    setWallet(portis);
  };

  const disconnectWallet = () => {
    deactivate();
    actions.setWalletDisconnected();
  };

  const handleConnect = async () => {
    setActivatingConnector(wallet);
    let web3 = new Web3(Web3.givenProvider);
    await activate(wallet);
    let { provider } = await wallet.activate();
    web3 = new Web3(provider);
    
    actions.setProvider(provider);
    updateContractsWeb3(web3);
    actions.setWalletConnected(provider.selectedAddress);
    
    setActivatingConnector(null);
  };
 // eslint-disable-next-line
  async function isUnlocked (web3, address) {
    try {
        await web3.eth.sign("", address);
    } catch (e) {
        return false;
    }
    return true;
}

  const wallets = [
    {
      name: "metamask",
      connectFunction: connectMetamask,
      selected: wallet === injectedConnector,
      activating: activatingConnector === injectedConnector,
      active: connector === injectedConnector,
      icon: Metamask,
    },
    {
      name: "portis",
      connectFunction: connectPortis,
      selected: wallet === portis,
      activating: activatingConnector === portis,
      active: connector === portis,
      icon: Portis,
    },
  ];

  const enabledWallets = !metamaskEnabled
    ? wallets.filter((wallet) => wallet.name !== "metamask")
    : wallets;

  const chainIdIsCorrect =
    chainId && chainId.toString() === process.env.REACT_APP_CHAIN_ID;

  return (
    <div className="Main">
      <Main
        showWalletModal={showWalletModal}
        setShowWalletModal={setShowWalletModal}
        walletConnected={active}
        toggleWalletModal={toggleWalletModal}
        disconnectWallet={disconnectWallet}
        wallets={enabledWallets}
        canConnect={wallet && true}
        handleConnect={handleConnect}
        activatingConnector={activatingConnector}
        chainIdIsCorrect={chainIdIsCorrect}
      />
    </div>
  );
}
