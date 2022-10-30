# phillips-sc

## Project description

Following the task and deliverables, I decided to add in 2 additional things:
  1) Upgradeable contracts through the use of transparent proxy pattern -- This will allow me to add improvement or fix bugs on the contract if it's already deployed. This is a personal standard of mine when developing smart contracts.
  2) Unit testing through the use of Mocha -- so that I won't have to repeatedly deploy the contracts onto test to check if it's working properly or not

  **Proxy contract:** [0x88AC22Acd4a3660De305B24F8ad82F42E1313292](https://mumbai.polygonscan.com/address/0x88AC22Acd4a3660De305B24F8ad82F42E1313292)
  
  **Implementation contract**: [0x5096F78e51a2c399A6E7FefEf16c8e1ddD2C9be1](https://mumbai.polygonscan.com/address/0x5096f78e51a2c399a6e7fefef16c8e1ddd2c9be1)

## Instructions

  1) Get some MATIC for Mumbai testnet: https://faucet.polygon.technology/
  2) Head over to the proxy contract to check out the transactions
  3) Or if you would like to test the contract locally (.env variables are not included. Please use your own):
  4) Clone the project and install the npm packages
  5) Execute "npx hardhat test" to see a local test run of the tasks.
  6) Execute "npx hardhat run ./scripts/deploy.js --network mumbai" to deploy both the proxy and implementation contract on Polygon Mumbai
  7) Execute "npx hardhat verify --network mumbai <implementation contract address>" -- The implementation contract address will be displayed in the terminal
  8) Head over to proxy contract on polygonscan testnet: Contract > Code > More Options > Is this a proxy? > Verify > Enter implementation contract address. This is to ensure that the chain explorer is able to distinguish between a proxy/implementation contract. 
