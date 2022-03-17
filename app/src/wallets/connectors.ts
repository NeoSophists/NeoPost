import { InjectedConnector } from "@web3-react/injected-connector";
import { PortisConnector } from "@web3-react/portis-connector";

export const supportedChains = {
  0: "Not connected",
  //1: "mainnet",
  4: "rinkeby",
  1337: "development",
  31337: "hardhat",
};

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainnet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
    31337, // devChain
  ],
});

// local chain IDs like 1337 are not supported by default by web3-react's portis connector (kak dom).
// You must pass in the url and chain id for your local chain/node as third config argument in constructor.
const infuraProvider = {
  nodeUrl: `https://${process.env.REACT_APP_CHAIN_NAME}.infura.io/v3/${process.env.REACT_APP_INFURA_ENDPOINT}` as string,
  chainId: 4,
};

export const portis = new PortisConnector({
  dAppId: process.env.REACT_APP_PORTIS_DAPP_ID as string,
  networks: [4],
  config: infuraProvider,
});
