'use strict';

var Web3 = require('web3');
var web3 = new Web3('http://localhost:8545');



// contract address
var contract_address = "";
const loader = require('./contractLoader.js');

var lending;
async function doStuff() {
  var accounts = await web3.eth.getAccounts();
  var strategy = await loader('BN_Sale', contract_address, web3);
  // test accounts and invest amounts
  var addresses = [accounts[0], accounts[1]]
  var amounts = [web3.utils.toWei('1', 'ether'), web3.utils.toWei('2', 'ether')]
  console.log(1)
  const tx = await strategy.methods.changeRegistrationStatuses(addresses, amounts).send({from: accounts[0]});
  console.log(tx);

}

doStuff();