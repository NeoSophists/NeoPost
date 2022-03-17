import React, {useState, useContext} from "react";
import WalletModal from "../../components/walletModal/walletModal";
import Navbar from "../navbar/navbar";
import useStyles from "./mainStyles";
import Editor from '../../components/editor/editor';
import Button from '../../components/button/button';
import PostList from '../../components/postList/postList';
import { StoreContext } from "../../store/store";
import { ContractContext } from "../../store/contractContext/contractContext";

export interface Props {
  showWalletModal: boolean;
  walletConnected: boolean;
  toggleWalletModal: () => void; disconnectWallet: () => void;
  setShowWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleConnect: () => void;
  canConnect: boolean;
  activatingConnector: any;
  chainIdIsCorrect: boolean;
  wallets: {
    name: string;
    connectFunction: () => void;
    selected: boolean;
    activating: boolean;
    active: boolean;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }[];
}

export default function Main(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  const [text, setText] = useState("Edit me!");
  const [articleName, setArticleName] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const classes = useStyles();

  const handleSubmit = async () => {
    if(state.isWalletConnected && articleName !== "" && text !== "Edit me!" && text !== ""){
      actions.post({
        data: text,
        name: articleName,
        address: state.userAddress,
        publicationContract: contracts.publicationContract,
        provider: state.provider
      });
    }
  }

  return (
    <div className={classes.Main}>
      <Navbar setShowWalletModal={props.setShowWalletModal} setIsPosting={(val) => setIsPosting(val)} />
      {props.showWalletModal && (
        <WalletModal
          setShowWalletModal={props.setShowWalletModal}
          handleConnect={props.handleConnect}
          canConnect={props.canConnect}
          activatingConnector={props.activatingConnector}
          wallets={props.wallets}
          disconnectWallet={props.disconnectWallet}
        />
      )}
      {isPosting ?  <div className={classes.EditorWrapper}>
        <Editor value={text} onChange={(val : string) => setText(val)} nameChange={(val : string) => setArticleName(val)}/>
        <Button text="Save post" onClick={handleSubmit} />
      </div> : <div className={classes.EditorWrapper}><PostList></PostList></div>}
     
    </div>
  );
}
