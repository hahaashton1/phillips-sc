const { ethers, upgrades } = require("hardhat");

async function main() {
  const AshNFT = await ethers.getContractFactory("AshNFT");
  console.log("Deploying AshNFT contract...");
  const contract = await upgrades.deployProxy(AshNFT, [], {
    initializer: "initialize",
    kind: "transparent",
  });
  await contract.deployed();
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(contract.address);
  console.log("Proxy deployed to:", contract.address);
  console.log("Implementation deployed to:", implementationAddress);
}

main();