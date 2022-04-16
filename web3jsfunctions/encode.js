var Web3 = require('web3');
web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");

/* 
    let addrOriginLeft =[[accounts[3], 100]];
    let addrOriginRight = [[accounts[4], 200]];
    let encDataLeft = await encDataV1([ [[accounts[1], 5000], [accounts[5], 5000]], addrOriginLeft ]);
    let encDataRight = await encDataV1([ [[accounts[2], 2000], [accounts[6], 8000]], addrOriginRight ]);
 */
let addrOriginLeft = [["0x14dC79964da2C08b23698B3D3cc7Ca32193d9955", 500], ["0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f", 600]];
//let addrOriginRight = [["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", 700]];



let encDataLeftFromAbi =  "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000015d34aaf54267db7d7c367839aaf71a00a2c6a650000000000000000000000000000000000000000000000000000000000002710000000000000000000000000000000000000000000000000000000000000000200000000000000000000000014dc79964da2c08b23698b3d3cc7ca32193d995500000000000000000000000000000000000000000000000000000000000001f400000000000000000000000023618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f0000000000000000000000000000000000000000000000000000000000000258"


/*
dataLeft [
  [ [ '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65', 10000 ] ],
  [
    [ '0x14dC79964da2C08b23698B3D3cc7Ca32193d9955', 500 ],
    [ '0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f', 600 ]
  ]
]
*/ 
let encDataLeft = ([[["0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65", 10000]], addrOriginLeft]);
console.log('encDataLeft: ', encDataLeft);
//let encDataRight = ([[["0x90F79bf6EB2c4f870365E785982E1f101E93b906", 10000]], addrOriginRight]);
//console.log('encDataRight: ', encDataRight);


function eachRecursive(obj) {
  for (var k in obj) {
    if (typeof obj[k] == "object" && obj[k] !== null) {
      eachRecursive(obj[k]);
    }
    else {
      console.log(obj[k]); // here you will see in console all items from your array
      }
    }
}

eachRecursive(encDataLeft);

/* let result = web3.eth.abi.encodeParameters(
  [
    'address',
    'uint256',
  ],
  [
    "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
    500
  ]
) */

let result = web3.eth.abi.encodeParameter(
  'tuple(address,uint256)[][]',
  encDataLeft
);
console.log(result.replace('0000000000000000000000000000000000000000000000000000000000000002', ''))
console.log(encDataLeftFromAbi)