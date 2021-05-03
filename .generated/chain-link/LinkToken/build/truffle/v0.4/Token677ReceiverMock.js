'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Token677ReceiverMock = contract({
 "contractName": "Token677ReceiverMock",
 "abi": [
  {
   "constant": true,
   "inputs": [],
   "name": "tokenData",
   "outputs": [
    {
     "name": "",
     "type": "bytes"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "calledFallback",
   "outputs": [
    {
     "name": "",
     "type": "bool"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "sentValue",
   "outputs": [
    {
     "name": "",
     "type": "uint256"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "tokenSender",
   "outputs": [
    {
     "name": "",
     "type": "address"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_sender",
     "type": "address"
    },
    {
     "name": "_value",
     "type": "uint256"
    },
    {
     "name": "_data",
     "type": "bytes"
    }
   ],
   "name": "onTokenTransfer",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  }
 ],
 "evm": {
  "assembly": "    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":26:389  contract Token677ReceiverMock {... */\n  mstore(0x40, 0x60)\n    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":149:183  bool public calledFallback = false */\n  0x3\n  dup1\n  sload\n  not(0xff)\n  and\n  swap1\n  sstore\n    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":26:389  contract Token677ReceiverMock {... */\n  jumpi(tag_1, iszero(callvalue))\n  0x0\n  dup1\n  revert\ntag_1:\ntag_2:\n  dataSize(sub_0)\n  dup1\n  dataOffset(sub_0)\n  0x0\n  codecopy\n  0x0\n  return\nstop\n\nsub_0: assembly {\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":26:389  contract Token677ReceiverMock {... */\n      mstore(0x40, 0x60)\n      and(div(calldataload(0x0), 0x100000000000000000000000000000000000000000000000000000000), 0xffffffff)\n      0x24fd650\n      dup2\n      eq\n      tag_2\n      jumpi\n      dup1\n      0x390f6426\n      eq\n      tag_3\n      jumpi\n      dup1\n      0x6dcb8d84\n      eq\n      tag_4\n      jumpi\n      dup1\n      0x9898e18c\n      eq\n      tag_5\n      jumpi\n      dup1\n      0xa4c0ed36\n      eq\n      tag_6\n      jumpi\n    tag_1:\n      0x0\n      dup1\n      revert\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":121:143  bytes public tokenData */\n    tag_2:\n      jumpi(tag_7, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_7:\n      tag_8\n      jump(tag_9)\n    tag_8:\n      mload(0x40)\n      0x20\n      dup1\n      dup3\n      mstore\n      dup2\n      swap1\n      dup2\n      add\n      dup4\n      dup2\n      dup2\n      mload\n      dup2\n      mstore\n      0x20\n      add\n      swap2\n      pop\n      dup1\n      mload\n      swap1\n      0x20\n      add\n      swap1\n      dup1\n      dup4\n      dup4\n        /* \"--CODEGEN--\":23:24   */\n      0x0\n        /* \"--CODEGEN--\":8:108   */\n    tag_10:\n        /* \"--CODEGEN--\":33:36   */\n      dup4\n        /* \"--CODEGEN--\":30:31   */\n      dup2\n        /* \"--CODEGEN--\":27:29   */\n      lt\n        /* \"--CODEGEN--\":8:108   */\n      iszero\n      tag_11\n      jumpi\n        /* \"--CODEGEN--\":99:100   */\n      dup1\n        /* \"--CODEGEN--\":94:97   */\n      dup3\n        /* \"--CODEGEN--\":90:93   */\n      add\n        /* \"--CODEGEN--\":84:89   */\n      mload\n        /* \"--CODEGEN--\":80:81   */\n      dup2\n        /* \"--CODEGEN--\":75:78   */\n      dup5\n        /* \"--CODEGEN--\":71:74   */\n      add\n        /* \"--CODEGEN--\":64:70   */\n      mstore\n        /* \"--CODEGEN--\":8:108   */\n    tag_12:\n        /* \"--CODEGEN--\":52:54   */\n      0x20\n        /* \"--CODEGEN--\":45:48   */\n      add\n        /* \"--CODEGEN--\":8:108   */\n      jump(tag_10)\n    tag_11:\n        /* \"--CODEGEN--\":12:26   */\n      pop\n        /* \"--CODEGEN--\":3:112   */\n      pop\n      pop\n      pop\n      swap1\n      pop\n      swap1\n      dup2\n      add\n      swap1\n      0x1f\n      and\n      dup1\n      iszero\n      tag_13\n      jumpi\n      dup1\n      dup3\n      sub\n      dup1\n      mload\n      0x1\n      dup4\n      0x20\n      sub\n      0x100\n      exp\n      sub\n      not\n      and\n      dup2\n      mstore\n      0x20\n      add\n      swap2\n      pop\n    tag_13:\n      pop\n      swap3\n      pop\n      pop\n      pop\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":149:183  bool public calledFallback = false */\n    tag_3:\n      jumpi(tag_14, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_14:\n      tag_15\n      jump(tag_16)\n    tag_15:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":94:115  uint public sentValue */\n    tag_4:\n      jumpi(tag_17, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_17:\n      tag_18\n      jump(tag_19)\n    tag_18:\n      mload(0x40)\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":62:88  address public tokenSender */\n    tag_5:\n      jumpi(tag_20, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_20:\n      tag_21\n      jump(tag_22)\n    tag_21:\n      mload(0x40)\n      0xffffffffffffffffffffffffffffffffffffffff\n      swap1\n      swap2\n      and\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":190:386  function onTokenTransfer(address _sender, uint _value, bytes _data)... */\n    tag_6:\n      jumpi(tag_23, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_23:\n      tag_24\n      0x4\n      dup1\n      calldataload\n      0xffffffffffffffffffffffffffffffffffffffff\n      and\n      swap1\n      0x24\n      dup1\n      calldataload\n      swap2\n      swap1\n      0x64\n      swap1\n      calldataload(0x44)\n      swap1\n      dup2\n      add\n      swap1\n      dup4\n      add\n      calldataload\n      dup1\n      0x20\n      0x1f\n      dup3\n      add\n      dup2\n      swap1\n      div\n      dup2\n      mul\n      add\n      mload(0x40)\n      swap1\n      dup2\n      add\n      0x40\n      mstore\n      dup2\n      dup2\n      mstore\n      swap3\n      swap2\n      swap1\n      0x20\n      dup5\n      add\n      dup4\n      dup4\n      dup1\n      dup3\n      dup5\n      calldatacopy\n      pop\n      swap5\n      swap7\n      pop\n      tag_25\n      swap6\n      pop\n      pop\n      pop\n      pop\n      pop\n      pop\n      jump\n    tag_24:\n      stop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":121:143  bytes public tokenData */\n    tag_9:\n      0x2\n      dup1\n      sload\n      0x1\n      dup2\n      0x1\n      and\n      iszero\n      0x100\n      mul\n      sub\n      and\n      0x2\n      swap1\n      div\n      dup1\n      0x1f\n      add\n      0x20\n      dup1\n      swap2\n      div\n      mul\n      0x20\n      add\n      mload(0x40)\n      swap1\n      dup2\n      add\n      0x40\n      mstore\n      dup1\n      swap3\n      swap2\n      swap1\n      dup2\n      dup2\n      mstore\n      0x20\n      add\n      dup3\n      dup1\n      sload\n      0x1\n      dup2\n      0x1\n      and\n      iszero\n      0x100\n      mul\n      sub\n      and\n      0x2\n      swap1\n      div\n      dup1\n      iszero\n      tag_26\n      jumpi\n      dup1\n      0x1f\n      lt\n      tag_27\n      jumpi\n      0x100\n      dup1\n      dup4\n      sload\n      div\n      mul\n      dup4\n      mstore\n      swap2\n      0x20\n      add\n      swap2\n      jump(tag_26)\n    tag_27:\n      dup3\n      add\n      swap2\n      swap1\n      0x0\n      mstore\n      keccak256(0x0, 0x20)\n      swap1\n    tag_28:\n      dup2\n      sload\n      dup2\n      mstore\n      swap1\n      0x1\n      add\n      swap1\n      0x20\n      add\n      dup1\n      dup4\n      gt\n      tag_28\n      jumpi\n      dup3\n      swap1\n      sub\n      0x1f\n      and\n      dup3\n      add\n      swap2\n    tag_26:\n      pop\n      pop\n      pop\n      pop\n      pop\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":149:183  bool public calledFallback = false */\n    tag_16:\n      and(0xff, sload(0x3))\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":94:115  uint public sentValue */\n    tag_19:\n      sload(0x1)\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":62:88  address public tokenSender */\n    tag_22:\n      and(0xffffffffffffffffffffffffffffffffffffffff, sload(0x0))\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":190:386  function onTokenTransfer(address _sender, uint _value, bytes _data)... */\n    tag_25:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":277:291  calledFallback */\n      0x3\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":277:298  calledFallback = true */\n      dup1\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":294:298  true */\n      0x1\n      not(0xff)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":277:298  calledFallback = true */\n      swap1\n      swap2\n      and\n      dup2\n      or\n      swap1\n      swap2\n      sstore\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":307:328  tokenSender = _sender */\n      dup1\n      sload\n      not(0xffffffffffffffffffffffffffffffffffffffff)\n      and\n      0xffffffffffffffffffffffffffffffffffffffff\n      dup7\n      and\n      or\n      swap1\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":336:354  sentValue = _value */\n      dup3\n      swap1\n      sstore\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":374:379  _data */\n      dup2\n      dup1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":362:379  tokenData = _data */\n      mload\n      tag_30\n      swap3\n      swap2\n      0x20\n      add\n      swap1\n      jump\t// in(tag_31)\n    tag_30:\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":190:386  function onTokenTransfer(address _sender, uint _value, bytes _data)... */\n    tag_29:\n      pop\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":26:389  contract Token677ReceiverMock {... */\n    tag_31:\n      dup3\n      dup1\n      sload\n      0x1\n      dup2\n      0x1\n      and\n      iszero\n      0x100\n      mul\n      sub\n      and\n      0x2\n      swap1\n      div\n      swap1\n      0x0\n      mstore\n      keccak256(0x0, 0x20)\n      swap1\n      0x1f\n      add\n      0x20\n      swap1\n      div\n      dup2\n      add\n      swap3\n      dup3\n      0x1f\n      lt\n      tag_33\n      jumpi\n      dup1\n      mload\n      not(0xff)\n      and\n      dup4\n      dup1\n      add\n      or\n      dup6\n      sstore\n      jump(tag_35)\n    tag_33:\n      dup3\n      dup1\n      add\n      0x1\n      add\n      dup6\n      sstore\n      dup3\n      iszero\n      tag_35\n      jumpi\n      swap2\n      dup3\n      add\n    tag_34:\n      dup3\n      dup2\n      gt\n      iszero\n      tag_35\n      jumpi\n      dup3\n      mload\n      dup3\n      sstore\n      swap2\n      0x20\n      add\n      swap2\n      swap1\n      0x1\n      add\n      swap1\n      jump(tag_34)\n    tag_35:\n    tag_32:\n      pop\n      tag_36\n      swap3\n      swap2\n      pop\n      jump\t// in(tag_37)\n    tag_36:\n      pop\n      swap1\n      jump\t// out\n    tag_37:\n      tag_38\n      swap2\n      swap1\n    tag_39:\n      dup1\n      dup3\n      gt\n      iszero\n      tag_36\n      jumpi\n      0x0\n      dup2\n      sstore\n      0x1\n      add\n      jump(tag_39)\n    tag_40:\n      pop\n      swap1\n      jump\n    tag_38:\n      swap1\n      jump\t// out\n\n    auxdata: 0xa165627a7a72305820cbb7053f35fa4ac5b8fc3964911af099808cca6fba6674239745c536f079f7f60029\n}\n",
  "bytecode": {
   "linkReferences": {},
   "object": "0x60606040526003805460ff19169055341561001957600080fd5b5b6103e8806100296000396000f300606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663024fd6508114610069578063390f6426146100f45780636dcb8d841461011b5780639898e18c14610140578063a4c0ed361461017c575b600080fd5b341561007457600080fd5b61007c6101f0565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100b95780820151818401525b6020016100a0565b50505050905090810190601f1680156100e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100ff57600080fd5b61010761028e565b604051901515815260200160405180910390f35b341561012657600080fd5b61012e610297565b60405190815260200160405180910390f35b341561014b57600080fd5b61015361029d565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561018757600080fd5b6101ee6004803573ffffffffffffffffffffffffffffffffffffffff169060248035919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506102b995505050505050565b005b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b60035460ff1681565b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600160ff1990911681179091556000805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff8616179055829055600281805161031592916020019061031c565b505b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061035d57805160ff191683800117855561038a565b8280016001018555821561038a579182015b8281111561038a57825182559160200191906001019061036f565b5b5061039792915061039b565b5090565b6103b991905b8082111561039757600081556001016103a1565b5090565b905600a165627a7a72305820cbb7053f35fa4ac5b8fc3964911af099808cca6fba6674239745c536f079f7f60029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x3 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SSTORE CALLVALUE ISZERO PUSH2 0x19 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST PUSH2 0x3E8 DUP1 PUSH2 0x29 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x24FD650 DUP2 EQ PUSH2 0x69 JUMPI DUP1 PUSH4 0x390F6426 EQ PUSH2 0xF4 JUMPI DUP1 PUSH4 0x6DCB8D84 EQ PUSH2 0x11B JUMPI DUP1 PUSH4 0x9898E18C EQ PUSH2 0x140 JUMPI DUP1 PUSH4 0xA4C0ED36 EQ PUSH2 0x17C JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x74 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x7C PUSH2 0x1F0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xB9 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE JUMPDEST PUSH1 0x20 ADD PUSH2 0xA0 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0xE6 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xFF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x107 PUSH2 0x28E JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x126 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x12E PUSH2 0x297 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x14B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x153 PUSH2 0x29D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x187 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1EE PUSH1 0x4 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x24 DUP1 CALLDATALOAD SWAP2 SWAP1 PUSH1 0x64 SWAP1 PUSH1 0x44 CALLDATALOAD SWAP1 DUP2 ADD SWAP1 DUP4 ADD CALLDATALOAD DUP1 PUSH1 0x20 PUSH1 0x1F DUP3 ADD DUP2 SWAP1 DIV DUP2 MUL ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 SWAP1 PUSH1 0x20 DUP5 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP7 POP PUSH2 0x2B9 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST STOP JUMPDEST PUSH1 0x2 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x286 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x25B JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x286 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x269 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x1 PUSH1 0xFF NOT SWAP1 SWAP2 AND DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x0 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP7 AND OR SWAP1 SSTORE DUP3 SWAP1 SSTORE PUSH1 0x2 DUP2 DUP1 MLOAD PUSH2 0x315 SWAP3 SWAP2 PUSH1 0x20 ADD SWAP1 PUSH2 0x31C JUMP JUMPDEST POP JUMPDEST POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x35D JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x38A JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x38A JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x38A JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x36F JUMP JUMPDEST JUMPDEST POP PUSH2 0x397 SWAP3 SWAP2 POP PUSH2 0x39B JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x3B9 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x397 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x3A1 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xcb 0xb7 SDIV 0x3f CALLDATALOAD STATICCALL 0x4a 0xc5 0xb8 0xfc CODECOPY PUSH5 0x911AF09980 DUP13 0xca PUSH16 0xBA6674239745C536F079F7F600290000 ",
   "sourceMap": "26:363:9:-;;;149:34;;;-1:-1:-1;;149:34:9;;;26:363;;;;;;;;;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663024fd6508114610069578063390f6426146100f45780636dcb8d841461011b5780639898e18c14610140578063a4c0ed361461017c575b600080fd5b341561007457600080fd5b61007c6101f0565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100b95780820151818401525b6020016100a0565b50505050905090810190601f1680156100e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100ff57600080fd5b61010761028e565b604051901515815260200160405180910390f35b341561012657600080fd5b61012e610297565b60405190815260200160405180910390f35b341561014b57600080fd5b61015361029d565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561018757600080fd5b6101ee6004803573ffffffffffffffffffffffffffffffffffffffff169060248035919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506102b995505050505050565b005b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b60035460ff1681565b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600160ff1990911681179091556000805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff8616179055829055600281805161031592916020019061031c565b505b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061035d57805160ff191683800117855561038a565b8280016001018555821561038a579182015b8281111561038a57825182559160200191906001019061036f565b5b5061039792915061039b565b5090565b6103b991905b8082111561039757600081556001016103a1565b5090565b905600a165627a7a72305820cbb7053f35fa4ac5b8fc3964911af099808cca6fba6674239745c536f079f7f60029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x24FD650 DUP2 EQ PUSH2 0x69 JUMPI DUP1 PUSH4 0x390F6426 EQ PUSH2 0xF4 JUMPI DUP1 PUSH4 0x6DCB8D84 EQ PUSH2 0x11B JUMPI DUP1 PUSH4 0x9898E18C EQ PUSH2 0x140 JUMPI DUP1 PUSH4 0xA4C0ED36 EQ PUSH2 0x17C JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x74 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x7C PUSH2 0x1F0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xB9 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE JUMPDEST PUSH1 0x20 ADD PUSH2 0xA0 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0xE6 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xFF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x107 PUSH2 0x28E JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x126 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x12E PUSH2 0x297 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x14B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x153 PUSH2 0x29D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x187 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1EE PUSH1 0x4 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x24 DUP1 CALLDATALOAD SWAP2 SWAP1 PUSH1 0x64 SWAP1 PUSH1 0x44 CALLDATALOAD SWAP1 DUP2 ADD SWAP1 DUP4 ADD CALLDATALOAD DUP1 PUSH1 0x20 PUSH1 0x1F DUP3 ADD DUP2 SWAP1 DIV DUP2 MUL ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 SWAP1 PUSH1 0x20 DUP5 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP7 POP PUSH2 0x2B9 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST STOP JUMPDEST PUSH1 0x2 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x286 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x25B JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x286 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x269 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x1 PUSH1 0xFF NOT SWAP1 SWAP2 AND DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x0 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP7 AND OR SWAP1 SSTORE DUP3 SWAP1 SSTORE PUSH1 0x2 DUP2 DUP1 MLOAD PUSH2 0x315 SWAP3 SWAP2 PUSH1 0x20 ADD SWAP1 PUSH2 0x31C JUMP JUMPDEST POP JUMPDEST POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x35D JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x38A JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x38A JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x38A JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x36F JUMP JUMPDEST JUMPDEST POP PUSH2 0x397 SWAP3 SWAP2 POP PUSH2 0x39B JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x3B9 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x397 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x3A1 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xcb 0xb7 SDIV 0x3f CALLDATALOAD STATICCALL 0x4a 0xc5 0xb8 0xfc CODECOPY PUSH5 0x911AF09980 DUP13 0xca PUSH16 0xBA6674239745C536F079F7F600290000 ",
   "sourceMap": "26:363:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;121:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;8:100;52:2;45:3;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;149:34:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;94:21;;;;;;;;;;;;;;;;;;;;;;;;;;;62:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;190:196;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;190:196:9;;-1:-1:-1;190:196:9;;-1:-1:-1;;;;;;190:196:9;;;121:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;149:34::-;;;;;;:::o;94:21::-;;;;:::o;62:26::-;;;;;;:::o;190:196::-;277:14;:21;;294:4;-1:-1:-1;;277:21:9;;;;;;;;-1:-1:-1;307:21:9;;-1:-1:-1;;307:21:9;;;;;;;336:18;;;-1:-1:-1;374:5:9;;362:17;;;;;;;;:::i;:::-;;190:196;;;;:::o;26:363::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;26:363:9;;;-1:-1:-1;26:363:9;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o"
  },
  "gasEstimates": {
   "creation": {
    "codeDepositCost": "200000",
    "executionCost": "20459",
    "totalCost": "220459"
   },
   "external": {
    "calledFallback()": "386",
    "onTokenTransfer(address,uint256,bytes)": "infinite",
    "sentValue()": "396",
    "tokenData()": "infinite",
    "tokenSender()": "433"
   }
  },
  "legacyAssembly": {
   ".code": [
    {
     "begin": 26,
     "end": 389,
     "name": "PUSH",
     "value": "60"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "PUSH",
     "value": "40"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "MSTORE"
    },
    {
     "begin": 149,
     "end": 183,
     "name": "PUSH",
     "value": "3"
    },
    {
     "begin": 149,
     "end": 183,
     "name": "DUP1"
    },
    {
     "begin": 149,
     "end": 183,
     "name": "SLOAD"
    },
    {
     "begin": -1,
     "end": -1,
     "name": "PUSH",
     "value": "FF"
    },
    {
     "begin": -1,
     "end": -1,
     "name": "NOT"
    },
    {
     "begin": 149,
     "end": 183,
     "name": "AND"
    },
    {
     "begin": 149,
     "end": 183,
     "name": "SWAP1"
    },
    {
     "begin": 149,
     "end": 183,
     "name": "SSTORE"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "CALLVALUE"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "ISZERO"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "PUSH [tag]",
     "value": "1"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "JUMPI"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "DUP1"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "REVERT"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "tag",
     "value": "1"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "JUMPDEST"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "tag",
     "value": "2"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "JUMPDEST"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "PUSH #[$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "DUP1"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "PUSH [$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "CODECOPY"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 26,
     "end": 389,
     "name": "RETURN"
    }
   ],
   ".data": {
    "0": {
     ".auxdata": "a165627a7a72305820cbb7053f35fa4ac5b8fc3964911af099808cca6fba6674239745c536f079f7f60029",
     ".code": [
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "60"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "MSTORE"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "100000000000000000000000000000000000000000000000000000000"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DIV"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "AND"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "24FD650"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "EQ"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "390F6426"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "EQ"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "6DCB8D84"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "EQ"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "4"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "9898E18C"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "EQ"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "5"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "A4C0ED36"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "EQ"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "6"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "REVERT"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "tag",
       "value": "2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPDEST"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "CALLVALUE"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ISZERO"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH [tag]",
       "value": "7"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPI"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "REVERT"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "tag",
       "value": "7"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPDEST"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH [tag]",
       "value": "8"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH [tag]",
       "value": "9"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMP"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "tag",
       "value": "8"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPDEST"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MLOAD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP3"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MSTORE"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP4"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MLOAD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MSTORE"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "POP"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MLOAD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP4"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP4"
      },
      {
       "begin": 23,
       "end": 24,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "tag",
       "value": "10"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "JUMPDEST"
      },
      {
       "begin": 33,
       "end": 36,
       "name": "DUP4"
      },
      {
       "begin": 30,
       "end": 31,
       "name": "DUP2"
      },
      {
       "begin": 27,
       "end": 29,
       "name": "LT"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "ISZERO"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "PUSH [tag]",
       "value": "11"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "JUMPI"
      },
      {
       "begin": 99,
       "end": 100,
       "name": "DUP1"
      },
      {
       "begin": 94,
       "end": 97,
       "name": "DUP3"
      },
      {
       "begin": 90,
       "end": 93,
       "name": "ADD"
      },
      {
       "begin": 84,
       "end": 89,
       "name": "MLOAD"
      },
      {
       "begin": 80,
       "end": 81,
       "name": "DUP2"
      },
      {
       "begin": 75,
       "end": 78,
       "name": "DUP5"
      },
      {
       "begin": 71,
       "end": 74,
       "name": "ADD"
      },
      {
       "begin": 64,
       "end": 70,
       "name": "MSTORE"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "tag",
       "value": "12"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "JUMPDEST"
      },
      {
       "begin": 52,
       "end": 54,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 45,
       "end": 48,
       "name": "ADD"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "PUSH [tag]",
       "value": "10"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "JUMP"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "tag",
       "value": "11"
      },
      {
       "begin": 8,
       "end": 108,
       "name": "JUMPDEST"
      },
      {
       "begin": 12,
       "end": 26,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SWAP1"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SWAP1"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP2"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "ADD"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SWAP1"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "PUSH",
       "value": "1F"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "AND"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP1"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "ISZERO"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "PUSH [tag]",
       "value": "13"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "JUMPI"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP1"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP3"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SUB"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP1"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "MLOAD"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP4"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SUB"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "PUSH",
       "value": "100"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "EXP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SUB"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "NOT"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "AND"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP2"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "MSTORE"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "ADD"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SWAP2"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "tag",
       "value": "13"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "JUMPDEST"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SWAP3"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "POP"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "MLOAD"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP1"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SWAP2"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SUB"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SWAP1"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "RETURN"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "tag",
       "value": "3"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "JUMPDEST"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "CALLVALUE"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "ISZERO"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "PUSH [tag]",
       "value": "14"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "JUMPI"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "DUP1"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "REVERT"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "tag",
       "value": "14"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "JUMPDEST"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "PUSH [tag]",
       "value": "15"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "PUSH [tag]",
       "value": "16"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "JUMP"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "tag",
       "value": "15"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "JUMPDEST"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "MLOAD"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "SWAP1"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "ISZERO"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "ISZERO"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "DUP2"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "MSTORE"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "ADD"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "MLOAD"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "DUP1"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "SWAP2"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "SUB"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "SWAP1"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "RETURN"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "tag",
       "value": "4"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "JUMPDEST"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "CALLVALUE"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "ISZERO"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "PUSH [tag]",
       "value": "17"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "JUMPI"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "DUP1"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "REVERT"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "tag",
       "value": "17"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "JUMPDEST"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "PUSH [tag]",
       "value": "18"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "PUSH [tag]",
       "value": "19"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "JUMP"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "tag",
       "value": "18"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "JUMPDEST"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "MLOAD"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "SWAP1"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "DUP2"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "MSTORE"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "ADD"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "MLOAD"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "DUP1"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "SWAP2"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "SUB"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "SWAP1"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "RETURN"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "tag",
       "value": "5"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "JUMPDEST"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "CALLVALUE"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "ISZERO"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH [tag]",
       "value": "20"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "JUMPI"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "DUP1"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "REVERT"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "tag",
       "value": "20"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "JUMPDEST"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH [tag]",
       "value": "21"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH [tag]",
       "value": "22"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "JUMP"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "tag",
       "value": "21"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "JUMPDEST"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "MLOAD"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH",
       "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "SWAP1"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "SWAP2"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "AND"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "DUP2"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "MSTORE"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "ADD"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "MLOAD"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "DUP1"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "SWAP2"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "SUB"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "SWAP1"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "RETURN"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "tag",
       "value": "6"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "JUMPDEST"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "CALLVALUE"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "ISZERO"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH [tag]",
       "value": "23"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "JUMPI"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "REVERT"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "tag",
       "value": "23"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "JUMPDEST"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH [tag]",
       "value": "24"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "AND"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP2"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "64"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "44"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP2"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "ADD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP4"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "ADD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "1F"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP3"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "ADD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP2"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DIV"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP2"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "MUL"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "ADD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "MLOAD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP2"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "ADD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "MSTORE"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP2"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP2"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "MSTORE"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP3"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP2"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP5"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "ADD"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP4"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP4"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP1"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP3"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "DUP5"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "CALLDATACOPY"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP5"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP7"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "PUSH [tag]",
       "value": "25"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "SWAP6"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "JUMP"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "tag",
       "value": "24"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "JUMPDEST"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "STOP"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "tag",
       "value": "9"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPDEST"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SLOAD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "AND"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ISZERO"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "100"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MUL"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SUB"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "AND"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DIV"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "1F"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DIV"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MUL"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MLOAD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MSTORE"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP3"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MSTORE"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP3"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SLOAD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "AND"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ISZERO"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "100"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MUL"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SUB"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "AND"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DIV"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ISZERO"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH [tag]",
       "value": "26"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPI"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "1F"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "LT"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH [tag]",
       "value": "27"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPI"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "100"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP4"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SLOAD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DIV"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MUL"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP4"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MSTORE"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH [tag]",
       "value": "26"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMP"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "tag",
       "value": "27"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPDEST"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP3"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MSTORE"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "KECCAK256"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "tag",
       "value": "28"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPDEST"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SLOAD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "MSTORE"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP4"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "GT"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH [tag]",
       "value": "28"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPI"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP3"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP1"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SUB"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "PUSH",
       "value": "1F"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "AND"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP3"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "ADD"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "SWAP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "tag",
       "value": "26"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMPDEST"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "POP"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "POP"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "POP"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "POP"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "POP"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "DUP2"
      },
      {
       "begin": 121,
       "end": 143,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "tag",
       "value": "16"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "JUMPDEST"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "PUSH",
       "value": "3"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "SLOAD"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "PUSH",
       "value": "FF"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "AND"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "DUP2"
      },
      {
       "begin": 149,
       "end": 183,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "tag",
       "value": "19"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "JUMPDEST"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "SLOAD"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "DUP2"
      },
      {
       "begin": 94,
       "end": 115,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "tag",
       "value": "22"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "JUMPDEST"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "SLOAD"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "PUSH",
       "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "AND"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "DUP2"
      },
      {
       "begin": 62,
       "end": 88,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "tag",
       "value": "25"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "JUMPDEST"
      },
      {
       "begin": 277,
       "end": 291,
       "name": "PUSH",
       "value": "3"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "DUP1"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "SLOAD"
      },
      {
       "begin": 294,
       "end": 298,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "FF"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "NOT"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "SWAP1"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "SWAP2"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "AND"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "DUP2"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "OR"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "SWAP1"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "SWAP2"
      },
      {
       "begin": 277,
       "end": 298,
       "name": "SSTORE"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 307,
       "end": 328,
       "name": "DUP1"
      },
      {
       "begin": 307,
       "end": 328,
       "name": "SLOAD"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "NOT"
      },
      {
       "begin": 307,
       "end": 328,
       "name": "AND"
      },
      {
       "begin": 307,
       "end": 328,
       "name": "PUSH",
       "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
      },
      {
       "begin": 307,
       "end": 328,
       "name": "DUP7"
      },
      {
       "begin": 307,
       "end": 328,
       "name": "AND"
      },
      {
       "begin": 307,
       "end": 328,
       "name": "OR"
      },
      {
       "begin": 307,
       "end": 328,
       "name": "SWAP1"
      },
      {
       "begin": 307,
       "end": 328,
       "name": "SSTORE"
      },
      {
       "begin": 336,
       "end": 354,
       "name": "DUP3"
      },
      {
       "begin": 336,
       "end": 354,
       "name": "SWAP1"
      },
      {
       "begin": 336,
       "end": 354,
       "name": "SSTORE"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 374,
       "end": 379,
       "name": "DUP2"
      },
      {
       "begin": 374,
       "end": 379,
       "name": "DUP1"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "MLOAD"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "PUSH [tag]",
       "value": "30"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "SWAP3"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "SWAP2"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "ADD"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "SWAP1"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "PUSH [tag]",
       "value": "31"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "JUMP",
       "value": "[in]"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "tag",
       "value": "30"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "JUMPDEST"
      },
      {
       "begin": 362,
       "end": 379,
       "name": "POP"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "tag",
       "value": "29"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "JUMPDEST"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "POP"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "POP"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "POP"
      },
      {
       "begin": 190,
       "end": 386,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "31"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SLOAD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "AND"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ISZERO"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "100"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "MUL"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SUB"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "AND"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DIV"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "MSTORE"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "KECCAK256"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "1F"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ADD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DIV"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ADD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "1F"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "LT"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "33"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "MLOAD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "FF"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "NOT"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "AND"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP4"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ADD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "OR"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP6"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SSTORE"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "35"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMP"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "33"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ADD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ADD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP6"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SSTORE"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ISZERO"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "35"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ADD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "34"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "GT"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ISZERO"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "35"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "MLOAD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SSTORE"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ADD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ADD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "34"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMP"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "35"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "32"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "36"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "37"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMP",
       "value": "[in]"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "36"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "POP"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "37"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "38"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "39"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP3"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "GT"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ISZERO"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "36"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "DUP2"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SSTORE"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "ADD"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "PUSH [tag]",
       "value": "39"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMP"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "40"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "POP"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMP"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "tag",
       "value": "38"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "SWAP1"
      },
      {
       "begin": 26,
       "end": 389,
       "name": "JUMP",
       "value": "[out]"
      }
     ]
    }
   }
  },
  "methodIdentifiers": {
   "calledFallback()": "390f6426",
   "onTokenTransfer(address,uint256,bytes)": "a4c0ed36",
   "sentValue()": "6dcb8d84",
   "tokenData()": "024fd650",
   "tokenSender()": "9898e18c"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.16+commit.d7661dd9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"tokenData\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"calledFallback\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"sentValue\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"tokenSender\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_sender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"onTokenTransfer\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":\"Token677ReceiverMock\"},\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/Token677ReceiverMock.sol\":{\"keccak256\":\"0xe7b10f3ff0089b08ccb7014f5747ab861c324e4411e5ce8f854deb8989b634de\",\"urls\":[\"bzzr://bf459dbac6fb05154e4bdc4a259c55399713a4eb0ec71e9e256b6817f28595d5\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Token677ReceiverMock.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Token677ReceiverMock = Token677ReceiverMock
