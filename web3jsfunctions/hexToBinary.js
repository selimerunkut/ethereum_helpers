var Web3 = require('web3');
web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
//web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/<INFURA_ID>'));
console.log('Calculate binary from hex ETH address.....');
let result = web3.utils.padLeft(web3.utils.hexToBytes("0xddfFECd4eA931f1E0c1fcB75A19f9eCC2B72854e", 32));
console.log(result)

process.exit();
