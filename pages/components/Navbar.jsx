import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-7 gap-y-4 justify-center text-center items-center bg-blue-600 w-full text-white text-lg p-7">
      <h1 className="font-extrabold text-3xl mr-5"> 🖼️NonFungible Puller</h1>

      <button>
        <a href="https://linktr.ee/ayaaneth" target={"_blank"} rel="noreferrer">
          FEEDBACK FORM
        </a>
      </button>
      <button>
        <a href="https://linktr.ee/ayaaneth" target={"_blank"} rel="noreferrer">
          GITHUB REPO
        </a>
      </button>
      <button>
        <a href="https://linktr.ee/ayaaneth" target={"_blank"} rel="noreferrer">
          Video Demo
        </a>
      </button>
      <button className="font-bold bg-black">
        <a href="https://linktr.ee/ayaaneth" target={"_blank"} rel="noreferrer">
          ✨Connect with dev✨
        </a>
      </button>
    </div>
  );
};

export default Navbar;
