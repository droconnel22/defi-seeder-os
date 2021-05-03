'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const LinkReceiver = contract({
 "contractName": "LinkReceiver",
 "abi": [
  {
   "constant": false,
   "inputs": [],
   "name": "callbackWithoutWithdrawl",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_value",
     "type": "uint256"
    },
    {
     "name": "_from",
     "type": "address"
    },
    {
     "name": "_token",
     "type": "address"
    }
   ],
   "name": "callbackWithWithdrawl",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "tokensReceived",
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
   "constant": false,
   "inputs": [
    {
     "name": "_from",
     "type": "address"
    },
    {
     "name": "_amount",
     "type": "uint256"
    },
    {
     "name": "_data",
     "type": "bytes"
    }
   ],
   "name": "onTokenTransfer",
   "outputs": [
    {
     "name": "success",
     "type": "bool"
    }
   ],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "fallbackCalled",
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
   "name": "callDataCalled",
   "outputs": [
    {
     "name": "",
     "type": "bool"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  }
 ],
 "evm": {
  "assembly": "    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":62:742  contract LinkReceiver {... */\n  mstore(0x40, 0x60)\n  jumpi(tag_1, iszero(callvalue))\n  0x0\n  dup1\n  revert\ntag_1:\ntag_2:\n  dataSize(sub_0)\n  dup1\n  dataOffset(sub_0)\n  0x0\n  codecopy\n  0x0\n  return\nstop\n\nsub_0: assembly {\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":62:742  contract LinkReceiver {... */\n      mstore(0x40, 0x60)\n      jumpi(tag_1, iszero(calldatasize))\n      and(div(calldataload(0x0), 0x100000000000000000000000000000000000000000000000000000000), 0xffffffff)\n      0x43e94bd\n      dup2\n      eq\n      tag_2\n      jumpi\n      dup1\n      0x82017ea\n      eq\n      tag_3\n      jumpi\n      dup1\n      0x3bb0cc55\n      eq\n      tag_4\n      jumpi\n      dup1\n      0xa4c0ed36\n      eq\n      tag_5\n      jumpi\n      dup1\n      0xaa2c4b02\n      eq\n      tag_6\n      jumpi\n      dup1\n      0xe2994d43\n      eq\n      tag_7\n      jumpi\n    tag_1:\n      0x0\n      dup1\n      revert\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":445:513  function callbackWithoutWithdrawl() {... */\n    tag_2:\n      jumpi(tag_8, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_8:\n      tag_9\n      jump(tag_10)\n    tag_9:\n      stop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":517:739  function callbackWithWithdrawl(uint _value, address _from, address _token) {... */\n    tag_3:\n      jumpi(tag_11, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_11:\n      tag_9\n      calldataload(0x4)\n      sub(exp(0x2, 0xa0), 0x1)\n      calldataload(0x24)\n      dup2\n      and\n      swap1\n      calldataload(0x44)\n      and\n      jump(tag_13)\n    tag_12:\n      stop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":149:175  uint public tokensReceived */\n    tag_4:\n      jumpi(tag_14, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_14:\n      tag_15\n      jump(tag_16)\n    tag_15:\n      mload(0x40)\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":181:441  function onTokenTransfer(address _from, uint _amount, bytes _data)... */\n    tag_5:\n      jumpi(tag_17, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_17:\n      tag_18\n      0x4\n      dup1\n      calldataload\n      sub(exp(0x2, 0xa0), 0x1)\n      and\n      swap1\n      0x24\n      dup1\n      calldataload\n      swap2\n      swap1\n      0x64\n      swap1\n      calldataload(0x44)\n      swap1\n      dup2\n      add\n      swap1\n      dup4\n      add\n      calldataload\n      dup1\n      0x20\n      0x1f\n      dup3\n      add\n      dup2\n      swap1\n      div\n      dup2\n      mul\n      add\n      mload(0x40)\n      swap1\n      dup2\n      add\n      0x40\n      mstore\n      dup2\n      dup2\n      mstore\n      swap3\n      swap2\n      swap1\n      0x20\n      dup5\n      add\n      dup4\n      dup4\n      dup1\n      dup3\n      dup5\n      calldatacopy\n      pop\n      swap5\n      swap7\n      pop\n      tag_19\n      swap6\n      pop\n      pop\n      pop\n      pop\n      pop\n      pop\n      jump\n    tag_18:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":89:115  bool public fallbackCalled */\n    tag_6:\n      jumpi(tag_20, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_20:\n      tag_18\n      jump(tag_22)\n    tag_21:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":119:145  bool public callDataCalled */\n    tag_7:\n      jumpi(tag_23, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_23:\n      tag_18\n      jump(tag_25)\n    tag_24:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":445:513  function callbackWithoutWithdrawl() {... */\n    tag_10:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":487:501  callDataCalled */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":487:508  callDataCalled = true */\n      dup1\n      sload\n      not(0xff00)\n      and\n      0x100\n      or\n      swap1\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":445:513  function callbackWithoutWithdrawl() {... */\n    tag_26:\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":517:739  function callbackWithWithdrawl(uint _value, address _from, address _token) {... */\n    tag_13:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":625:640  linkERC20 token */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":598:619  callDataCalled = true */\n      dup1\n      sload\n      not(0xff00)\n      and\n      0x100\n      or\n      dup2\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":653:659  _token */\n      dup2\n      swap1\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":666:684  token.transferFrom */\n      dup3\n      and\n      swap1\n      0x23b872dd\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":685:690  _from */\n      dup6\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":692:696  this */\n      address\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":698:704  _value */\n      dup9\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":666:705  token.transferFrom(_from, this, _value) */\n      add(0x20, mload(0x40))\n      mstore\n      mload(0x40)\n      0x100000000000000000000000000000000000000000000000000000000\n      0xffffffff\n      dup7\n      and\n      mul\n      dup2\n      mstore\n      sub(exp(0x2, 0xa0), 0x1)\n      swap4\n      dup5\n      and\n      0x4\n      dup3\n      add\n      mstore\n      swap2\n      swap1\n      swap3\n      and\n      0x24\n      dup3\n      add\n      mstore\n      0x44\n      dup2\n      add\n      swap2\n      swap1\n      swap2\n      mstore\n      0x64\n      add\n      0x20\n      mload(0x40)\n      dup1\n      dup4\n      sub\n      dup2\n      0x0\n      dup8\n      dup1\n      extcodesize\n      iszero\n      iszero\n      tag_28\n      jumpi\n      0x0\n      dup1\n      revert\n    tag_28:\n      sub(gas, 0x2c6)\n      call\n      iszero\n      iszero\n      tag_29\n      jumpi\n      0x0\n      dup1\n      revert\n    tag_29:\n      pop\n      pop\n      pop\n      mload(0x40)\n      dup1\n      mload\n      pop\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":711:725  tokensReceived */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":711:734  tokensReceived = _value */\n      dup5\n      swap1\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":517:739  function callbackWithWithdrawl(uint _value, address _from, address _token) {... */\n    tag_27:\n      pop\n      pop\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":149:175  uint public tokensReceived */\n    tag_16:\n      sload(0x1)\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":181:441  function onTokenTransfer(address _from, uint _amount, bytes _data)... */\n    tag_19:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":266:278  bool success */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":286:307  fallbackCalled = true */\n      dup1\n      sload\n      not(0xff)\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":303:307  true */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":286:307  fallbackCalled = true */\n      or\n      dup2\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":266:278  bool success */\n      dup1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":317:322  _data */\n      dup3\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":317:329  _data.length */\n      mload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":317:333  _data.length > 0 */\n      gt\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":313:420  if (_data.length > 0) {... */\n      iszero\n      tag_36\n      jumpi\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":359:363  this */\n      address\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":351:377  address(this).delegatecall */\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":378:383  _data */\n      dup3\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":385:395  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":397:402  _from */\n      dup7\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":404:411  _amount */\n      dup7\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":351:412  address(this).delegatecall(_data, msg.sender, _from, _amount) */\n      mload(0x40)\n      dup1\n      dup6\n      dup1\n      mload\n      swap1\n      0x20\n      add\n      swap1\n      dup1\n      dup4\n      dup4\n        /* \"--CODEGEN--\":23:24   */\n      0x0\n        /* \"--CODEGEN--\":8:108   */\n    tag_32:\n        /* \"--CODEGEN--\":33:36   */\n      dup4\n        /* \"--CODEGEN--\":30:31   */\n      dup2\n        /* \"--CODEGEN--\":27:29   */\n      lt\n        /* \"--CODEGEN--\":8:108   */\n      iszero\n      tag_33\n      jumpi\n        /* \"--CODEGEN--\":99:100   */\n      dup1\n        /* \"--CODEGEN--\":94:97   */\n      dup3\n        /* \"--CODEGEN--\":90:93   */\n      add\n        /* \"--CODEGEN--\":84:89   */\n      mload\n        /* \"--CODEGEN--\":80:81   */\n      dup2\n        /* \"--CODEGEN--\":75:78   */\n      dup5\n        /* \"--CODEGEN--\":71:74   */\n      add\n        /* \"--CODEGEN--\":64:70   */\n      mstore\n        /* \"--CODEGEN--\":8:108   */\n    tag_34:\n        /* \"--CODEGEN--\":52:54   */\n      0x20\n        /* \"--CODEGEN--\":45:48   */\n      add\n        /* \"--CODEGEN--\":8:108   */\n      jump(tag_32)\n    tag_33:\n        /* \"--CODEGEN--\":12:26   */\n      pop\n        /* \"--CODEGEN--\":3:112   */\n      pop\n      pop\n      pop\n      swap1\n      pop\n      swap1\n      dup2\n      add\n      swap1\n      0x1f\n      and\n      dup1\n      iszero\n      tag_35\n      jumpi\n      dup1\n      dup3\n      sub\n      dup1\n      mload\n      0x1\n      dup4\n      0x20\n      sub\n      0x100\n      exp\n      sub\n      not\n      and\n      dup2\n      mstore\n      0x20\n      add\n      swap2\n      pop\n    tag_35:\n      pop\n      dup5\n      sub(exp(0x2, 0xa0), 0x1)\n      and\n      sub(exp(0x2, 0xa0), 0x1)\n      and\n      dup2\n      mstore\n      0x20\n      add\n      dup4\n      sub(exp(0x2, 0xa0), 0x1)\n      and\n      sub(exp(0x2, 0xa0), 0x1)\n      and\n      dup2\n      mstore\n      0x20\n      add\n      dup3\n      dup2\n      mstore\n      0x20\n      add\n      swap5\n      pop\n      pop\n      pop\n      pop\n      pop\n      0x0\n      mload(0x40)\n      dup1\n      dup4\n      sub\n      dup2\n      dup6\n      sub(gas, 0x646e)\n      delegatecall\n      swap2\n      pop\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":343:413  require(address(this).delegatecall(_data, msg.sender, _from, _amount)) */\n      iszero\n      iszero\n      tag_36\n      jumpi\n      0x0\n      dup1\n      revert\n    tag_36:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":313:420  if (_data.length > 0) {... */\n    tag_31:\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":432:436  true */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":181:441  function onTokenTransfer(address _from, uint _amount, bytes _data)... */\n    tag_30:\n      swap4\n      swap3\n      pop\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":89:115  bool public fallbackCalled */\n    tag_22:\n      and(0xff, sload(0x0))\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":119:145  bool public callDataCalled */\n    tag_25:\n      sload(0x0)\n      0x100\n      swap1\n      div\n      0xff\n      and\n      dup2\n      jump\t// out\n\n    auxdata: 0xa165627a7a7230582072d1702122bcc61e69e56b06b9c39f8e9d3160577df7903c0d51e67a0886f9590029\n}\n",
  "bytecode": {
   "linkReferences": {},
   "object": "0x6060604052341561000f57600080fd5b5b6103a18061001f6000396000f300606060405236156100755763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663043e94bd811461007a578063082017ea1461008f5780633bb0cc55146100b9578063a4c0ed36146100de578063aa2c4b0214610157578063e2994d431461017e575b600080fd5b341561008557600080fd5b61008d6101a5565b005b341561009a57600080fd5b61008d600435600160a060020a03602435811690604435166101b7565b005b34156100c457600080fd5b6100cc610275565b60405190815260200160405180910390f35b34156100e957600080fd5b61014360048035600160a060020a03169060248035919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061027b95505050505050565b604051901515815260200160405180910390f35b341561016257600080fd5b61014361035e565b604051901515815260200160405180910390f35b341561018957600080fd5b610143610367565b604051901515815260200160405180910390f35b6000805461ff0019166101001790555b565b6000805461ff0019166101001781558190600160a060020a038216906323b872dd90859030908890604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561024e57600080fd5b6102c65a03f1151561025f57600080fd5b5050506040518051505060018490555b50505050565b60015481565b6000805460ff1916600117815580825111156103525730600160a060020a03168233868660405180858051906020019080838360005b838110156102ca5780820151818401525b6020016102b1565b50505050905090810190601f1680156102f75780820380516001836020036101000a031916815260200191505b5084600160a060020a0316600160a060020a0316815260200183600160a060020a0316600160a060020a031681526020018281526020019450505050506000604051808303818561646e5a03f4915050151561035257600080fd5b5b5060015b9392505050565b60005460ff1681565b600054610100900460ff16815600a165627a7a7230582072d1702122bcc61e69e56b06b9c39f8e9d3160577df7903c0d51e67a0886f9590029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST PUSH2 0x3A1 DUP1 PUSH2 0x1F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE CALLDATASIZE ISZERO PUSH2 0x75 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x43E94BD DUP2 EQ PUSH2 0x7A JUMPI DUP1 PUSH4 0x82017EA EQ PUSH2 0x8F JUMPI DUP1 PUSH4 0x3BB0CC55 EQ PUSH2 0xB9 JUMPI DUP1 PUSH4 0xA4C0ED36 EQ PUSH2 0xDE JUMPI DUP1 PUSH4 0xAA2C4B02 EQ PUSH2 0x157 JUMPI DUP1 PUSH4 0xE2994D43 EQ PUSH2 0x17E JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x85 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x8D PUSH2 0x1A5 JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0x9A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x8D PUSH1 0x4 CALLDATALOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x24 CALLDATALOAD DUP2 AND SWAP1 PUSH1 0x44 CALLDATALOAD AND PUSH2 0x1B7 JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0xC4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xCC PUSH2 0x275 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xE9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x143 PUSH1 0x4 DUP1 CALLDATALOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 PUSH1 0x24 DUP1 CALLDATALOAD SWAP2 SWAP1 PUSH1 0x64 SWAP1 PUSH1 0x44 CALLDATALOAD SWAP1 DUP2 ADD SWAP1 DUP4 ADD CALLDATALOAD DUP1 PUSH1 0x20 PUSH1 0x1F DUP3 ADD DUP2 SWAP1 DIV DUP2 MUL ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 SWAP1 PUSH1 0x20 DUP5 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP7 POP PUSH2 0x27B SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x162 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x143 PUSH2 0x35E JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x189 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x143 PUSH2 0x367 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH2 0xFF00 NOT AND PUSH2 0x100 OR SWAP1 SSTORE JUMPDEST JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH2 0xFF00 NOT AND PUSH2 0x100 OR DUP2 SSTORE DUP2 SWAP1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND SWAP1 PUSH4 0x23B872DD SWAP1 DUP6 SWAP1 ADDRESS SWAP1 DUP9 SWAP1 PUSH1 0x40 MLOAD PUSH1 0x20 ADD MSTORE PUSH1 0x40 MLOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH4 0xFFFFFFFF DUP7 AND MUL DUP2 MSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP4 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE SWAP2 SWAP1 SWAP3 AND PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x44 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x64 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO ISZERO PUSH2 0x24E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x2C6 GAS SUB CALL ISZERO ISZERO PUSH2 0x25F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP POP POP PUSH1 0x40 MLOAD DUP1 MLOAD POP POP PUSH1 0x1 DUP5 SWAP1 SSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR DUP2 SSTORE DUP1 DUP3 MLOAD GT ISZERO PUSH2 0x352 JUMPI ADDRESS PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP3 CALLER DUP7 DUP7 PUSH1 0x40 MLOAD DUP1 DUP6 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x2CA JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE JUMPDEST PUSH1 0x20 ADD PUSH2 0x2B1 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x2F7 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP DUP5 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD DUP4 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP5 POP POP POP POP POP PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 PUSH2 0x646E GAS SUB DELEGATECALL SWAP2 POP POP ISZERO ISZERO PUSH2 0x352 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST POP PUSH1 0x1 JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH2 0x100 SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH19 0xD1702122BCC61E69E56B06B9C39F8E9D316057 PUSH30 0xF7903C0D51E67A0886F95900290000000000000000000000000000000000 ",
   "sourceMap": "62:680:5:-;;;;;;;;;;;;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x606060405236156100755763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663043e94bd811461007a578063082017ea1461008f5780633bb0cc55146100b9578063a4c0ed36146100de578063aa2c4b0214610157578063e2994d431461017e575b600080fd5b341561008557600080fd5b61008d6101a5565b005b341561009a57600080fd5b61008d600435600160a060020a03602435811690604435166101b7565b005b34156100c457600080fd5b6100cc610275565b60405190815260200160405180910390f35b34156100e957600080fd5b61014360048035600160a060020a03169060248035919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061027b95505050505050565b604051901515815260200160405180910390f35b341561016257600080fd5b61014361035e565b604051901515815260200160405180910390f35b341561018957600080fd5b610143610367565b604051901515815260200160405180910390f35b6000805461ff0019166101001790555b565b6000805461ff0019166101001781558190600160a060020a038216906323b872dd90859030908890604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561024e57600080fd5b6102c65a03f1151561025f57600080fd5b5050506040518051505060018490555b50505050565b60015481565b6000805460ff1916600117815580825111156103525730600160a060020a03168233868660405180858051906020019080838360005b838110156102ca5780820151818401525b6020016102b1565b50505050905090810190601f1680156102f75780820380516001836020036101000a031916815260200191505b5084600160a060020a0316600160a060020a0316815260200183600160a060020a0316600160a060020a031681526020018281526020019450505050506000604051808303818561646e5a03f4915050151561035257600080fd5b5b5060015b9392505050565b60005460ff1681565b600054610100900460ff16815600a165627a7a7230582072d1702122bcc61e69e56b06b9c39f8e9d3160577df7903c0d51e67a0886f9590029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE CALLDATASIZE ISZERO PUSH2 0x75 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x43E94BD DUP2 EQ PUSH2 0x7A JUMPI DUP1 PUSH4 0x82017EA EQ PUSH2 0x8F JUMPI DUP1 PUSH4 0x3BB0CC55 EQ PUSH2 0xB9 JUMPI DUP1 PUSH4 0xA4C0ED36 EQ PUSH2 0xDE JUMPI DUP1 PUSH4 0xAA2C4B02 EQ PUSH2 0x157 JUMPI DUP1 PUSH4 0xE2994D43 EQ PUSH2 0x17E JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x85 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x8D PUSH2 0x1A5 JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0x9A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x8D PUSH1 0x4 CALLDATALOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x24 CALLDATALOAD DUP2 AND SWAP1 PUSH1 0x44 CALLDATALOAD AND PUSH2 0x1B7 JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0xC4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xCC PUSH2 0x275 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xE9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x143 PUSH1 0x4 DUP1 CALLDATALOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 PUSH1 0x24 DUP1 CALLDATALOAD SWAP2 SWAP1 PUSH1 0x64 SWAP1 PUSH1 0x44 CALLDATALOAD SWAP1 DUP2 ADD SWAP1 DUP4 ADD CALLDATALOAD DUP1 PUSH1 0x20 PUSH1 0x1F DUP3 ADD DUP2 SWAP1 DIV DUP2 MUL ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 SWAP1 PUSH1 0x20 DUP5 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP7 POP PUSH2 0x27B SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x162 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x143 PUSH2 0x35E JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x189 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x143 PUSH2 0x367 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH2 0xFF00 NOT AND PUSH2 0x100 OR SWAP1 SSTORE JUMPDEST JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH2 0xFF00 NOT AND PUSH2 0x100 OR DUP2 SSTORE DUP2 SWAP1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND SWAP1 PUSH4 0x23B872DD SWAP1 DUP6 SWAP1 ADDRESS SWAP1 DUP9 SWAP1 PUSH1 0x40 MLOAD PUSH1 0x20 ADD MSTORE PUSH1 0x40 MLOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH4 0xFFFFFFFF DUP7 AND MUL DUP2 MSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP4 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE SWAP2 SWAP1 SWAP3 AND PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x44 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x64 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO ISZERO PUSH2 0x24E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x2C6 GAS SUB CALL ISZERO ISZERO PUSH2 0x25F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP POP POP PUSH1 0x40 MLOAD DUP1 MLOAD POP POP PUSH1 0x1 DUP5 SWAP1 SSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR DUP2 SSTORE DUP1 DUP3 MLOAD GT ISZERO PUSH2 0x352 JUMPI ADDRESS PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP3 CALLER DUP7 DUP7 PUSH1 0x40 MLOAD DUP1 DUP6 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x2CA JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE JUMPDEST PUSH1 0x20 ADD PUSH2 0x2B1 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x2F7 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP DUP5 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD DUP4 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP5 POP POP POP POP POP PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 PUSH2 0x646E GAS SUB DELEGATECALL SWAP2 POP POP ISZERO ISZERO PUSH2 0x352 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST POP PUSH1 0x1 JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH2 0x100 SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH19 0xD1702122BCC61E69E56B06B9C39F8E9D316057 PUSH30 0xF7903C0D51E67A0886F95900290000000000000000000000000000000000 ",
   "sourceMap": "62:680:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;445:68;;;;;;;;;;;;;;517:222;;;;;;;;;;;;-1:-1:-1;;;;;517:222:5;;;;;;;;;;;;149:26;;;;;;;;;;;;;;;;;;;;;;;;;;;181:260;;;;;;;;;;;;;-1:-1:-1;;;;;181:260:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;181:260:5;;-1:-1:-1;181:260:5;;-1:-1:-1;;;;;;181:260:5;;;;;;;;;;;;;;;;;;89:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;119;;;;;;;;;;;;;;;;;;;;;;;;;;;;;445:68;487:14;:21;;-1:-1:-1;;487:21:5;;;;;445:68;:::o;517:222::-;625:15;598:21;;-1:-1:-1;;598:21:5;;;;;653:6;;-1:-1:-1;;;;;666:18:5;;;;;685:5;;692:4;;698:6;;666:39;;;;;;;;;;;;;;-1:-1:-1;;;;;666:39:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;711:14:5;:23;;;517:222;;;;;:::o;149:26::-;;;;:::o;181:260::-;266:12;286:21;;-1:-1:-1;;286:21:5;303:4;286:21;;;266:12;317:5;:12;:16;313:107;;;359:4;-1:-1:-1;;;;;351:26:5;378:5;385:10;397:5;404:7;351:61;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;8:100;52:2;45:3;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1;;;;;3:109;-1:-1;;;;;3:109;;;;;;-1:-1;;;;;3:109;-1:-1;;;;;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;343:70:5;;;;;;;;313:107;-1:-1:-1;432:4:5;181:260;;;;;;:::o;89:26::-;;;;;;:::o;119:::-;;;;;;;;;:::o"
  },
  "gasEstimates": {
   "creation": {
    "codeDepositCost": "185800",
    "executionCost": "228",
    "totalCost": "186028"
   },
   "external": {
    "callDataCalled()": "503",
    "callbackWithWithdrawl(uint256,address,address)": "infinite",
    "callbackWithoutWithdrawl()": "20347",
    "fallbackCalled()": "470",
    "onTokenTransfer(address,uint256,bytes)": "infinite",
    "tokensReceived()": "414"
   }
  },
  "legacyAssembly": {
   ".code": [
    {
     "begin": 62,
     "end": 742,
     "name": "PUSH",
     "value": "60"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "PUSH",
     "value": "40"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "MSTORE"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "CALLVALUE"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "ISZERO"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "PUSH [tag]",
     "value": "1"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "JUMPI"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "DUP1"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "REVERT"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "tag",
     "value": "1"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "JUMPDEST"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "tag",
     "value": "2"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "JUMPDEST"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "PUSH #[$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "DUP1"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "PUSH [$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "CODECOPY"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 62,
     "end": 742,
     "name": "RETURN"
    }
   ],
   ".data": {
    "0": {
     ".auxdata": "a165627a7a7230582072d1702122bcc61e69e56b06b9c39f8e9d3160577df7903c0d51e67a0886f9590029",
     ".code": [
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "60"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "MSTORE"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "CALLDATASIZE"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "ISZERO"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH [tag]",
       "value": "1"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "JUMPI"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "100000000000000000000000000000000000000000000000000000000"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "DIV"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "AND"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "43E94BD"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "DUP2"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "EQ"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH [tag]",
       "value": "2"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "JUMPI"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "DUP1"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "82017EA"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "EQ"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH [tag]",
       "value": "3"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "JUMPI"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "DUP1"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "3BB0CC55"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "EQ"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH [tag]",
       "value": "4"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "JUMPI"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "DUP1"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "A4C0ED36"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "EQ"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH [tag]",
       "value": "5"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "JUMPI"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "DUP1"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "AA2C4B02"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "EQ"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH [tag]",
       "value": "6"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "JUMPI"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "DUP1"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "E2994D43"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "EQ"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH [tag]",
       "value": "7"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "JUMPI"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "tag",
       "value": "1"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "JUMPDEST"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "DUP1"
      },
      {
       "begin": 62,
       "end": 742,
       "name": "REVERT"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "tag",
       "value": "2"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "JUMPDEST"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "CALLVALUE"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "ISZERO"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "PUSH [tag]",
       "value": "8"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "JUMPI"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "DUP1"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "REVERT"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "tag",
       "value": "8"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "JUMPDEST"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "PUSH [tag]",
       "value": "9"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "PUSH [tag]",
       "value": "10"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "JUMP"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "tag",
       "value": "9"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "JUMPDEST"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "STOP"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "tag",
       "value": "3"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "JUMPDEST"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "CALLVALUE"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "ISZERO"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "PUSH [tag]",
       "value": "11"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "JUMPI"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "DUP1"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "REVERT"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "tag",
       "value": "11"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "JUMPDEST"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "PUSH [tag]",
       "value": "9"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "CALLDATALOAD"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "A0"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "EXP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "SUB"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "DUP2"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "AND"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "SWAP1"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "PUSH",
       "value": "44"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "AND"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "PUSH [tag]",
       "value": "13"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "JUMP"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "tag",
       "value": "12"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "JUMPDEST"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "STOP"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "tag",
       "value": "4"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "JUMPDEST"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "CALLVALUE"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "ISZERO"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "PUSH [tag]",
       "value": "14"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "JUMPI"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "DUP1"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "REVERT"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "tag",
       "value": "14"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "JUMPDEST"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "PUSH [tag]",
       "value": "15"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "PUSH [tag]",
       "value": "16"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "JUMP"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "tag",
       "value": "15"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "JUMPDEST"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "MLOAD"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "SWAP1"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "DUP2"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "MSTORE"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "ADD"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "MLOAD"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "DUP1"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "SWAP2"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "SUB"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "SWAP1"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "RETURN"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "tag",
       "value": "5"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "JUMPDEST"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "CALLVALUE"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ISZERO"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH [tag]",
       "value": "17"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "JUMPI"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "REVERT"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "tag",
       "value": "17"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "JUMPDEST"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH [tag]",
       "value": "18"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "CALLDATALOAD"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "A0"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "EXP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "SUB"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "AND"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "64"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "44"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ADD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP4"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ADD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "1F"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP3"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ADD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DIV"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "MUL"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ADD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "MLOAD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ADD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "MSTORE"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "MSTORE"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP3"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP5"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ADD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP4"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP4"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP3"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP5"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "CALLDATACOPY"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP5"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP7"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH [tag]",
       "value": "19"
      },
      {
       "begin": 181,
       "end": 441,
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
       "begin": 181,
       "end": 441,
       "name": "JUMP"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "tag",
       "value": "18"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "JUMPDEST"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "MLOAD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ISZERO"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ISZERO"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "MSTORE"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "ADD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "MLOAD"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "DUP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP2"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SUB"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "RETURN"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "tag",
       "value": "6"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "JUMPDEST"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "CALLVALUE"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "ISZERO"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "PUSH [tag]",
       "value": "20"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "JUMPI"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "DUP1"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "REVERT"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "tag",
       "value": "20"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "JUMPDEST"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "PUSH [tag]",
       "value": "18"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "PUSH [tag]",
       "value": "22"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "JUMP"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "tag",
       "value": "21"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "JUMPDEST"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "MLOAD"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "SWAP1"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "ISZERO"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "ISZERO"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "DUP2"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "MSTORE"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "ADD"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "MLOAD"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "DUP1"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "SWAP2"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "SUB"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "SWAP1"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "RETURN"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "tag",
       "value": "7"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "JUMPDEST"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "CALLVALUE"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "ISZERO"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH [tag]",
       "value": "23"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "JUMPI"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "DUP1"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "REVERT"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "tag",
       "value": "23"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "JUMPDEST"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH [tag]",
       "value": "18"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH [tag]",
       "value": "25"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "JUMP"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "tag",
       "value": "24"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "JUMPDEST"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "MLOAD"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "SWAP1"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "ISZERO"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "ISZERO"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "DUP2"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "MSTORE"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "ADD"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "MLOAD"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "DUP1"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "SWAP2"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "SUB"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "SWAP1"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "RETURN"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "tag",
       "value": "10"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "JUMPDEST"
      },
      {
       "begin": 487,
       "end": 501,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 487,
       "end": 508,
       "name": "DUP1"
      },
      {
       "begin": 487,
       "end": 508,
       "name": "SLOAD"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "FF00"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "NOT"
      },
      {
       "begin": 487,
       "end": 508,
       "name": "AND"
      },
      {
       "begin": 487,
       "end": 508,
       "name": "PUSH",
       "value": "100"
      },
      {
       "begin": 487,
       "end": 508,
       "name": "OR"
      },
      {
       "begin": 487,
       "end": 508,
       "name": "SWAP1"
      },
      {
       "begin": 487,
       "end": 508,
       "name": "SSTORE"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "tag",
       "value": "26"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "JUMPDEST"
      },
      {
       "begin": 445,
       "end": 513,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "tag",
       "value": "13"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "JUMPDEST"
      },
      {
       "begin": 625,
       "end": 640,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 598,
       "end": 619,
       "name": "DUP1"
      },
      {
       "begin": 598,
       "end": 619,
       "name": "SLOAD"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "FF00"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "NOT"
      },
      {
       "begin": 598,
       "end": 619,
       "name": "AND"
      },
      {
       "begin": 598,
       "end": 619,
       "name": "PUSH",
       "value": "100"
      },
      {
       "begin": 598,
       "end": 619,
       "name": "OR"
      },
      {
       "begin": 598,
       "end": 619,
       "name": "DUP2"
      },
      {
       "begin": 598,
       "end": 619,
       "name": "SSTORE"
      },
      {
       "begin": 653,
       "end": 659,
       "name": "DUP2"
      },
      {
       "begin": 653,
       "end": 659,
       "name": "SWAP1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "A0"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "EXP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "SUB"
      },
      {
       "begin": 666,
       "end": 684,
       "name": "DUP3"
      },
      {
       "begin": 666,
       "end": 684,
       "name": "AND"
      },
      {
       "begin": 666,
       "end": 684,
       "name": "SWAP1"
      },
      {
       "begin": 666,
       "end": 684,
       "name": "PUSH",
       "value": "23B872DD"
      },
      {
       "begin": 666,
       "end": 684,
       "name": "SWAP1"
      },
      {
       "begin": 685,
       "end": 690,
       "name": "DUP6"
      },
      {
       "begin": 685,
       "end": 690,
       "name": "SWAP1"
      },
      {
       "begin": 692,
       "end": 696,
       "name": "ADDRESS"
      },
      {
       "begin": 692,
       "end": 696,
       "name": "SWAP1"
      },
      {
       "begin": 698,
       "end": 704,
       "name": "DUP9"
      },
      {
       "begin": 698,
       "end": 704,
       "name": "SWAP1"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MLOAD"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "ADD"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MSTORE"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MLOAD"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "100000000000000000000000000000000000000000000000000000000"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP7"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "AND"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MUL"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP2"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MSTORE"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "A0"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "EXP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "SUB"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "SWAP4"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP5"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "AND"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP3"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "ADD"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MSTORE"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "SWAP2"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "SWAP1"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "SWAP3"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "AND"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP3"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "ADD"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MSTORE"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "44"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP2"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "ADD"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "SWAP2"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "SWAP1"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "SWAP2"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MSTORE"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "64"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "ADD"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MLOAD"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP1"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP4"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "SUB"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP2"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP8"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP1"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "EXTCODESIZE"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "ISZERO"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "ISZERO"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH [tag]",
       "value": "28"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "JUMPI"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP1"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "REVERT"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "tag",
       "value": "28"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "JUMPDEST"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "2C6"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "GAS"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "SUB"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "CALL"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "ISZERO"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "ISZERO"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH [tag]",
       "value": "29"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "JUMPI"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP1"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "REVERT"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "tag",
       "value": "29"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "JUMPDEST"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "POP"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "POP"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "POP"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MLOAD"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "DUP1"
      },
      {
       "begin": 666,
       "end": 705,
       "name": "MLOAD"
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
       "begin": 711,
       "end": 725,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 711,
       "end": 734,
       "name": "DUP5"
      },
      {
       "begin": 711,
       "end": 734,
       "name": "SWAP1"
      },
      {
       "begin": 711,
       "end": 734,
       "name": "SSTORE"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "tag",
       "value": "27"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "JUMPDEST"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "POP"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "POP"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "POP"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "POP"
      },
      {
       "begin": 517,
       "end": 739,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "tag",
       "value": "16"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "JUMPDEST"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "SLOAD"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "DUP2"
      },
      {
       "begin": 149,
       "end": 175,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "tag",
       "value": "19"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "JUMPDEST"
      },
      {
       "begin": 266,
       "end": 278,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 286,
       "end": 307,
       "name": "DUP1"
      },
      {
       "begin": 286,
       "end": 307,
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
       "begin": 286,
       "end": 307,
       "name": "AND"
      },
      {
       "begin": 303,
       "end": 307,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 286,
       "end": 307,
       "name": "OR"
      },
      {
       "begin": 286,
       "end": 307,
       "name": "DUP2"
      },
      {
       "begin": 286,
       "end": 307,
       "name": "SSTORE"
      },
      {
       "begin": 266,
       "end": 278,
       "name": "DUP1"
      },
      {
       "begin": 317,
       "end": 322,
       "name": "DUP3"
      },
      {
       "begin": 317,
       "end": 329,
       "name": "MLOAD"
      },
      {
       "begin": 317,
       "end": 333,
       "name": "GT"
      },
      {
       "begin": 313,
       "end": 420,
       "name": "ISZERO"
      },
      {
       "begin": 313,
       "end": 420,
       "name": "PUSH [tag]",
       "value": "36"
      },
      {
       "begin": 313,
       "end": 420,
       "name": "JUMPI"
      },
      {
       "begin": 359,
       "end": 363,
       "name": "ADDRESS"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "A0"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "EXP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "SUB"
      },
      {
       "begin": 351,
       "end": 377,
       "name": "AND"
      },
      {
       "begin": 378,
       "end": 383,
       "name": "DUP3"
      },
      {
       "begin": 385,
       "end": 395,
       "name": "CALLER"
      },
      {
       "begin": 397,
       "end": 402,
       "name": "DUP7"
      },
      {
       "begin": 404,
       "end": 411,
       "name": "DUP7"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "MLOAD"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "DUP1"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "DUP6"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "DUP1"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "MLOAD"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "SWAP1"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "ADD"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "SWAP1"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "DUP1"
      },
      {
       "begin": 351,
       "end": 412,
       "name": "DUP4"
      },
      {
       "begin": 351,
       "end": 412,
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
       "value": "32"
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
       "value": "33"
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
       "value": "34"
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
       "value": "32"
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
       "value": "33"
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
       "value": "35"
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
       "value": "35"
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
       "name": "DUP5"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "A0"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "EXP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "SUB"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "AND"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "A0"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "EXP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "SUB"
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
       "name": "DUP4"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "A0"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "EXP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "SUB"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "AND"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "A0"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "EXP"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "SUB"
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
       "name": "DUP3"
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
       "name": "SWAP5"
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
       "value": "0"
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
       "name": "DUP4"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SUB"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP2"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DUP6"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "PUSH",
       "value": "646E"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "GAS"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "SUB"
      },
      {
       "begin": 3,
       "end": 112,
       "name": "DELEGATECALL"
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
       "name": "POP"
      },
      {
       "begin": 343,
       "end": 413,
       "name": "ISZERO"
      },
      {
       "begin": 343,
       "end": 413,
       "name": "ISZERO"
      },
      {
       "begin": 343,
       "end": 413,
       "name": "PUSH [tag]",
       "value": "36"
      },
      {
       "begin": 343,
       "end": 413,
       "name": "JUMPI"
      },
      {
       "begin": 343,
       "end": 413,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 343,
       "end": 413,
       "name": "DUP1"
      },
      {
       "begin": 343,
       "end": 413,
       "name": "REVERT"
      },
      {
       "begin": 343,
       "end": 413,
       "name": "tag",
       "value": "36"
      },
      {
       "begin": 343,
       "end": 413,
       "name": "JUMPDEST"
      },
      {
       "begin": 313,
       "end": 420,
       "name": "tag",
       "value": "31"
      },
      {
       "begin": 313,
       "end": 420,
       "name": "JUMPDEST"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 432,
       "end": 436,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "tag",
       "value": "30"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "JUMPDEST"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP4"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "SWAP3"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "POP"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "POP"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "POP"
      },
      {
       "begin": 181,
       "end": 441,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "tag",
       "value": "22"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "JUMPDEST"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "SLOAD"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "PUSH",
       "value": "FF"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "AND"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "DUP2"
      },
      {
       "begin": 89,
       "end": 115,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "tag",
       "value": "25"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "JUMPDEST"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "SLOAD"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH",
       "value": "100"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "SWAP1"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "DIV"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "PUSH",
       "value": "FF"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "AND"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "DUP2"
      },
      {
       "begin": 119,
       "end": 145,
       "name": "JUMP",
       "value": "[out]"
      }
     ]
    }
   }
  },
  "methodIdentifiers": {
   "callDataCalled()": "e2994d43",
   "callbackWithWithdrawl(uint256,address,address)": "082017ea",
   "callbackWithoutWithdrawl()": "043e94bd",
   "fallbackCalled()": "aa2c4b02",
   "onTokenTransfer(address,uint256,bytes)": "a4c0ed36",
   "tokensReceived()": "3bb0cc55"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.16+commit.d7661dd9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"callbackWithoutWithdrawl\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"callbackWithWithdrawl\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"tokensReceived\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"onTokenTransfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"fallbackCalled\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"callDataCalled\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":\"LinkReceiver\"},\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/mocks/LinkReceiver.sol\":{\"keccak256\":\"0x8a834933a2e5aad8f32537789749bcb2f6fa2c3258c159c2483856b478b0b098\",\"urls\":[\"bzzr://a20b29c57b6a59ddf1860d855d5a18627ac13754964248d06007618f56007323\"]},\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkERC20.sol\":{\"keccak256\":\"0xcc5638b5697c9250838e0de415cfeb8fd9ff188c0b5509f882b64cad857300aa\",\"urls\":[\"bzzr://cce9c5b2e016977aa115e0ec43e4759aa6c5e328c5a0e0188251a098b5e17485\"]},\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkERC20Basic.sol\":{\"keccak256\":\"0x48709e79e775c71bf47d41d8521be253566652528b427a95e9322583576c6d82\",\"urls\":[\"bzzr://1e3c03d046f795b8980838cde12502477cbcbd0e157cf43e43e75dc3af903d8c\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('LinkReceiver.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.LinkReceiver = LinkReceiver
