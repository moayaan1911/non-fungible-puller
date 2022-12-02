import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 bg-blue-600 lg shadow md:flex flex-wrap md:items-center md:justify-between md:p-6 text-center">
      <div>
        <span className="text-sm text-white sm:text-center">
          © {year} NonFungiblePuller™. Open Source Project
        </span>
      </div>
      <div>
        <span className="text-lg text-white sm:text-cente">
          {" "}
          Created by <i className="fa-brands fa-ethereum"></i>{" "}
          <span className="underline font-normal cursor-pointer md:font-extrabold">
            <a
              href="hhttps://app.ens.domains/name/moayaan.eth/details"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              moayaan.eth
            </a>
          </span>{" "}
          <i className="fa-brands fa-ethereum"></i>
        </span>
      </div>
      {/* <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul> */}
    </footer>
  );
};

export default Footer;
