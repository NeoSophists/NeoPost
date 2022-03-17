import types from "./actionTypes";
import { getWeb3Contracts } from "./helpers/contractBooter";
import { PostPayload } from "./services/publication";

export const useActions = (state, dispatch) => ({
  setWalletConnected: (data) => {
    dispatch({
      type: types.SetWalletConnected.SET_WALLET_CONNECTED_SUCCESS,
      payload: data,
    });
  },
  setWalletDisconnected: () => {
    dispatch({
      type: types.SetWalletDisconnected.SET_WALLET_DISCONNECTED_SUCCESS,
      payload: "",
    });
  },
  post: (data : PostPayload) => {
    dispatch({ type: types.PostPublication.POST_PENDING });

    dispatch({
      type: types.PostPublication.POST_REQUEST,
      payload: data,
    });
  },
  getPosts: () => {
    dispatch({ type: types.GetPublications.GET_PUBLICAION_PENDING });

    dispatch({
      type: types.GetPublications.GET_PUBLICAION_REQUEST,
      payload: "",
    });
  },
  setProvider: (data: any) => {
    dispatch({ type: types.SetProvider.SET_PROVIDER_SUCCESS, payload: data });
  },
  setContracts: (data: any) => {
    dispatch({
      type: types.SetContracts.SET_CONTRACTS_SUCCESS,
      payload: getWeb3Contracts(data),
    });
  },
  setWalletAddress: (address: string) => {
    dispatch({
      type: types.SetWalletAddress.SET_WALLET_ADDRESS_SUCCESS,
      payload: address,
    });
  },
});

export interface Actions {
  setWalletConnected: (data : string) => void;
  setWalletDisconnected: () => void;
  setProvider: (data: any) => void;
  setContracts: (data: any) => void;
  setWalletAddress: (address: string) => void;
  post: (data : any) => void;
  getPosts: () => void;
}
