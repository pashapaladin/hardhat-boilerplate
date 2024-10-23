import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
// require("./tasks/faucet");
// import("./tasks/faucet");

const config: HardhatUserConfig = {
  solidity: "0.8.27", // latest version
};

export default config;
