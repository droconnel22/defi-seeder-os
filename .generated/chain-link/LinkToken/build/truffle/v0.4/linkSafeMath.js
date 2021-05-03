'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const linkSafeMath = contract({
 "contractName": "linkSafeMath",
 "abi": [],
 "evm": {
  "assembly": "    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":117:819  library linkSafeMath {... */\n  mstore(0x40, 0x60)\n  jumpi(tag_1, iszero(callvalue))\n  0x0\n  dup1\n  revert\ntag_1:\ntag_2:\n  dataSize(sub_0)\n  dup1\n  dataOffset(sub_0)\n  0x0\n  codecopy\n  0x0\n  return\nstop\n\nsub_0: assembly {\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":117:819  library linkSafeMath {... */\n      mstore(0x40, 0x60)\n    tag_1:\n      0x0\n      dup1\n      revert\n\n    auxdata: 0xa165627a7a723058201c80b8760324657392c6c5c54d1ed5e85f2db4f4ed2d34a4eb5c103a6161fcfe0029\n}\n",
  "bytecode": {
   "linkReferences": {},
   "object": "0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a723058201c80b8760324657392c6c5c54d1ed5e85f2db4f4ed2d34a4eb5c103a6161fcfe0029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH1 0xE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST PUSH1 0x36 DUP1 PUSH1 0x1C PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE JUMPDEST PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x1c DUP1 0xb8 PUSH23 0x324657392C6C5C54D1ED5E85F2DB4F4ED2D34A4EB5C10 GASPRICE PUSH2 0x61FC INVALID STOP 0x29 ",
   "sourceMap": "117:702:3:-;;;;;;;;;;;;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x60606040525b600080fd00a165627a7a723058201c80b8760324657392c6c5c54d1ed5e85f2db4f4ed2d34a4eb5c103a6161fcfe0029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE JUMPDEST PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x1c DUP1 0xb8 PUSH23 0x324657392C6C5C54D1ED5E85F2DB4F4ED2D34A4EB5C10 GASPRICE PUSH2 0x61FC INVALID STOP 0x29 ",
   "sourceMap": "117:702:3:-;;;;;;"
  },
  "gasEstimates": {
   "creation": {
    "codeDepositCost": "10800",
    "executionCost": "62",
    "totalCost": "10862"
   },
   "internal": {
    "add(uint256,uint256)": "infinite",
    "div(uint256,uint256)": "infinite",
    "mul(uint256,uint256)": "infinite",
    "sub(uint256,uint256)": "infinite"
   }
  },
  "legacyAssembly": {
   ".code": [
    {
     "begin": 117,
     "end": 819,
     "name": "PUSH",
     "value": "60"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "PUSH",
     "value": "40"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "MSTORE"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "CALLVALUE"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "ISZERO"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "PUSH [tag]",
     "value": "1"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "JUMPI"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "DUP1"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "REVERT"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "tag",
     "value": "1"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "JUMPDEST"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "tag",
     "value": "2"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "JUMPDEST"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "PUSH #[$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "DUP1"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "PUSH [$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "CODECOPY"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 117,
     "end": 819,
     "name": "RETURN"
    }
   ],
   ".data": {
    "0": {
     ".auxdata": "a165627a7a723058201c80b8760324657392c6c5c54d1ed5e85f2db4f4ed2d34a4eb5c103a6161fcfe0029",
     ".code": [
      {
       "begin": 117,
       "end": 819,
       "name": "PUSH",
       "value": "60"
      },
      {
       "begin": 117,
       "end": 819,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 117,
       "end": 819,
       "name": "MSTORE"
      },
      {
       "begin": 117,
       "end": 819,
       "name": "tag",
       "value": "1"
      },
      {
       "begin": 117,
       "end": 819,
       "name": "JUMPDEST"
      },
      {
       "begin": 117,
       "end": 819,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 117,
       "end": 819,
       "name": "DUP1"
      },
      {
       "begin": 117,
       "end": 819,
       "name": "REVERT"
      }
     ]
    }
   }
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.16+commit.d7661dd9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{},\"title\":\"SafeMath\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":\"linkSafeMath\"},\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":{\"keccak256\":\"0x2cf8ffbc5706435764ac6b559efc7fa332b80d35e17cfb6632839561225b6bd2\",\"urls\":[\"bzzr://a9bc9e1af2e9fe8e315112156f1e6ab9bf284b5ae42a140260c2cf950d9663ef\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('linkSafeMath.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.linkSafeMath = linkSafeMath
