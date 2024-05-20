require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/z2BFRj278WmjfUqaRq1FI98y_dZWyzF3',
      accounts: ['7c0c0b99132c6d1e8907a17db120475924102e825da86fb261a4393a950913a6'],
    },
  },
};