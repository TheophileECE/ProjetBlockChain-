require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/cb984bdda6db47d29bf5c8f903e46783",
      accounts: ['0x0652e2bd8ef23a9e01959d6aa7ae1e482af96991f0ee56f865a28ec5cde63d4c']
    }
  }
};
