'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const NotERC677Compatible = contract({
 "contractName": "NotERC677Compatible",
 "abi": [],
 "evm": {
  "assembly": "    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/NotERC677Compatible.sol\":27:60  contract NotERC677Compatible {... */\n  mstore(0x40, 0x60)\n  jumpi(tag_1, iszero(callvalue))\n  0x0\n  dup1\n  revert\ntag_1:\ntag_2:\n  dataSize(sub_0)\n  dup1\n  dataOffset(sub_0)\n  0x0\n  codecopy\n  0x0\n  return\nstop\n\nsub_0: assembly {\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/NotERC677Compatible.sol\":27:60  contract NotERC677Compatible {... */\n      mstore(0x40, 0x60)\n    tag_1:\n      0x0\n      dup1\n      revert\n\n    auxdata: 0xa165627a7a7230582029220be2c183307c23b2e007e3f2333a65e3aa6b7a8800678b54d86d888f34800029\n}\n",
  "bytecode": {
   "linkReferences": {},
   "object": "0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a7230582029220be2c183307c23b2e007e3f2333a65e3aa6b7a8800678b54d86d888f34800029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH1 0xE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST PUSH1 0x36 DUP1 PUSH1 0x1C PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE JUMPDEST PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x29 0x22 SIGNEXTEND 0xe2 0xc1 DUP4 ADDRESS PUSH29 0x23B2E007E3F2333A65E3AA6B7A8800678B54D86D888F34800029000000 ",
   "sourceMap": "27:33:6:-;;;;;;;;;;;;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x60606040525b600080fd00a165627a7a7230582029220be2c183307c23b2e007e3f2333a65e3aa6b7a8800678b54d86d888f34800029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE JUMPDEST PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x29 0x22 SIGNEXTEND 0xe2 0xc1 DUP4 ADDRESS PUSH29 0x23B2E007E3F2333A65E3AA6B7A8800678B54D86D888F34800029000000 ",
   "sourceMap": "27:33:6:-;;;;;;"
  },
  "gasEstimates": {
   "creation": {
    "codeDepositCost": "10800",
    "executionCost": "62",
    "totalCost": "10862"
   }
  },
  "legacyAssembly": {
   ".code": [
    {
     "begin": 27,
     "end": 60,
     "name": "PUSH",
     "value": "60"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "PUSH",
     "value": "40"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "MSTORE"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "CALLVALUE"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "ISZERO"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "PUSH [tag]",
     "value": "1"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "JUMPI"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "DUP1"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "REVERT"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "tag",
     "value": "1"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "JUMPDEST"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "tag",
     "value": "2"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "JUMPDEST"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "PUSH #[$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "DUP1"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "PUSH [$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "CODECOPY"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 27,
     "end": 60,
     "name": "RETURN"
    }
   ],
   ".data": {
    "0": {
     ".auxdata": "a165627a7a7230582029220be2c183307c23b2e007e3f2333a65e3aa6b7a8800678b54d86d888f34800029",
     ".code": [
      {
       "begin": 27,
       "end": 60,
       "name": "PUSH",
       "value": "60"
      },
      {
       "begin": 27,
       "end": 60,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 27,
       "end": 60,
       "name": "MSTORE"
      },
      {
       "begin": 27,
       "end": 60,
       "name": "tag",
       "value": "1"
      },
      {
       "begin": 27,
       "end": 60,
       "name": "JUMPDEST"
      },
      {
       "begin": 27,
       "end": 60,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 27,
       "end": 60,
       "name": "DUP1"
      },
      {
       "begin": 27,
       "end": 60,
       "name": "REVERT"
      }
     ]
    }
   }
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.16+commit.d7661dd9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/NotERC677Compatible.sol\":\"NotERC677Compatible\"},\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/NotERC677Compatible.sol\":{\"keccak256\":\"0xf6a1f3d2f7f66565c6c202274f1adc56e106728c9bcd6eeb4087c49204404afd\",\"urls\":[\"bzzr://28bd36db1c9fe6bc1ad0cd0c1b3aa570ea70c45260628a8b978cc94df5201011\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('NotERC677Compatible.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.NotERC677Compatible = NotERC677Compatible
