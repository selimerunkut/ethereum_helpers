var Web3 = require('web3');
web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
//web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/ce8eb20359904cae866eb808c136350b'));
console.log('Calculate keccak from string.....');
result = web3.utils.keccak256("MINTER_ROLE")
console.log("MINTER_ROLE: ", result);

result2 = web3.utils.keccak256("PAUSER_ROLE")
console.log("PAUSER_ROLE: ", result2);

result3 = web3.utils.keccak256("FEE_EXCLUDED_ROLE")
console.log("FEE_EXCLUDED_ROLE: ", result3);

result33 = web3.utils.keccak256("DEFAULT_ADMIN_ROLE")
console.log("DEFAULT_ADMIN_ROLE: ", result33);

result4 = web3.utils.keccak256("POLYNETWORK_ROLE")
console.log("POLYNETWORK_ROLE: ", result4);

//bytes4
result5 = web3.utils.keccak256("_INTERFACE_ID_ERC721_GHOSTMARKET").substr(0, 10)
console.log("_INTERFACE_ID_ERC721_GHOSTMARKET byte4 keccak256: ", result5)

result6 = web3.utils.keccak256("_INTERFACE_ID_ERC1155_GHOSTMARKET").substr(0, 10)
console.log("_INTERFACE_ID_ERC1155_GHOSTMARKET byte4 keccak256: ", result6)

result7 = web3.utils.keccak256("_GHOSTMARKET_NFT_ROYALTIES").substr(0, 10)
console.log("_GHOSTMARKET_NFT_ROYALTIES byte4 keccak256: ", result7)

result8 = web3.utils.keccak256("AUCTION_TRANSFER_ROLE")
console.log("AUCTION_TRANSFER_ROLE: ", result8)

console.log("AUCTION_TRANSFER_ROLE: ", web3.utils.keccak256("POLYNETWORK_ROLE"))

console.log("NFT_TRANSFER_FROM_CONTRACT", web3.utils.keccak256("NFT_TRANSFER_FROM_CONTRACT").substr(0, 10))

console.log("TO_MAKER_NFT_FROM_CONTRACT", web3.utils.keccak256("TO_MAKER_NFT_FROM_CONTRACT").substr(0, 10))

process.exit();
