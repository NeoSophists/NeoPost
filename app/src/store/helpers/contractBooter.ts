import { AbiItem } from "web3-utils";
import { Contract } from "ethers";
import Web3 from "web3";
import Publication from "../../interfaces/Publication.json";

export const checksumAddress = (address: string) =>
  Web3.utils.toChecksumAddress(address);

// ? To "Boot" up a set of contracts, call this function and pass in a provider/web3 instance

export function getWeb3Contracts(web3) {
  // example contract creations
  const publicationContract = new web3.eth.Contract(
    Publication.abi as AbiItem[],
    checksumAddress(process.env.REACT_APP_TOKEN)
  );

  const contracts = {
    publicationContract,
  };
  return contracts;
}

export function getEthersContracts(provider) {
  // example contract creations
  const publicationContract = new Contract(
    checksumAddress(process.env.REACT_APP_TOKEN),
    Publication.abi as AbiItem[],
    provider
  );

  const contracts = {
    publicationContract,
  };
  return contracts;
}
