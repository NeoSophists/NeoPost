import { Contracts } from "./stateTypes";
import types from "./actionTypes";

export interface Post {
  id: string;
  name: string;
  data: string;
  author: string;
}

const initialContracts = {
  publicationContract: null,
};
export interface State {
  provider: any;
  isWalletConnected: boolean;
  contracts: Contracts;
  userAddress: string;
  error: string;
  posts: Post[]
}

const initialState: State = {
  provider: {},
  isWalletConnected: false,
  contracts: initialContracts,
  userAddress: "",
  error: "",
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SetWalletDisconnected.SET_WALLET_DISCONNECTED_SUCCESS:
      return {
        ...state,
        isWalletConnected: false,
        userAddress: "",
        provider: {},
      };
    case types.SetWalletConnected.SET_WALLET_CONNECTED_SUCCESS:
      return { ...state, isWalletConnected: true, userAddress: action.payload};
    case types.SetProvider.SET_PROVIDER_SUCCESS:
      return { ...state, provider: action.payload };
    case types.GetPublications.GET_PUBLICAION_SUCCESS:
        return { ...state, posts: action.payload };
    case types.SetContracts.SET_CONTRACTS_SUCCESS:
      return {
        ...state,
        contracts: action.payload,
      };
    case types.SetWalletAddress.SET_WALLET_ADDRESS_SUCCESS:
      return { ...state, userAddress: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer };
