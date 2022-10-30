const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("AshNFT contract", function () {

    let deployer;
    let AshNFT;
    let contract;

    it("Deploy contract and launch proxy", async function () {
        [deployer] = await ethers.getSigners();
        AshNFT = await ethers.getContractFactory("AshNFT");
        contract = await upgrades.deployProxy(AshNFT, [], {
            initializer: "initialize",
            kind: "transparent",
        });
        await contract.deployed();
    });

    it("Mint an NFT", async function () {
        await contract.connect(deployer).safeMint(deployer.address);
    });

    it("Check if owner has minted 1 NFT", async function () {
        const bal = await contract.connect(deployer).balanceOf(deployer.address);
        expect(bal).to.equal(1);
    });
    
    it("Burn an NFT", async function () {
        await contract.connect(deployer).burn(0);
    });

    it("Check that owner no longer has the NFT through balanceOf and tokenURI", async function () {
        const bal = await contract.connect(deployer).balanceOf(deployer.address);
        expect(bal).to.equal(0);
    });

    it("Pause the contract and check if it is paused", async function () {
        await contract.connect(deployer).pause();
        const paused = await contract.connect(deployer).paused();
        expect(paused).to.equal(true);
    });

    it("Error will be thrown when minting paused contract", async function () {
        await expect(contract.connect(deployer).safeMint(deployer.address)).to.be.revertedWith("Pausable: paused");
    });
});
