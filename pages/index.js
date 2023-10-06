
import React, { useState, useEffect} from "react";
import CreateProduct from "../components/CreateProduct";
import Product from "../components/Product";
import HeadComponent from '../components/Head';

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

//Twitter
const TWITTER_HANDLE = "TrustyCryptoGaming";
const TWITTER_LINK = `https://twitter.com/TrustyCryptoG`;

const App = () => {
  
  const { publicKey } = useWallet();
  
  //Identificando o Dono da Wallet
  const isOwner = ( publicKey ? publicKey.toString() === process.env['NEXT_PUBLIC_OWNER_PUBLIC_KEY'] : false );
  
  const [creating, setCreating] = useState(false);
  const [products, setProducts] = useState([]);
 
  const renderNotConnectedContainer = () => (
    <div>
    <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>    
    </div>
  );
 
  useEffect(() => {
    if (publicKey) {
      console.log("WALLET CONNECTED");
    }
  }, [publicKey]);

  const renderItemBuyContainer = () => (
    <div className="products-container">
       <p className="header"> Welcome to Trusty Crypto Gaming</p>
    </div>
  );

  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"></p>
          <p className="sub-text"></p>        
        </header>



        
        <main>
          {creating && <CreateProduct />}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
        </main>

        
        
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`Solana Hackathon @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;  