import Head from "next/head";
import Script from "next/script";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NftCard from "./components/NftCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const [wallet, setWallet] = useState("");
  const [collection, setCollection] = useState("");
  const [NFTs_eth, setNFTs_eth] = useState([]);
  const [NFTs_mumbai, setNFTs_mumbai] = useState([]);
  const [NFTs_goerli, setNFTs_goerli] = useState([]);
  const [NFTs_poly, setNFTs_poly] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const fetchNfts = async () => {
    let nfts_eth, nfts_mumbai, nfts_poly, nfts_goerli;
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 4500)
    );
    if (wallet.length) {
      toast.promise(resolveAfter3Sec, {
        pending: "Fetching your NFTs",
        success: "NFTs Fetched 👌",
      });
      const api_eth = process.env.API_ETH;
      const baseURL_eth = `https://eth-mainnet.g.alchemy.com/v2/${api_eth}/getNFTs/`;
      const baseURL_mumbai = `https://polygon-mumbai.g.alchemy.com/v2/${api_eth}/getNFTs/`;
      const baseURL_poly = `https://polygon-mainnet.g.alchemy.com/v2/${api_eth}/getNFTs/`;
      const baseURL_goerli = `https://eth-goerli.g.alchemy.com/v2/${api_eth}/getNFTs/`;
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const fetchUrl_eth = `${baseURL_eth}?owner=${wallet}`;
      nfts_eth = await fetch(fetchUrl_eth, requestOptions).then((data) =>
        data.json()
      );
      const fetchUrl_mumbai = `${baseURL_mumbai}?owner=${wallet}`;
      nfts_mumbai = await fetch(fetchUrl_mumbai, requestOptions).then((data) =>
        data.json()
      );
      const fetchUrl_poly = `${baseURL_poly}?owner=${wallet}`;
      nfts_poly = await fetch(fetchUrl_poly, requestOptions).then((data) =>
        data.json()
      );
      const fetchUrl_goerli = `${baseURL_goerli}?owner=${wallet}`;
      nfts_goerli = await fetch(fetchUrl_goerli, requestOptions).then((data) =>
        data.json()
      );
      setButtonClick(true);
      console.log("ETH NFTS:");
      console.log(nfts_eth);
      console.log("Mumbai NFTs");
      console.log(nfts_mumbai);
      console.log("polygon");
      console.log(nfts_poly);
      console.log("goerli nfts");
      console.log(nfts_goerli);
      setNFTs_eth(nfts_eth.ownedNfts);
      setNFTs_goerli(nfts_goerli.ownedNfts);
      setNFTs_mumbai(nfts_mumbai.ownedNfts);
      setNFTs_poly(nfts_poly.ownedNfts);
    } else {
      toast.error(
        "PLEASE enter wallet address (no .eth domains and no invalid addresses"
      );
    }
  };

  return (
    <>
      <Head>
        <title>Non Fungible Puller</title>
        <meta
          name="description"
          content="NFT Puller Gallery for Ethereum and Polygon"
        />
        <meta
          name="keywords"
          content="web3 ethereum polygon mumbai goerli alchemy nft nftpuller nft gallery"
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/9b9304f5bd.js"
        crossorigin="anonymous"
      />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <Navbar />
      <div className="flex flex-col items-center justify-center py-8 gap-y-4">
        <div className="flex-wrap flex-col flex w-full gap-y-2 text-center items-center">
          <input
            className="my-2 md:w-96 w-80 p-3 bg-blue-100 text-purple-700 focus:outline-blue-600 rounded-lg"
            placeholder="Enter Wallet Address. NO .eth domains !!"
            type={"text"}
            value={wallet}
            onChange={(e) => {
              setWallet(e.target.value);
            }}
          />
          {/* <input
        type="text"
        placeholder="Enter NFT Address"
        className=""
        value={collection}
        onChange={(e) => {
          setCollection(e.target.value);
        }}
      />
      <label htmlFor="">
        <input type="checkbox" />
        Search for particular collection
      </label> */}
          <button
            className="bg-blue-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-purple-500 rounded mx-3"
            onClick={() => {
              fetchNfts();
            }}
          >
            Fetch My NFTs😎
          </button>
        </div>
        {buttonClick && (
          <div>
            <br />
            <h1 className="font-extrabold text-center text-4xl underline mt-10">
              {" "}
              ETHEREUM MAINNET NFTs
            </h1>
            <div className="flex flex-wrap gap-y-12 gap-x-3 justify-center items-center mt-4">
              {NFTs_eth.length &&
                NFTs_eth.map((nft) => {
                  return <NftCard key={nft.id} nft={nft} />;
                })}
            </div>
          </div>
        )}
        {buttonClick && (
          <div>
            <br />
            <h1 className="font-extrabold text-center text-4xl underline mt-10">
              {" "}
              POLYGON MAINNET NFTs
            </h1>
            <div className="flex flex-wrap gap-y-12 gap-x-3 justify-center mt-4">
              {NFTs_poly.length &&
                NFTs_poly.map((nft) => {
                  return <NftCard key={nft.id} nft={nft} />;
                })}
            </div>
          </div>
        )}
        {buttonClick && (
          <div>
            <br />
            <h1 className="font-extrabold text-center text-4xl underline mt-10">
              {" "}
              MUMBAI NFTs
            </h1>
            <div className="flex flex-wrap gap-y-12 gap-x-3 justify-center mt-4">
              {NFTs_mumbai.length &&
                NFTs_mumbai.map((nft) => {
                  return <NftCard key={nft.id} nft={nft} />;
                })}
            </div>
          </div>
        )}
        {buttonClick && (
          <div>
            <br />
            <h1 className="font-extrabold text-center text-4xl underline mt-10">
              {" "}
              GOERLI NFTs
            </h1>
            <div className="flex flex-wrap gap-y-12 gap-x-3 justify-center mt-4">
              {NFTs_goerli.length &&
                NFTs_goerli.map((nft) => {
                  return <NftCard key={nft.id} nft={nft} />;
                })}
            </div>
          </div>
        )}
      </div>
      {buttonClick && <Footer />}
      {!buttonClick && (
        <div className="bottom-0 absolute w-full">
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
