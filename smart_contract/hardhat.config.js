// https://eth-ropsten.alchemyapi.io/v2/qiBSErNKQDhdN1bx7KGPq5fwL6clhxLa

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/qiBSErNKQDhdN1bx7KGPq5fwL6clhxLa",
      accounts: ['2adab1923c420f66a36c0b2496d8a0458791e876525904237d08b82653400a73']
    }
  }
}
