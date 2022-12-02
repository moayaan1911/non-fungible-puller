import React from "react";

const NftCard = ({ nft }) => {
  return (
    <div className="w-5/6 justify-center flex flex-col flex-wrap md:w-1/4 items-center text-center border-4 border-blue-100">
      <div className="rounded-md">
        <img
          src={nft?.media[0].gateway}
          alt={`${nft?.title} Image`}
          className="object-fill h-5/6 w-full rounded-t-md"
        />
      </div>
      <div className="flex flex-col gap-y-2 px-2 py-3 bg-slate-100 rounded-b-md h-fit">
        <div>
          <h2 className="font-bold">Title:</h2>
          <h2>{nft?.title}</h2>
          <p className="text-gray-600">{`${nft?.contract.address.substr(
            0,
            4
          )}...${nft?.contract.address.substr(
            nft?.contract.address.length - 4
          )}`}</p>
        </div>
        <div className="flex-grow mt-2 flex-col px-2">
          <h2 className="font-bold">Description:</h2>
          <p>{nft?.description?.substr(0, 150)}....</p>
        </div>
        <div className="flex justify-center mb-1">
          <a
            target={"_blank"}
            rel="noreferrer"
            href={`https://etherscan.io/address/${nft?.contract.address}`}
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
