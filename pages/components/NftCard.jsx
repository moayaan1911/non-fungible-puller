import React from "react";

const NftCard = ({ nft }) => {
  return (
    <div className="w-5/6 justify-center flex flex-col flex-wrap md:w-1/4 items-center text-center">
      <div className="rounded-md">
        <img
          src={nft.media[0].gateway}
          alt={`${nft.title} Image`}
          className="object-cover h-5/6 w-full rounded-t-md"
        />
      </div>
      <div className="flex flex-col gap-y-2 px-2 py-3 bg-slate-100 rounded-b-md h-110">
        <div>
          <h2 className="font-bold">Title:</h2>
          <h2>{nft.title}</h2>
          {/* <p>{nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p> */}
          <h2 className="font-bold">Address:</h2>
          {/* <p>{`${nft.contract.address.substr(
            0,
            5
          )}....${nft.contract.address.substr(
            nft.contract.address.length - 4
          )}`}</p> */}
          <p>{nft.contract.address}</p>
        </div>
        <div className="flex-grow mt-2 flex-col">
          <h2 className="font-bold">Description:</h2>
          <p>{nft.description?.substr(0, 150)}</p>
        </div>
        <div className="flex justify-center mb-1">
          <a
            target={"_blank"}
            rel="noreferrer"
            href={`https://etherscan.io/address/${nft.contract.address}`}
            className="py-2 px-2 bg-blue-600 text-white w-1/2 text-center rounded-md cursor-pointer hover:bg-purple-600"
          >
            View Collection on Etherscan
          </a>
        </div>
      </div>
    </div>
  );
};

export default NftCard;