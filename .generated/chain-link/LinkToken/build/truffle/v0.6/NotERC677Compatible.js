'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const NotERC677Compatible = contract({
 "contractName": "NotERC677Compatible",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220ac7164f719e86d1485a3153a680871cd46a575734a622f9171529292d3c6176664736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x3F DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xAC PUSH18 0x64F719E86D1485A3153A680871CD46A57573 0x4A PUSH3 0x2F9171 MSTORE SWAP3 SWAP3 0xD3 0xC6 OR PUSH7 0x64736F6C634300 MOD MOD STOP CALLER ",
   "sourceMap": "25:31:5:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;25:31:5;;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x6080604052600080fdfea2646970667358221220ac7164f719e86d1485a3153a680871cd46a575734a622f9171529292d3c6176664736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xAC PUSH18 0x64F719E86D1485A3153A680871CD46A57573 0x4A PUSH3 0x2F9171 MSTORE SWAP3 SWAP3 0xD3 0xC6 OR PUSH7 0x64736F6C634300 MOD MOD STOP CALLER ",
   "sourceMap": "25:31:5:-:0;;;12:1:-1;9;2:12"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.6/mocks/NotERC677Compatible.sol\":\"NotERC677Compatible\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@chainlink/contracts=/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/node_modules/@chainlink/contracts\",\":@openzeppelin/contracts=/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/node_modules/@openzeppelin/contracts\"]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.6/mocks/NotERC677Compatible.sol\":{\"keccak256\":\"0xb838897b86633e359a3d66e0707eff9fe0cbb7e779b3c7b2137a22118ad6dcc7\",\"urls\":[\"bzz-raw://19a087a6f590e0365a4517d16d484f06c86bce4ca6b255a3676e1e92cad995f4\",\"dweb:/ipfs/Qmd9rTZ7yU9F9c5rmma7haY5Y9wh8nbae1ctNJyjNx9EEv\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('NotERC677Compatible.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.NotERC677Compatible = NotERC677Compatible
