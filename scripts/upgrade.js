const { ethers, upgrades } = require("hardhat");

async function main() {

    // Make sure to change this if you ever deploy a new core contract
    const proxyAddress = "0x88AC22Acd4a3660De305B24F8ad82F42E1313292";

    const AshNFT = await ethers.getContractFactory("AshNFT");
    await upgrades.upgradeProxy(proxyAddress, AshNFT);
    console.log("Contract upgraded");

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
    console.log("Implementation deployed to:", implementationAddress);
}

main();