require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    goerli: {
      url: "https://winter-icy-shape.ethereum-goerli.discover.quiknode.pro/889fef24e19db468562c9efab99abbe7a29fc0b5/",
      accounts: ['0x0652e2bd8ef23a9e01959d6aa7ae1e482af96991f0ee56f865a28ec5cde63d4c']
    }
  }
};
