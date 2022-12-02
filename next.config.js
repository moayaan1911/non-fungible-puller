/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_ETH: process.env.API_ETH,
    API_MUMBAI: process.env.API_MUMBAI,
    API_POLY: process.env.API_POLY,
    API_GOERLI: process.env.API_GOERLI,
  },
};

module.exports = nextConfig;
