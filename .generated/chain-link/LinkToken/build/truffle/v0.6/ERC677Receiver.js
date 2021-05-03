'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const ERC677Receiver = contract({
 "contractName": "ERC677Receiver",
 "abi": [
  {
   "inputs": [
    {
     "internalType": "address",
     "name": "_sender",
     "type": "address"
    },
    {
     "internalType": "uint256",
     "name": "_value",
     "type": "uint256"
    },
    {
     "internalType": "bytes",
     "name": "_data",
     "type": "bytes"
    }
   ],
   "name": "onTokenTransfer",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "methodIdentifiers": {
   "onTokenTransfer(address,uint256,bytes)": "a4c0ed36"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"onTokenTransfer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.6/token/ERC677Receiver.sol\":\"ERC677Receiver\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@chainlink/contracts=/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/node_modules/@chainlink/contracts\",\":@openzeppelin/contracts=/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/node_modules/@openzeppelin/contracts\"]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.6/token/ERC677Receiver.sol\":{\"keccak256\":\"0xef4d8f572730a66f32c261d95c4cbc293d0032b32772e36502656061293c0576\",\"urls\":[\"bzz-raw://cfa26b7c682469b6e884deebceb803efdcae07227f3c6eb0ca37ee8a2fd61297\",\"dweb:/ipfs/QmYju4spxJQvpTqqZkjejTK7R2kf2rL9CcFDa7ackn7tft\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('ERC677Receiver.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.ERC677Receiver = ERC677Receiver
