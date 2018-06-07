const Presale = artifacts.require('BN_Sale.sol');
//const TokenDistributionStrategy = artifacts.require('BNTokenDisStrategy.sol');
const BNToken = artifacts.require('BN_Token.sol');

const RATE = new web3.BigNumber(6666);
const WHITELIST_RATE = RATE.mul(20).div(100).add(RATE);


module.exports = function(deployer,network, accounts) {
  console.log(network);
  if (network === "development") {
      network = "develop";
      console.log("TestRPC/Ganache network, not deploying for tests");
      return;
  }
  deployer.deploy(BNToken).then(function() {

    console.log("--> BNToken deployed");

    return deployer.deploy(
                           // TokenDistributionStrategy, 
                            BNToken.address,
                            RATE,
                            WHITELIST_RATE);

    });
  };
