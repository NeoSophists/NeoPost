import React, { createContext, useEffect, useState } from "react";
import Web3 from "web3";
import { getNetwork } from "ethers/utils";
import {
  getWeb3Contracts,
  getEthersContracts,
} from "../helpers/contractBooter";
import { Contracts } from "../stateTypes";

interface ContextProps {
  contracts: Contracts;
  updateContractsWeb3: (provider: any) => void;
  updateContractsEthers: (provider: any) => void;
}

export const ContractContext = createContext({} as ContextProps);

export function ContractProvider(props: any) {
  const [contracts, setContracts] = useState<Contracts>({} as Contracts);

  const initializeWeb3 = () => {
    const network = getNetwork(parseInt(`${process.env.REACT_APP_CHAIN_ID}`));
    let web3 = new Web3(Web3.givenProvider || "http://localhost:8545/");
    if (network.chainId !== 1337) {
      //@ts-ignore
      if (process.env.REACT_APP_INFURA_ENDPOINT) {
        //@ts-ignore
        web3 = new Web3(`${process.env.REACT_APP_INFURA_ENDPOINT}`);
        //@ts-ignore
      } else {
        try {
          //@ts-ignore
          web3 = new Web3(window.ethereum);
          //@ts-ignore
          window.ethereum.enable();
        } catch (error) {
          console.log(`window.ethereum does not exist!! Error: ${error}`);
        }
      }
    }
    return web3;
  };

  const updateContractsWeb3 = (provider: any) => {
    const contracts = getWeb3Contracts(provider);
    setContracts(contracts);
  };

  const updateContractsEthers = (provider: any) => {
    const contracts = getEthersContracts(provider);
    setContracts(contracts);
  };
  const initializeContracts = () => {
    const web3 = initializeWeb3();
    const contracts = getWeb3Contracts(web3);
    setContracts(contracts);
  };


  useEffect(() => {
    initializeContracts();
    // eslint-disable-next-line
  }, []);

  const value = { contracts, updateContractsWeb3, updateContractsEthers };
  return (
    <ContractContext.Provider value={value}>
      {props.children}
    </ContractContext.Provider>
  );
}
