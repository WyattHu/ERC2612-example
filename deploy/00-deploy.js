const { network, ethers } = require("hardhat");
const { verify } = require("../utility/verify");
require("dotenv").config();
const {
  networkconfig,
  developmentChains,
} = require("../hardhat-config-helper");

const initialSupply = 1000000000000;
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let ERC2612Example;

  log("Deploying ...");
  ERC2612Example = await deploy("ERC2612Example", {
    contract: "ERC2612Example",
    from: deployer,
    log: true,
    args: [initialSupply],
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log("Deployed!");
  log("------------------------------------------------");
  log(`ERC2612Example deployed at ${ERC2612Example.address}`);

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(ERC2612Example.address, [initialSupply]);
  }
};
