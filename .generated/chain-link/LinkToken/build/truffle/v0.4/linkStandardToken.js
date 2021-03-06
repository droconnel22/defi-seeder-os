'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const linkStandardToken = contract({
 "contractName": "linkStandardToken",
 "abi": [
  {
   "constant": false,
   "inputs": [
    {
     "name": "_spender",
     "type": "address"
    },
    {
     "name": "_value",
     "type": "uint256"
    }
   ],
   "name": "approve",
   "outputs": [
    {
     "name": "",
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
   "name": "totalSupply",
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
     "name": "_to",
     "type": "address"
    },
    {
     "name": "_value",
     "type": "uint256"
    }
   ],
   "name": "transferFrom",
   "outputs": [
    {
     "name": "",
     "type": "bool"
    }
   ],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_spender",
     "type": "address"
    },
    {
     "name": "_subtractedValue",
     "type": "uint256"
    }
   ],
   "name": "decreaseApproval",
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
   "inputs": [
    {
     "name": "_owner",
     "type": "address"
    }
   ],
   "name": "balanceOf",
   "outputs": [
    {
     "name": "balance",
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
     "name": "_to",
     "type": "address"
    },
    {
     "name": "_value",
     "type": "uint256"
    }
   ],
   "name": "transfer",
   "outputs": [
    {
     "name": "",
     "type": "bool"
    }
   ],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_spender",
     "type": "address"
    },
    {
     "name": "_addedValue",
     "type": "uint256"
    }
   ],
   "name": "increaseApproval",
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
   "inputs": [
    {
     "name": "_owner",
     "type": "address"
    },
    {
     "name": "_spender",
     "type": "address"
    }
   ],
   "name": "allowance",
   "outputs": [
    {
     "name": "remaining",
     "type": "uint256"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "owner",
     "type": "address"
    },
    {
     "indexed": true,
     "name": "spender",
     "type": "address"
    },
    {
     "indexed": false,
     "name": "value",
     "type": "uint256"
    }
   ],
   "name": "Approval",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "from",
     "type": "address"
    },
    {
     "indexed": true,
     "name": "to",
     "type": "address"
    },
    {
     "indexed": false,
     "name": "value",
     "type": "uint256"
    }
   ],
   "name": "Transfer",
   "type": "event"
  }
 ],
 "evm": {
  "assembly": "    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":353:3017  contract linkStandardToken is linkERC20, linkBasicToken {... */\n  mstore(0x40, 0x60)\n  jumpi(tag_1, iszero(callvalue))\n  0x0\n  dup1\n  revert\ntag_1:\ntag_2:\n  dataSize(sub_0)\n  dup1\n  dataOffset(sub_0)\n  0x0\n  codecopy\n  0x0\n  return\nstop\n\nsub_0: assembly {\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":353:3017  contract linkStandardToken is linkERC20, linkBasicToken {... */\n      mstore(0x40, 0x60)\n      jumpi(tag_1, iszero(calldatasize))\n      and(div(calldataload(0x0), 0x100000000000000000000000000000000000000000000000000000000), 0xffffffff)\n      0x95ea7b3\n      dup2\n      eq\n      tag_2\n      jumpi\n      dup1\n      0x18160ddd\n      eq\n      tag_3\n      jumpi\n      dup1\n      0x23b872dd\n      eq\n      tag_4\n      jumpi\n      dup1\n      0x66188463\n      eq\n      tag_5\n      jumpi\n      dup1\n      0x70a08231\n      eq\n      tag_6\n      jumpi\n      dup1\n      0xa9059cbb\n      eq\n      tag_7\n      jumpi\n      dup1\n      0xd73dd623\n      eq\n      tag_8\n      jumpi\n      dup1\n      0xdd62ed3e\n      eq\n      tag_9\n      jumpi\n    tag_1:\n      0x0\n      dup1\n      revert\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1469:1645  function approve(address _spender, uint256 _value) returns (bool) {... */\n    tag_2:\n      jumpi(tag_10, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_10:\n      tag_11\n      and(calldataload(0x4), sub(exp(0x2, 0xa0), 0x1))\n      calldataload(0x24)\n      jump(tag_12)\n    tag_11:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkERC20Basic.sol\":183:209  uint256 public totalSupply */\n    tag_3:\n      jumpi(tag_13, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_13:\n      tag_14\n      jump(tag_15)\n    tag_14:\n      mload(0x40)\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":748:1237  function transferFrom(address _from, address _to, uint256 _value) returns (bool) {... */\n    tag_4:\n      jumpi(tag_16, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_16:\n      tag_11\n      sub(exp(0x2, 0xa0), 0x1)\n      calldataload(0x4)\n      dup2\n      and\n      swap1\n      calldataload(0x24)\n      and\n      calldataload(0x44)\n      jump(tag_18)\n    tag_17:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2609:3014  function decreaseApproval (address _spender, uint _subtractedValue) ... */\n    tag_5:\n      jumpi(tag_19, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_19:\n      tag_11\n      and(calldataload(0x4), sub(exp(0x2, 0xa0), 0x1))\n      calldataload(0x24)\n      jump(tag_21)\n    tag_20:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":892:996  function balanceOf(address _owner) constant returns (uint256 balance) {... */\n    tag_6:\n      jumpi(tag_22, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_22:\n      tag_14\n      and(calldataload(0x4), sub(exp(0x2, 0xa0), 0x1))\n      jump(tag_24)\n    tag_23:\n      mload(0x40)\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":458:689  function transfer(address _to, uint256 _value) returns (bool) {... */\n    tag_7:\n      jumpi(tag_25, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_25:\n      tag_11\n      and(calldataload(0x4), sub(exp(0x2, 0xa0), 0x1))\n      calldataload(0x24)\n      jump(tag_27)\n    tag_26:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2341:2605  function increaseApproval (address _spender, uint _addedValue) ... */\n    tag_8:\n      jumpi(tag_28, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_28:\n      tag_11\n      and(calldataload(0x4), sub(exp(0x2, 0xa0), 0x1))\n      calldataload(0x24)\n      jump(tag_30)\n    tag_29:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1964:2097  function allowance(address _owner, address _spender) constant returns (uint256 remaining) {... */\n    tag_9:\n      jumpi(tag_31, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_31:\n      tag_14\n      sub(exp(0x2, 0xa0), 0x1)\n      calldataload(0x4)\n      dup2\n      and\n      swap1\n      calldataload(0x24)\n      and\n      jump(tag_33)\n    tag_32:\n      mload(0x40)\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1469:1645  function approve(address _spender, uint256 _value) returns (bool) {... */\n    tag_12:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1549:1559  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1541:1560  allowed[msg.sender] */\n      dup2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1529:1533  bool */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1541:1560  allowed[msg.sender] */\n      dup2\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1541:1548  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1541:1560  allowed[msg.sender] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1541:1570  allowed[msg.sender][_spender] */\n      swap5\n      dup8\n      and\n      dup1\n      dup5\n      mstore\n      swap5\n      swap1\n      swap2\n      mstore\n      dup1\n      dup3\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1541:1579  allowed[msg.sender][_spender] = _value */\n      dup6\n      swap1\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1529:1533  bool */\n      swap1\n      swap3\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1541:1570  allowed[msg.sender][_spender] */\n      swap2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1541:1560  allowed[msg.sender] */\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1585:1623  Approval(msg.sender, _spender, _value) */\n      0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1573:1579  _value */\n      dup6\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1585:1623  Approval(msg.sender, _spender, _value) */\n      mload\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      log3\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1636:1640  true */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1469:1645  function approve(address _spender, uint256 _value) returns (bool) {... */\n    tag_34:\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkERC20Basic.sol\":183:209  uint256 public totalSupply */\n    tag_15:\n      sload(0x0)\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":748:1237  function transferFrom(address _from, address _to, uint256 _value) returns (bool) {... */\n    tag_18:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":852:866  allowed[_from] */\n      dup1\n      dup5\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":823:827  bool */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":852:866  allowed[_from] */\n      dup2\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":852:859  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":852:866  allowed[_from] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":867:877  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":852:878  allowed[_from][msg.sender] */\n      swap1\n      swap6\n      and\n      dup4\n      mstore\n      swap4\n      dup2\n      mstore\n      dup4\n      dup3\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1050:1065  balances[_from] */\n      swap3\n      dup3\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1050:1058  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1050:1065  balances[_from] */\n      swap1\n      mstore\n      swap2\n      dup3\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1050:1077  balances[_from].sub(_value) */\n      tag_36\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1070:1076  _value */\n      dup5\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1050:1077  balances[_from].sub(_value) */\n      0xffffffff\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1050:1069  balances[_from].sub */\n      tag_37\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1050:1077  balances[_from].sub(_value) */\n      and\n      jump\t// in\n    tag_36:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1032:1047  balances[_from] */\n      dup1\n      dup8\n      and\n      0x0\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1032:1040  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1032:1047  balances[_from] */\n      0x20\n      mstore\n      0x40\n      dup1\n      dup3\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1032:1077  balances[_from] = balances[_from].sub(_value) */\n      swap4\n      swap1\n      swap4\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1099:1112  balances[_to] */\n      swap1\n      dup7\n      and\n      dup2\n      mstore\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1099:1124  balances[_to].add(_value) */\n      tag_38\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1117:1123  _value */\n      dup5\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1099:1124  balances[_to].add(_value) */\n      0xffffffff\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1099:1116  balances[_to].add */\n      tag_39\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1099:1124  balances[_to].add(_value) */\n      and\n      jump\t// in\n    tag_38:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1083:1096  balances[_to] */\n      dup6\n      and\n      0x0\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1083:1091  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1083:1096  balances[_to] */\n      0x20\n      mstore\n      0x40\n      swap1\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1083:1124  balances[_to] = balances[_to].add(_value) */\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1159:1181  _allowance.sub(_value) */\n      tag_40\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1159:1169  _allowance */\n      dup2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1174:1180  _value */\n      dup5\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1159:1181  _allowance.sub(_value) */\n      0xffffffff\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1159:1173  _allowance.sub */\n      tag_37\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1159:1181  _allowance.sub(_value) */\n      and\n      jump\t// in\n    tag_40:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1130:1144  allowed[_from] */\n      dup1\n      dup8\n      and\n      0x0\n      dup2\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1130:1137  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1130:1144  allowed[_from] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1145:1155  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1130:1156  allowed[_from][msg.sender] */\n      dup7\n      and\n      dup5\n      mstore\n      swap1\n      swap2\n      mstore\n      swap1\n      dup2\n      swap1\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1130:1181  allowed[_from][msg.sender] = _allowance.sub(_value) */\n      swap4\n      swap1\n      swap4\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1187:1215  Transfer(_from, _to, _value) */\n      swap1\n      dup7\n      and\n      swap2\n      0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1208:1214  _value */\n      dup7\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1187:1215  Transfer(_from, _to, _value) */\n      mload\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      log3\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1228:1232  true */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1221:1232  return true */\n      swap2\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":748:1237  function transferFrom(address _from, address _to, uint256 _value) returns (bool) {... */\n    tag_35:\n      pop\n      swap4\n      swap3\n      pop\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2609:3014  function decreaseApproval (address _spender, uint _subtractedValue) ... */\n    tag_21:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2735:2745  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2727:2746  allowed[msg.sender] */\n      dup2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2691:2703  bool success */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2727:2746  allowed[msg.sender] */\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2727:2734  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2727:2746  allowed[msg.sender] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2727:2756  allowed[msg.sender][_spender] */\n      swap4\n      dup7\n      and\n      dup4\n      mstore\n      swap3\n      swap1\n      mstore\n      swap1\n      dup2\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2766:2793  _subtractedValue > oldValue */\n      dup1\n      dup4\n      gt\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2762:2926  if (_subtractedValue > oldValue) {... */\n      iszero\n      tag_42\n      jumpi\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2811:2821  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2803:2822  allowed[msg.sender] */\n      dup2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2835:2836  0 */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2803:2822  allowed[msg.sender] */\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2803:2810  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2803:2822  allowed[msg.sender] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2803:2832  allowed[msg.sender][_spender] */\n      swap4\n      dup9\n      and\n      dup4\n      mstore\n      swap3\n      swap1\n      mstore\n      swap1\n      dup2\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2803:2836  allowed[msg.sender][_spender] = 0 */\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2762:2926  if (_subtractedValue > oldValue) {... */\n      jump(tag_43)\n    tag_42:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2889:2919  oldValue.sub(_subtractedValue) */\n      tag_44\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2889:2897  oldValue */\n      dup2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2902:2918  _subtractedValue */\n      dup5\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2889:2919  oldValue.sub(_subtractedValue) */\n      0xffffffff\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2889:2901  oldValue.sub */\n      tag_37\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2889:2919  oldValue.sub(_subtractedValue) */\n      and\n      jump\t// in\n    tag_44:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2865:2875  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2857:2876  allowed[msg.sender] */\n      dup2\n      and\n      0x0\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2857:2864  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2857:2876  allowed[msg.sender] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2857:2886  allowed[msg.sender][_spender] */\n      swap4\n      dup10\n      and\n      dup4\n      mstore\n      swap3\n      swap1\n      mstore\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2857:2919  allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue) */\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2762:2926  if (_subtractedValue > oldValue) {... */\n    tag_43:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2940:2950  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2931:2992  Approval(msg.sender, _spender, allowed[msg.sender][_spender]) */\n      dup2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2962:2981  allowed[msg.sender] */\n      0x0\n      dup2\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2962:2969  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2962:2981  allowed[msg.sender] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2931:2992  Approval(msg.sender, _spender, allowed[msg.sender][_spender]) */\n      swap5\n      dup10\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2962:2991  allowed[msg.sender][_spender] */\n      dup1\n      dup5\n      mstore\n      swap5\n      swap1\n      swap2\n      mstore\n      swap1\n      dup2\n      swap1\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2931:2992  Approval(msg.sender, _spender, allowed[msg.sender][_spender]) */\n      0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925\n      swap2\n      mload\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      log3\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":3005:3009  true */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2998:3009  return true */\n      swap2\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2609:3014  function decreaseApproval (address _spender, uint _subtractedValue) ... */\n    tag_41:\n      pop\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":892:996  function balanceOf(address _owner) constant returns (uint256 balance) {... */\n    tag_24:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":975:991  balances[_owner] */\n      dup2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":945:960  uint256 balance */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":975:991  balances[_owner] */\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":975:983  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":975:991  balances[_owner] */\n      0x20\n      mstore\n      0x40\n      swap1\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":892:996  function balanceOf(address _owner) constant returns (uint256 balance) {... */\n    tag_45:\n      swap2\n      swap1\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":458:689  function transfer(address _to, uint256 _value) returns (bool) {... */\n    tag_27:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":558:568  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:569  balances[msg.sender] */\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":514:518  bool */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:569  balances[msg.sender] */\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:557  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:569  balances[msg.sender] */\n      0x20\n      mstore\n      0x40\n      dup2\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:581  balances[msg.sender].sub(_value) */\n      tag_47\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":574:580  _value */\n      dup4\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:581  balances[msg.sender].sub(_value) */\n      0xffffffff\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:573  balances[msg.sender].sub */\n      tag_37\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:581  balances[msg.sender].sub(_value) */\n      and\n      jump\t// in\n    tag_47:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":535:545  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":526:546  balances[msg.sender] */\n      dup2\n      and\n      0x0\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":526:534  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":526:546  balances[msg.sender] */\n      0x20\n      mstore\n      0x40\n      dup1\n      dup3\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":526:581  balances[msg.sender] = balances[msg.sender].sub(_value) */\n      swap4\n      swap1\n      swap4\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:616  balances[_to] */\n      swap1\n      dup6\n      and\n      dup2\n      mstore\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:628  balances[_to].add(_value) */\n      tag_48\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":621:627  _value */\n      dup4\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:628  balances[_to].add(_value) */\n      0xffffffff\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:620  balances[_to].add */\n      tag_39\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:628  balances[_to].add(_value) */\n      and\n      jump\t// in\n    tag_48:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:600  balances[_to] */\n      dup1\n      dup6\n      and\n      0x0\n      dup2\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:595  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:600  balances[_to] */\n      0x20\n      mstore\n      0x40\n      swap1\n      dup2\n      swap1\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:628  balances[_to] = balances[_to].add(_value) */\n      swap4\n      swap1\n      swap4\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:600  balances[_to] */\n      swap2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":643:653  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":634:667  Transfer(msg.sender, _to, _value) */\n      swap1\n      swap2\n      and\n      swap1\n      0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":660:666  _value */\n      dup6\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":634:667  Transfer(msg.sender, _to, _value) */\n      mload\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      log3\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":680:684  true */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":458:689  function transfer(address _to, uint256 _value) returns (bool) {... */\n    tag_46:\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2341:2605  function increaseApproval (address _spender, uint _addedValue) ... */\n    tag_30:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2478:2488  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2470:2489  allowed[msg.sender] */\n      dup2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2418:2430  bool success */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2470:2489  allowed[msg.sender] */\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2470:2477  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2470:2489  allowed[msg.sender] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2470:2499  allowed[msg.sender][_spender] */\n      swap4\n      dup7\n      and\n      dup4\n      mstore\n      swap3\n      swap1\n      mstore\n      swap1\n      dup2\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2470:2516  allowed[msg.sender][_spender].add(_addedValue) */\n      tag_50\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2504:2515  _addedValue */\n      dup4\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2470:2516  allowed[msg.sender][_spender].add(_addedValue) */\n      0xffffffff\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2470:2503  allowed[msg.sender][_spender].add */\n      tag_39\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2470:2516  allowed[msg.sender][_spender].add(_addedValue) */\n      and\n      jump\t// in\n    tag_50:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2446:2456  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2438:2457  allowed[msg.sender] */\n      dup2\n      and\n      0x0\n      dup2\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2438:2445  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2438:2457  allowed[msg.sender] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2438:2467  allowed[msg.sender][_spender] */\n      swap5\n      dup10\n      and\n      dup1\n      dup5\n      mstore\n      swap5\n      swap1\n      swap2\n      mstore\n      swap1\n      dup2\n      swap1\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2438:2516  allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue) */\n      dup5\n      swap1\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2438:2467  allowed[msg.sender][_spender] */\n      swap2\n      swap3\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2438:2457  allowed[msg.sender] */\n      swap1\n      swap2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2522:2583  Approval(msg.sender, _spender, allowed[msg.sender][_spender]) */\n      0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925\n      swap2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2438:2516  allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue) */\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2522:2583  Approval(msg.sender, _spender, allowed[msg.sender][_spender]) */\n      mload\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      log3\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2596:2600  true */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2341:2605  function increaseApproval (address _spender, uint _addedValue) ... */\n    tag_49:\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1964:2097  function allowance(address _owner, address _spender) constant returns (uint256 remaining) {... */\n    tag_33:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2067:2082  allowed[_owner] */\n      dup1\n      dup4\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2035:2052  uint256 remaining */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2067:2082  allowed[_owner] */\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2067:2074  allowed */\n      0x2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2067:2082  allowed[_owner] */\n      0x20\n      swap1\n      dup2\n      mstore\n      0x40\n      dup1\n      dup4\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":2067:2092  allowed[_owner][_spender] */\n      swap4\n      dup6\n      and\n      dup4\n      mstore\n      swap3\n      swap1\n      mstore\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":1964:2097  function allowance(address _owner, address _spender) constant returns (uint256 remaining) {... */\n    tag_51:\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":566:680  function sub(uint256 a, uint256 b) internal constant returns (uint256) {... */\n    tag_37:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":628:635  uint256 */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":650:656  b <= a */\n      dup3\n      dup3\n      gt\n      iszero\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":643:657  assert(b <= a) */\n      tag_53\n      jumpi\n      invalid\n    tag_53:\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":670:675  a - b */\n      dup1\n      dup3\n      sub\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":566:680  function sub(uint256 a, uint256 b) internal constant returns (uint256) {... */\n    tag_52:\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":684:817  function add(uint256 a, uint256 b) internal constant returns (uint256) {... */\n    tag_39:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":746:753  uint256 */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":773:778  a + b */\n      dup3\n      dup3\n      add\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":791:797  c >= a */\n      dup4\n      dup2\n      lt\n      iszero\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":784:798  assert(c >= a) */\n      tag_55\n      jumpi\n      invalid\n    tag_55:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":811:812  c */\n      dup1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":804:812  return c */\n      swap2\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":684:817  function add(uint256 a, uint256 b) internal constant returns (uint256) {... */\n    tag_54:\n      pop\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n\n    auxdata: 0xa165627a7a72305820f300f73d88db0bad46e424d86404e77801930714f46d03262ac48f8e7cbac4640029\n}\n",
  "bytecode": {
   "linkReferences": {},
   "object": "0x6060604052341561000f57600080fd5b5b6106c08061001f6000396000f3006060604052361561008b5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009057806318160ddd146100c657806323b872dd146100eb578063661884631461012757806370a082311461015d578063a9059cbb1461018e578063d73dd623146101c4578063dd62ed3e146101fa575b600080fd5b341561009b57600080fd5b6100b2600160a060020a0360043516602435610231565b604051901515815260200160405180910390f35b34156100d157600080fd5b6100d961029e565b60405190815260200160405180910390f35b34156100f657600080fd5b6100b2600160a060020a03600435811690602435166044356102a4565b604051901515815260200160405180910390f35b341561013257600080fd5b6100b2600160a060020a03600435166024356103b6565b604051901515815260200160405180910390f35b341561016857600080fd5b6100d9600160a060020a03600435166104b2565b60405190815260200160405180910390f35b341561019957600080fd5b6100b2600160a060020a03600435166024356104d1565b604051901515815260200160405180910390f35b34156101cf57600080fd5b6100b2600160a060020a0360043516602435610591565b604051901515815260200160405180910390f35b341561020557600080fd5b6100d9600160a060020a0360043581169060243516610636565b60405190815260200160405180910390f35b600160a060020a03338116600081815260026020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b60005481565b600160a060020a0380841660008181526002602090815260408083203390951683529381528382205492825260019052918220546102e8908463ffffffff61066316565b600160a060020a03808716600090815260016020526040808220939093559086168152205461031d908463ffffffff61067a16565b600160a060020a038516600090815260016020526040902055610346818463ffffffff61066316565b600160a060020a03808716600081815260026020908152604080832033861684529091529081902093909355908616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9086905190815260200160405180910390a3600191505b509392505050565b600160a060020a0333811660009081526002602090815260408083209386168352929052908120548083111561041357600160a060020a03338116600090815260026020908152604080832093881683529290529081205561044a565b610423818463ffffffff61066316565b600160a060020a033381166000908152600260209081526040808320938916835292905220555b600160a060020a0333811660008181526002602090815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a3600191505b5092915050565b600160a060020a0381166000908152600160205260409020545b919050565b600160a060020a0333166000908152600160205260408120546104fa908363ffffffff61066316565b600160a060020a03338116600090815260016020526040808220939093559085168152205461052f908363ffffffff61067a16565b600160a060020a0380851660008181526001602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b92915050565b600160a060020a0333811660009081526002602090815260408083209386168352929052908120546105c9908363ffffffff61067a16565b600160a060020a0333811660008181526002602090815260408083209489168084529490915290819020849055919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591905190815260200160405180910390a35060015b92915050565b600160a060020a038083166000908152600260209081526040808320938516835292905220545b92915050565b60008282111561066f57fe5b508082035b92915050565b60008282018381101561068957fe5b8091505b50929150505600a165627a7a72305820f300f73d88db0bad46e424d86404e77801930714f46d03262ac48f8e7cbac4640029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST PUSH2 0x6C0 DUP1 PUSH2 0x1F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE CALLDATASIZE ISZERO PUSH2 0x8B JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x95EA7B3 DUP2 EQ PUSH2 0x90 JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0xC6 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0xEB JUMPI DUP1 PUSH4 0x66188463 EQ PUSH2 0x127 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x15D JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x18E JUMPI DUP1 PUSH4 0xD73DD623 EQ PUSH2 0x1C4 JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x1FA JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x9B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x231 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xD1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xD9 PUSH2 0x29E JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xF6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD DUP2 AND SWAP1 PUSH1 0x24 CALLDATALOAD AND PUSH1 0x44 CALLDATALOAD PUSH2 0x2A4 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x132 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x3B6 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x168 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xD9 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x4B2 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x199 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x4D1 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x1CF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x591 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x205 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xD9 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD DUP2 AND SWAP1 PUSH1 0x24 CALLDATALOAD AND PUSH2 0x636 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP8 AND DUP1 DUP5 MSTORE SWAP5 SWAP1 SWAP2 MSTORE DUP1 DUP3 KECCAK256 DUP6 SWAP1 SSTORE SWAP1 SWAP3 SWAP2 SWAP1 PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 SWAP1 DUP6 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP5 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 CALLER SWAP1 SWAP6 AND DUP4 MSTORE SWAP4 DUP2 MSTORE DUP4 DUP3 KECCAK256 SLOAD SWAP3 DUP3 MSTORE PUSH1 0x1 SWAP1 MSTORE SWAP2 DUP3 KECCAK256 SLOAD PUSH2 0x2E8 SWAP1 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x663 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP8 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP7 AND DUP2 MSTORE KECCAK256 SLOAD PUSH2 0x31D SWAP1 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x67A AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP6 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SSTORE PUSH2 0x346 DUP2 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x663 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP8 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 CALLER DUP7 AND DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 DUP2 SWAP1 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP7 AND SWAP2 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 DUP7 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP2 POP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP7 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE SWAP1 DUP2 KECCAK256 SLOAD DUP1 DUP4 GT ISZERO PUSH2 0x413 JUMPI PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP9 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE SWAP1 DUP2 KECCAK256 SSTORE PUSH2 0x44A JUMP JUMPDEST PUSH2 0x423 DUP2 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x663 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP10 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE KECCAK256 SSTORE JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP10 AND DUP1 DUP5 MSTORE SWAP5 SWAP1 SWAP2 MSTORE SWAP1 DUP2 SWAP1 KECCAK256 SLOAD PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 SWAP2 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP2 POP JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH2 0x4FA SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x663 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP6 AND DUP2 MSTORE KECCAK256 SLOAD PUSH2 0x52F SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x67A AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP6 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP2 CALLER SWAP1 SWAP2 AND SWAP1 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 DUP6 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP7 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE SWAP1 DUP2 KECCAK256 SLOAD PUSH2 0x5C9 SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x67A AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP10 AND DUP1 DUP5 MSTORE SWAP5 SWAP1 SWAP2 MSTORE SWAP1 DUP2 SWAP1 KECCAK256 DUP5 SWAP1 SSTORE SWAP2 SWAP3 SWAP1 SWAP2 PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 SWAP2 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP4 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP6 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE KECCAK256 SLOAD JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 GT ISZERO PUSH2 0x66F JUMPI INVALID JUMPDEST POP DUP1 DUP3 SUB JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 ADD DUP4 DUP2 LT ISZERO PUSH2 0x689 JUMPI INVALID JUMPDEST DUP1 SWAP2 POP JUMPDEST POP SWAP3 SWAP2 POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 RETURN STOP 0xf7 RETURNDATASIZE DUP9 0xdb SIGNEXTEND 0xad 0x46 0xe4 0x24 0xd8 PUSH5 0x4E7780193 SMOD EQ DELEGATECALL PUSH14 0x3262AC48F8E7CBAC46400290000 ",
   "sourceMap": "353:2664:15:-;;;;;;;;;;;;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6060604052361561008b5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009057806318160ddd146100c657806323b872dd146100eb578063661884631461012757806370a082311461015d578063a9059cbb1461018e578063d73dd623146101c4578063dd62ed3e146101fa575b600080fd5b341561009b57600080fd5b6100b2600160a060020a0360043516602435610231565b604051901515815260200160405180910390f35b34156100d157600080fd5b6100d961029e565b60405190815260200160405180910390f35b34156100f657600080fd5b6100b2600160a060020a03600435811690602435166044356102a4565b604051901515815260200160405180910390f35b341561013257600080fd5b6100b2600160a060020a03600435166024356103b6565b604051901515815260200160405180910390f35b341561016857600080fd5b6100d9600160a060020a03600435166104b2565b60405190815260200160405180910390f35b341561019957600080fd5b6100b2600160a060020a03600435166024356104d1565b604051901515815260200160405180910390f35b34156101cf57600080fd5b6100b2600160a060020a0360043516602435610591565b604051901515815260200160405180910390f35b341561020557600080fd5b6100d9600160a060020a0360043581169060243516610636565b60405190815260200160405180910390f35b600160a060020a03338116600081815260026020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b60005481565b600160a060020a0380841660008181526002602090815260408083203390951683529381528382205492825260019052918220546102e8908463ffffffff61066316565b600160a060020a03808716600090815260016020526040808220939093559086168152205461031d908463ffffffff61067a16565b600160a060020a038516600090815260016020526040902055610346818463ffffffff61066316565b600160a060020a03808716600081815260026020908152604080832033861684529091529081902093909355908616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9086905190815260200160405180910390a3600191505b509392505050565b600160a060020a0333811660009081526002602090815260408083209386168352929052908120548083111561041357600160a060020a03338116600090815260026020908152604080832093881683529290529081205561044a565b610423818463ffffffff61066316565b600160a060020a033381166000908152600260209081526040808320938916835292905220555b600160a060020a0333811660008181526002602090815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a3600191505b5092915050565b600160a060020a0381166000908152600160205260409020545b919050565b600160a060020a0333166000908152600160205260408120546104fa908363ffffffff61066316565b600160a060020a03338116600090815260016020526040808220939093559085168152205461052f908363ffffffff61067a16565b600160a060020a0380851660008181526001602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b92915050565b600160a060020a0333811660009081526002602090815260408083209386168352929052908120546105c9908363ffffffff61067a16565b600160a060020a0333811660008181526002602090815260408083209489168084529490915290819020849055919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591905190815260200160405180910390a35060015b92915050565b600160a060020a038083166000908152600260209081526040808320938516835292905220545b92915050565b60008282111561066f57fe5b508082035b92915050565b60008282018381101561068957fe5b8091505b50929150505600a165627a7a72305820f300f73d88db0bad46e424d86404e77801930714f46d03262ac48f8e7cbac4640029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE CALLDATASIZE ISZERO PUSH2 0x8B JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x95EA7B3 DUP2 EQ PUSH2 0x90 JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0xC6 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0xEB JUMPI DUP1 PUSH4 0x66188463 EQ PUSH2 0x127 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x15D JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x18E JUMPI DUP1 PUSH4 0xD73DD623 EQ PUSH2 0x1C4 JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x1FA JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x9B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x231 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xD1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xD9 PUSH2 0x29E JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xF6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD DUP2 AND SWAP1 PUSH1 0x24 CALLDATALOAD AND PUSH1 0x44 CALLDATALOAD PUSH2 0x2A4 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x132 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x3B6 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x168 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xD9 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x4B2 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x199 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x4D1 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x1CF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x591 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x205 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xD9 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD DUP2 AND SWAP1 PUSH1 0x24 CALLDATALOAD AND PUSH2 0x636 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP8 AND DUP1 DUP5 MSTORE SWAP5 SWAP1 SWAP2 MSTORE DUP1 DUP3 KECCAK256 DUP6 SWAP1 SSTORE SWAP1 SWAP3 SWAP2 SWAP1 PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 SWAP1 DUP6 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP5 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 CALLER SWAP1 SWAP6 AND DUP4 MSTORE SWAP4 DUP2 MSTORE DUP4 DUP3 KECCAK256 SLOAD SWAP3 DUP3 MSTORE PUSH1 0x1 SWAP1 MSTORE SWAP2 DUP3 KECCAK256 SLOAD PUSH2 0x2E8 SWAP1 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x663 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP8 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP7 AND DUP2 MSTORE KECCAK256 SLOAD PUSH2 0x31D SWAP1 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x67A AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP6 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SSTORE PUSH2 0x346 DUP2 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x663 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP8 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 CALLER DUP7 AND DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 DUP2 SWAP1 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP7 AND SWAP2 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 DUP7 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP2 POP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP7 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE SWAP1 DUP2 KECCAK256 SLOAD DUP1 DUP4 GT ISZERO PUSH2 0x413 JUMPI PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP9 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE SWAP1 DUP2 KECCAK256 SSTORE PUSH2 0x44A JUMP JUMPDEST PUSH2 0x423 DUP2 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x663 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP10 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE KECCAK256 SSTORE JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP10 AND DUP1 DUP5 MSTORE SWAP5 SWAP1 SWAP2 MSTORE SWAP1 DUP2 SWAP1 KECCAK256 SLOAD PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 SWAP2 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP2 POP JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH2 0x4FA SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x663 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP6 AND DUP2 MSTORE KECCAK256 SLOAD PUSH2 0x52F SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x67A AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP6 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP2 CALLER SWAP1 SWAP2 AND SWAP1 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 DUP6 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP7 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE SWAP1 DUP2 KECCAK256 SLOAD PUSH2 0x5C9 SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x67A AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP10 AND DUP1 DUP5 MSTORE SWAP5 SWAP1 SWAP2 MSTORE SWAP1 DUP2 SWAP1 KECCAK256 DUP5 SWAP1 SSTORE SWAP2 SWAP3 SWAP1 SWAP2 PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 SWAP2 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP4 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 DUP6 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE KECCAK256 SLOAD JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 GT ISZERO PUSH2 0x66F JUMPI INVALID JUMPDEST POP DUP1 DUP3 SUB JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 ADD DUP4 DUP2 LT ISZERO PUSH2 0x689 JUMPI INVALID JUMPDEST DUP1 SWAP2 POP JUMPDEST POP SWAP3 SWAP2 POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 RETURN STOP 0xf7 RETURNDATASIZE DUP9 0xdb SIGNEXTEND 0xad 0x46 0xe4 0x24 0xd8 PUSH5 0x4E7780193 SMOD EQ DELEGATECALL PUSH14 0x3262AC48F8E7CBAC46400290000 ",
   "sourceMap": "353:2664:15:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1469:176;;;;;;;;;;-1:-1:-1;;;;;1469:176:15;;;;;;;;;;;;;;;;;;;;;;;;183:26:14;;;;;;;;;;;;;;;;;;;;;;;;;;;748:489:15;;;;;;;;;;-1:-1:-1;;;;;748:489:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2609:405;;;;;;;;;;-1:-1:-1;;;;;2609:405:15;;;;;;;;;;;;;;;;;;;;;;;;892:104:12;;;;;;;;;;-1:-1:-1;;;;;892:104:12;;;;;;;;;;;;;;;;;;;;458:231;;;;;;;;;;-1:-1:-1;;;;;458:231:12;;;;;;;;;;;;;;;;;;;;;;;;2341:264:15;;;;;;;;;;-1:-1:-1;;;;;2341:264:15;;;;;;;;;;;;;;;;;;;;;;;;1964:133;;;;;;;;;;-1:-1:-1;;;;;1964:133:15;;;;;;;;;;;;;;;;;;;;;;;;;1469:176;-1:-1:-1;;;;;1549:10:15;1541:19;;1529:4;1541:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;;:38;;;1529:4;;1541:29;:19;1585:38;;1573:6;;1585:38;;;;;;;;;;;;;-1:-1:-1;1636:4:15;1469:176;;;;;:::o;183:26:14:-;;;;:::o;748:489:15:-;-1:-1:-1;;;;;852:14:15;;;823:4;852:14;;;:7;:14;;;;;;;;867:10;852:26;;;;;;;;;;;;1050:15;;;:8;:15;;;;;;:27;;1070:6;1050:27;:19;:27;:::i;:::-;-1:-1:-1;;;;;1032:15:15;;;;;;;:8;:15;;;;;;:45;;;;1099:13;;;;;;;:25;;1117:6;1099:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;1083:13:15;;;;;;:8;:13;;;;;:41;1159:22;:10;1174:6;1159:22;:14;:22;:::i;:::-;-1:-1:-1;;;;;1130:14:15;;;;;;;:7;:14;;;;;;;;1145:10;1130:26;;;;;;;;;;;:51;;;;1187:28;;;;;;1208:6;;1187:28;;;;;;;;;;;;;1228:4;1221:11;;748:489;;;;;;;:::o;2609:405::-;-1:-1:-1;;;;;2735:10:15;2727:19;;2691:12;2727:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;2766:27;;;2762:164;;;-1:-1:-1;;;;;2811:10:15;2803:19;;2835:1;2803:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;:33;2762:164;;;2889:30;:8;2902:16;2889:30;:12;:30;:::i;:::-;-1:-1:-1;;;;;2865:10:15;2857:19;;;;;;:7;:19;;;;;;;;:29;;;;;;;;;:62;2762:164;-1:-1:-1;;;;;2940:10:15;2931:61;;2962:19;;;;:7;:19;;;;;;;;2931:61;;;2962:29;;;;;;;;;;;;2931:61;;;;;;;;;;;;;;;3005:4;2998:11;;2609:405;;;;;;:::o;892:104:12:-;-1:-1:-1;;;;;975:16:12;;945:15;975:16;;;:8;:16;;;;;;892:104;;;;:::o;458:231::-;-1:-1:-1;;;;;558:10:12;549:20;514:4;549:20;;;:8;:20;;;;;;:32;;574:6;549:32;:24;:32;:::i;:::-;-1:-1:-1;;;;;535:10:12;526:20;;;;;;:8;:20;;;;;;:55;;;;603:13;;;;;;;:25;;621:6;603:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;587:13:12;;;;;;;:8;:13;;;;;;;:41;;;;:13;643:10;634:33;;;;;;660:6;;634:33;;;;;;;;;;;;;-1:-1:-1;680:4:12;458:231;;;;;:::o;2341:264:15:-;-1:-1:-1;;;;;2478:10:15;2470:19;;2418:12;2470:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;:46;;2504:11;2470:46;:33;:46;:::i;:::-;-1:-1:-1;;;;;2446:10:15;2438:19;;;;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;;;:78;;;:29;;:19;;2522:61;;2438:78;2522:61;;;;;;;;;;;;;-1:-1:-1;2596:4:15;2341:264;;;;;:::o;1964:133::-;-1:-1:-1;;;;;2067:15:15;;;2035:17;2067:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;1964:133;;;;;:::o;566:114:3:-;628:7;650:6;;;;643:14;;;;-1:-1:-1;670:5:3;;;566:114;;;;;:::o;684:133::-;746:7;773:5;;;791:6;;;;784:14;;;;811:1;804:8;;684:133;;;;;;:::o"
  },
  "gasEstimates": {
   "creation": {
    "codeDepositCost": "345600",
    "executionCost": "376",
    "totalCost": "345976"
   },
   "external": {
    "allowance(address,address)": "850",
    "approve(address,uint256)": "22331",
    "balanceOf(address)": "689",
    "decreaseApproval(address,uint256)": "infinite",
    "increaseApproval(address,uint256)": "infinite",
    "totalSupply()": "392",
    "transfer(address,uint256)": "infinite",
    "transferFrom(address,address,uint256)": "infinite"
   }
  },
  "legacyAssembly": {
   ".code": [
    {
     "begin": 353,
     "end": 3017,
     "name": "PUSH",
     "value": "60"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "PUSH",
     "value": "40"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "MSTORE"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "CALLVALUE"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "ISZERO"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "PUSH [tag]",
     "value": "1"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "JUMPI"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "DUP1"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "REVERT"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "tag",
     "value": "1"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "JUMPDEST"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "tag",
     "value": "2"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "JUMPDEST"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "PUSH #[$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "DUP1"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "PUSH [$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "CODECOPY"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 353,
     "end": 3017,
     "name": "RETURN"
    }
   ],
   ".data": {
    "0": {
     ".auxdata": "a165627a7a72305820f300f73d88db0bad46e424d86404e77801930714f46d03262ac48f8e7cbac4640029",
     ".code": [
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "60"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "MSTORE"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "CALLDATASIZE"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "ISZERO"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH [tag]",
       "value": "1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPI"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "100000000000000000000000000000000000000000000000000000000"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DIV"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "AND"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "95EA7B3"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DUP2"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "EQ"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH [tag]",
       "value": "2"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPI"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DUP1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "18160DDD"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "EQ"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH [tag]",
       "value": "3"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPI"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DUP1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "23B872DD"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "EQ"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH [tag]",
       "value": "4"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPI"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DUP1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "66188463"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "EQ"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH [tag]",
       "value": "5"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPI"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DUP1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "70A08231"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "EQ"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH [tag]",
       "value": "6"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPI"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DUP1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "A9059CBB"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "EQ"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH [tag]",
       "value": "7"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPI"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DUP1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "D73DD623"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "EQ"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH [tag]",
       "value": "8"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPI"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DUP1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "DD62ED3E"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "EQ"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH [tag]",
       "value": "9"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPI"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "tag",
       "value": "1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "JUMPDEST"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "DUP1"
      },
      {
       "begin": 353,
       "end": 3017,
       "name": "REVERT"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "tag",
       "value": "2"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "JUMPDEST"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "CALLVALUE"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "ISZERO"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "PUSH [tag]",
       "value": "10"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "JUMPI"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "DUP1"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "REVERT"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "tag",
       "value": "10"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "JUMPDEST"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "PUSH [tag]",
       "value": "11"
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
       "begin": 1469,
       "end": 1645,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "AND"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "PUSH [tag]",
       "value": "12"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "JUMP"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "tag",
       "value": "11"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "JUMPDEST"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "MLOAD"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "SWAP1"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "ISZERO"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "ISZERO"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "DUP2"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "MSTORE"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "ADD"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "MLOAD"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "DUP1"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "SWAP2"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "SUB"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "SWAP1"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "RETURN"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "tag",
       "value": "3"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "JUMPDEST"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "CALLVALUE"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "ISZERO"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "PUSH [tag]",
       "value": "13"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "JUMPI"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "DUP1"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "REVERT"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "tag",
       "value": "13"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "JUMPDEST"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "PUSH [tag]",
       "value": "14"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "PUSH [tag]",
       "value": "15"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "JUMP"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "tag",
       "value": "14"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "JUMPDEST"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "MLOAD"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "SWAP1"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "DUP2"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "MSTORE"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "ADD"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "MLOAD"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "DUP1"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "SWAP2"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "SUB"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "SWAP1"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "RETURN"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "tag",
       "value": "4"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "JUMPDEST"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "CALLVALUE"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "ISZERO"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "PUSH [tag]",
       "value": "16"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "JUMPI"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "DUP1"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "REVERT"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "tag",
       "value": "16"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "JUMPDEST"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "PUSH [tag]",
       "value": "11"
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
       "begin": 748,
       "end": 1237,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "DUP2"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "AND"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "SWAP1"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "AND"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "PUSH",
       "value": "44"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "PUSH [tag]",
       "value": "18"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "JUMP"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "tag",
       "value": "17"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "JUMPDEST"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "MLOAD"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "SWAP1"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "ISZERO"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "ISZERO"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "DUP2"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "MSTORE"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "ADD"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "MLOAD"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "DUP1"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "SWAP2"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "SUB"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "SWAP1"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "RETURN"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "tag",
       "value": "5"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "JUMPDEST"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "CALLVALUE"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "ISZERO"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "PUSH [tag]",
       "value": "19"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "JUMPI"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "DUP1"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "REVERT"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "tag",
       "value": "19"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "JUMPDEST"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "PUSH [tag]",
       "value": "11"
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
       "begin": 2609,
       "end": 3014,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "AND"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "PUSH [tag]",
       "value": "21"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "JUMP"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "tag",
       "value": "20"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "JUMPDEST"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "MLOAD"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "SWAP1"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "ISZERO"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "ISZERO"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "DUP2"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "MSTORE"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "ADD"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "MLOAD"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "DUP1"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "SWAP2"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "SUB"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "SWAP1"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "RETURN"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "tag",
       "value": "6"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "JUMPDEST"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "CALLVALUE"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "ISZERO"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "PUSH [tag]",
       "value": "22"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "JUMPI"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "DUP1"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "REVERT"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "tag",
       "value": "22"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "JUMPDEST"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "PUSH [tag]",
       "value": "14"
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
       "begin": 892,
       "end": 996,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "AND"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "PUSH [tag]",
       "value": "24"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "JUMP"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "tag",
       "value": "23"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "JUMPDEST"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "MLOAD"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "SWAP1"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "DUP2"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "MSTORE"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "ADD"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "MLOAD"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "DUP1"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "SWAP2"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "SUB"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "SWAP1"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "RETURN"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "tag",
       "value": "7"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "JUMPDEST"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "CALLVALUE"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "ISZERO"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "PUSH [tag]",
       "value": "25"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "JUMPI"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "DUP1"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "REVERT"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "tag",
       "value": "25"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "JUMPDEST"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "PUSH [tag]",
       "value": "11"
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
       "begin": 458,
       "end": 689,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "AND"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "PUSH [tag]",
       "value": "27"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "JUMP"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "tag",
       "value": "26"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "JUMPDEST"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "MLOAD"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "SWAP1"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "ISZERO"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "ISZERO"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "DUP2"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "MSTORE"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "ADD"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "MLOAD"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "DUP1"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "SWAP2"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "SUB"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "SWAP1"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "RETURN"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "tag",
       "value": "8"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "JUMPDEST"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "CALLVALUE"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "ISZERO"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "PUSH [tag]",
       "value": "28"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "JUMPI"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "DUP1"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "REVERT"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "tag",
       "value": "28"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "JUMPDEST"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "PUSH [tag]",
       "value": "11"
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
       "begin": 2341,
       "end": 2605,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "AND"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "PUSH [tag]",
       "value": "30"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "JUMP"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "tag",
       "value": "29"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "JUMPDEST"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "MLOAD"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "SWAP1"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "ISZERO"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "ISZERO"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "DUP2"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "MSTORE"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "ADD"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "MLOAD"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "DUP1"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "SWAP2"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "SUB"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "SWAP1"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "RETURN"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "tag",
       "value": "9"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "JUMPDEST"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "CALLVALUE"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "ISZERO"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "PUSH [tag]",
       "value": "31"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "JUMPI"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "DUP1"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "REVERT"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "tag",
       "value": "31"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "JUMPDEST"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "PUSH [tag]",
       "value": "14"
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
       "begin": 1964,
       "end": 2097,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "DUP2"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "AND"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "SWAP1"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "AND"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "PUSH [tag]",
       "value": "33"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "JUMP"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "tag",
       "value": "32"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "JUMPDEST"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "MLOAD"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "SWAP1"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "DUP2"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "MSTORE"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "ADD"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "MLOAD"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "DUP1"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "SWAP2"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "SUB"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "SWAP1"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "RETURN"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "tag",
       "value": "12"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "JUMPDEST"
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
       "begin": 1549,
       "end": 1559,
       "name": "CALLER"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "DUP2"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "AND"
      },
      {
       "begin": 1529,
       "end": 1533,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "DUP2"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "DUP2"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "MSTORE"
      },
      {
       "begin": 1541,
       "end": 1548,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "SWAP1"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "DUP2"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "MSTORE"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "DUP1"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "DUP4"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "KECCAK256"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "SWAP5"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "DUP8"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "AND"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "DUP1"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "DUP5"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "MSTORE"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "SWAP5"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "SWAP1"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "SWAP2"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "MSTORE"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "DUP1"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "DUP3"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "KECCAK256"
      },
      {
       "begin": 1541,
       "end": 1579,
       "name": "DUP6"
      },
      {
       "begin": 1541,
       "end": 1579,
       "name": "SWAP1"
      },
      {
       "begin": 1541,
       "end": 1579,
       "name": "SSTORE"
      },
      {
       "begin": 1529,
       "end": 1533,
       "name": "SWAP1"
      },
      {
       "begin": 1529,
       "end": 1533,
       "name": "SWAP3"
      },
      {
       "begin": 1541,
       "end": 1570,
       "name": "SWAP2"
      },
      {
       "begin": 1541,
       "end": 1560,
       "name": "SWAP1"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "PUSH",
       "value": "8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "SWAP1"
      },
      {
       "begin": 1573,
       "end": 1579,
       "name": "DUP6"
      },
      {
       "begin": 1573,
       "end": 1579,
       "name": "SWAP1"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "MLOAD"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "SWAP1"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "DUP2"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "MSTORE"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "ADD"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "MLOAD"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "DUP1"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "SWAP2"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "SUB"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "SWAP1"
      },
      {
       "begin": 1585,
       "end": 1623,
       "name": "LOG3"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 1636,
       "end": 1640,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "tag",
       "value": "34"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "JUMPDEST"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "SWAP3"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "SWAP2"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "POP"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "POP"
      },
      {
       "begin": 1469,
       "end": 1645,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "tag",
       "value": "15"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "JUMPDEST"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "SLOAD"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "DUP2"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "tag",
       "value": "18"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "JUMPDEST"
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
       "begin": 852,
       "end": 866,
       "name": "DUP1"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "DUP5"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "AND"
      },
      {
       "begin": 823,
       "end": 827,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "DUP2"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "DUP2"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "MSTORE"
      },
      {
       "begin": 852,
       "end": 859,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "SWAP1"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "DUP2"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "MSTORE"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "DUP1"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "DUP4"
      },
      {
       "begin": 852,
       "end": 866,
       "name": "KECCAK256"
      },
      {
       "begin": 867,
       "end": 877,
       "name": "CALLER"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "SWAP1"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "SWAP6"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "AND"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "DUP4"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "MSTORE"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "SWAP4"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "DUP2"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "MSTORE"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "DUP4"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "DUP3"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "KECCAK256"
      },
      {
       "begin": 852,
       "end": 878,
       "name": "SLOAD"
      },
      {
       "begin": 1050,
       "end": 1065,
       "name": "SWAP3"
      },
      {
       "begin": 1050,
       "end": 1065,
       "name": "DUP3"
      },
      {
       "begin": 1050,
       "end": 1065,
       "name": "MSTORE"
      },
      {
       "begin": 1050,
       "end": 1058,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 1050,
       "end": 1065,
       "name": "SWAP1"
      },
      {
       "begin": 1050,
       "end": 1065,
       "name": "MSTORE"
      },
      {
       "begin": 1050,
       "end": 1065,
       "name": "SWAP2"
      },
      {
       "begin": 1050,
       "end": 1065,
       "name": "DUP3"
      },
      {
       "begin": 1050,
       "end": 1065,
       "name": "KECCAK256"
      },
      {
       "begin": 1050,
       "end": 1065,
       "name": "SLOAD"
      },
      {
       "begin": 1050,
       "end": 1077,
       "name": "PUSH [tag]",
       "value": "36"
      },
      {
       "begin": 1050,
       "end": 1077,
       "name": "SWAP1"
      },
      {
       "begin": 1070,
       "end": 1076,
       "name": "DUP5"
      },
      {
       "begin": 1050,
       "end": 1077,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 1050,
       "end": 1069,
       "name": "PUSH [tag]",
       "value": "37"
      },
      {
       "begin": 1050,
       "end": 1077,
       "name": "AND"
      },
      {
       "begin": 1050,
       "end": 1077,
       "name": "JUMP",
       "value": "[in]"
      },
      {
       "begin": 1050,
       "end": 1077,
       "name": "tag",
       "value": "36"
      },
      {
       "begin": 1050,
       "end": 1077,
       "name": "JUMPDEST"
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
       "begin": 1032,
       "end": 1047,
       "name": "DUP1"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "DUP8"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "AND"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "SWAP1"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "DUP2"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "MSTORE"
      },
      {
       "begin": 1032,
       "end": 1040,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "MSTORE"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "DUP1"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "DUP3"
      },
      {
       "begin": 1032,
       "end": 1047,
       "name": "KECCAK256"
      },
      {
       "begin": 1032,
       "end": 1077,
       "name": "SWAP4"
      },
      {
       "begin": 1032,
       "end": 1077,
       "name": "SWAP1"
      },
      {
       "begin": 1032,
       "end": 1077,
       "name": "SWAP4"
      },
      {
       "begin": 1032,
       "end": 1077,
       "name": "SSTORE"
      },
      {
       "begin": 1099,
       "end": 1112,
       "name": "SWAP1"
      },
      {
       "begin": 1099,
       "end": 1112,
       "name": "DUP7"
      },
      {
       "begin": 1099,
       "end": 1112,
       "name": "AND"
      },
      {
       "begin": 1099,
       "end": 1112,
       "name": "DUP2"
      },
      {
       "begin": 1099,
       "end": 1112,
       "name": "MSTORE"
      },
      {
       "begin": 1099,
       "end": 1112,
       "name": "KECCAK256"
      },
      {
       "begin": 1099,
       "end": 1112,
       "name": "SLOAD"
      },
      {
       "begin": 1099,
       "end": 1124,
       "name": "PUSH [tag]",
       "value": "38"
      },
      {
       "begin": 1099,
       "end": 1124,
       "name": "SWAP1"
      },
      {
       "begin": 1117,
       "end": 1123,
       "name": "DUP5"
      },
      {
       "begin": 1099,
       "end": 1124,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 1099,
       "end": 1116,
       "name": "PUSH [tag]",
       "value": "39"
      },
      {
       "begin": 1099,
       "end": 1124,
       "name": "AND"
      },
      {
       "begin": 1099,
       "end": 1124,
       "name": "JUMP",
       "value": "[in]"
      },
      {
       "begin": 1099,
       "end": 1124,
       "name": "tag",
       "value": "38"
      },
      {
       "begin": 1099,
       "end": 1124,
       "name": "JUMPDEST"
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
       "begin": 1083,
       "end": 1096,
       "name": "DUP6"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "AND"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "SWAP1"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "DUP2"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "MSTORE"
      },
      {
       "begin": 1083,
       "end": 1091,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "MSTORE"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "SWAP1"
      },
      {
       "begin": 1083,
       "end": 1096,
       "name": "KECCAK256"
      },
      {
       "begin": 1083,
       "end": 1124,
       "name": "SSTORE"
      },
      {
       "begin": 1159,
       "end": 1181,
       "name": "PUSH [tag]",
       "value": "40"
      },
      {
       "begin": 1159,
       "end": 1169,
       "name": "DUP2"
      },
      {
       "begin": 1174,
       "end": 1180,
       "name": "DUP5"
      },
      {
       "begin": 1159,
       "end": 1181,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 1159,
       "end": 1173,
       "name": "PUSH [tag]",
       "value": "37"
      },
      {
       "begin": 1159,
       "end": 1181,
       "name": "AND"
      },
      {
       "begin": 1159,
       "end": 1181,
       "name": "JUMP",
       "value": "[in]"
      },
      {
       "begin": 1159,
       "end": 1181,
       "name": "tag",
       "value": "40"
      },
      {
       "begin": 1159,
       "end": 1181,
       "name": "JUMPDEST"
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
       "begin": 1130,
       "end": 1144,
       "name": "DUP1"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "DUP8"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "AND"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "DUP2"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "DUP2"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "MSTORE"
      },
      {
       "begin": 1130,
       "end": 1137,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "SWAP1"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "DUP2"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "MSTORE"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "DUP1"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "DUP4"
      },
      {
       "begin": 1130,
       "end": 1144,
       "name": "KECCAK256"
      },
      {
       "begin": 1145,
       "end": 1155,
       "name": "CALLER"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "DUP7"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "AND"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "DUP5"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "MSTORE"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "SWAP1"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "SWAP2"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "MSTORE"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "SWAP1"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "DUP2"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "SWAP1"
      },
      {
       "begin": 1130,
       "end": 1156,
       "name": "KECCAK256"
      },
      {
       "begin": 1130,
       "end": 1181,
       "name": "SWAP4"
      },
      {
       "begin": 1130,
       "end": 1181,
       "name": "SWAP1"
      },
      {
       "begin": 1130,
       "end": 1181,
       "name": "SWAP4"
      },
      {
       "begin": 1130,
       "end": 1181,
       "name": "SSTORE"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "SWAP1"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "DUP7"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "AND"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "SWAP2"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "PUSH",
       "value": "DDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "SWAP1"
      },
      {
       "begin": 1208,
       "end": 1214,
       "name": "DUP7"
      },
      {
       "begin": 1208,
       "end": 1214,
       "name": "SWAP1"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "MLOAD"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "SWAP1"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "DUP2"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "MSTORE"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "ADD"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "MLOAD"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "DUP1"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "SWAP2"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "SUB"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "SWAP1"
      },
      {
       "begin": 1187,
       "end": 1215,
       "name": "LOG3"
      },
      {
       "begin": 1228,
       "end": 1232,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 1221,
       "end": 1232,
       "name": "SWAP2"
      },
      {
       "begin": 1221,
       "end": 1232,
       "name": "POP"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "tag",
       "value": "35"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "JUMPDEST"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "POP"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "SWAP4"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "SWAP3"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "POP"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "POP"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "POP"
      },
      {
       "begin": 748,
       "end": 1237,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "tag",
       "value": "21"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "JUMPDEST"
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
       "begin": 2735,
       "end": 2745,
       "name": "CALLER"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "DUP2"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "AND"
      },
      {
       "begin": 2691,
       "end": 2703,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "SWAP1"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "DUP2"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "MSTORE"
      },
      {
       "begin": 2727,
       "end": 2734,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "SWAP1"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "DUP2"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "MSTORE"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "DUP1"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "DUP4"
      },
      {
       "begin": 2727,
       "end": 2746,
       "name": "KECCAK256"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "SWAP4"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "DUP7"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "AND"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "DUP4"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "MSTORE"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "SWAP3"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "SWAP1"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "MSTORE"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "SWAP1"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "DUP2"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "KECCAK256"
      },
      {
       "begin": 2727,
       "end": 2756,
       "name": "SLOAD"
      },
      {
       "begin": 2766,
       "end": 2793,
       "name": "DUP1"
      },
      {
       "begin": 2766,
       "end": 2793,
       "name": "DUP4"
      },
      {
       "begin": 2766,
       "end": 2793,
       "name": "GT"
      },
      {
       "begin": 2762,
       "end": 2926,
       "name": "ISZERO"
      },
      {
       "begin": 2762,
       "end": 2926,
       "name": "PUSH [tag]",
       "value": "42"
      },
      {
       "begin": 2762,
       "end": 2926,
       "name": "JUMPI"
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
       "begin": 2811,
       "end": 2821,
       "name": "CALLER"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "DUP2"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "AND"
      },
      {
       "begin": 2835,
       "end": 2836,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "SWAP1"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "DUP2"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "MSTORE"
      },
      {
       "begin": 2803,
       "end": 2810,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "SWAP1"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "DUP2"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "MSTORE"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "DUP1"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "DUP4"
      },
      {
       "begin": 2803,
       "end": 2822,
       "name": "KECCAK256"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "SWAP4"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "DUP9"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "AND"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "DUP4"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "MSTORE"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "SWAP3"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "SWAP1"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "MSTORE"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "SWAP1"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "DUP2"
      },
      {
       "begin": 2803,
       "end": 2832,
       "name": "KECCAK256"
      },
      {
       "begin": 2803,
       "end": 2836,
       "name": "SSTORE"
      },
      {
       "begin": 2762,
       "end": 2926,
       "name": "PUSH [tag]",
       "value": "43"
      },
      {
       "begin": 2762,
       "end": 2926,
       "name": "JUMP"
      },
      {
       "begin": 2762,
       "end": 2926,
       "name": "tag",
       "value": "42"
      },
      {
       "begin": 2762,
       "end": 2926,
       "name": "JUMPDEST"
      },
      {
       "begin": 2889,
       "end": 2919,
       "name": "PUSH [tag]",
       "value": "44"
      },
      {
       "begin": 2889,
       "end": 2897,
       "name": "DUP2"
      },
      {
       "begin": 2902,
       "end": 2918,
       "name": "DUP5"
      },
      {
       "begin": 2889,
       "end": 2919,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 2889,
       "end": 2901,
       "name": "PUSH [tag]",
       "value": "37"
      },
      {
       "begin": 2889,
       "end": 2919,
       "name": "AND"
      },
      {
       "begin": 2889,
       "end": 2919,
       "name": "JUMP",
       "value": "[in]"
      },
      {
       "begin": 2889,
       "end": 2919,
       "name": "tag",
       "value": "44"
      },
      {
       "begin": 2889,
       "end": 2919,
       "name": "JUMPDEST"
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
       "begin": 2865,
       "end": 2875,
       "name": "CALLER"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "DUP2"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "AND"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "SWAP1"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "DUP2"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "MSTORE"
      },
      {
       "begin": 2857,
       "end": 2864,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "SWAP1"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "DUP2"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "MSTORE"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "DUP1"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "DUP4"
      },
      {
       "begin": 2857,
       "end": 2876,
       "name": "KECCAK256"
      },
      {
       "begin": 2857,
       "end": 2886,
       "name": "SWAP4"
      },
      {
       "begin": 2857,
       "end": 2886,
       "name": "DUP10"
      },
      {
       "begin": 2857,
       "end": 2886,
       "name": "AND"
      },
      {
       "begin": 2857,
       "end": 2886,
       "name": "DUP4"
      },
      {
       "begin": 2857,
       "end": 2886,
       "name": "MSTORE"
      },
      {
       "begin": 2857,
       "end": 2886,
       "name": "SWAP3"
      },
      {
       "begin": 2857,
       "end": 2886,
       "name": "SWAP1"
      },
      {
       "begin": 2857,
       "end": 2886,
       "name": "MSTORE"
      },
      {
       "begin": 2857,
       "end": 2886,
       "name": "KECCAK256"
      },
      {
       "begin": 2857,
       "end": 2919,
       "name": "SSTORE"
      },
      {
       "begin": 2762,
       "end": 2926,
       "name": "tag",
       "value": "43"
      },
      {
       "begin": 2762,
       "end": 2926,
       "name": "JUMPDEST"
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
       "begin": 2940,
       "end": 2950,
       "name": "CALLER"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "DUP2"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "AND"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "DUP2"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "DUP2"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "MSTORE"
      },
      {
       "begin": 2962,
       "end": 2969,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "SWAP1"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "DUP2"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "MSTORE"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "DUP1"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "DUP4"
      },
      {
       "begin": 2962,
       "end": 2981,
       "name": "KECCAK256"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "SWAP5"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "DUP10"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "AND"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "DUP1"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "DUP5"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "MSTORE"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "SWAP5"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "SWAP1"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "SWAP2"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "MSTORE"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "SWAP1"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "DUP2"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "SWAP1"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "KECCAK256"
      },
      {
       "begin": 2962,
       "end": 2991,
       "name": "SLOAD"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "PUSH",
       "value": "8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "SWAP2"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "MLOAD"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "SWAP1"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "DUP2"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "MSTORE"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "ADD"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "MLOAD"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "DUP1"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "SWAP2"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "SUB"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "SWAP1"
      },
      {
       "begin": 2931,
       "end": 2992,
       "name": "LOG3"
      },
      {
       "begin": 3005,
       "end": 3009,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 2998,
       "end": 3009,
       "name": "SWAP2"
      },
      {
       "begin": 2998,
       "end": 3009,
       "name": "POP"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "tag",
       "value": "41"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "JUMPDEST"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "POP"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "SWAP3"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "SWAP2"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "POP"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "POP"
      },
      {
       "begin": 2609,
       "end": 3014,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "tag",
       "value": "24"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "JUMPDEST"
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
       "begin": 975,
       "end": 991,
       "name": "DUP2"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "AND"
      },
      {
       "begin": 945,
       "end": 960,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "SWAP1"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "DUP2"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "MSTORE"
      },
      {
       "begin": 975,
       "end": 983,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "MSTORE"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "SWAP1"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "KECCAK256"
      },
      {
       "begin": 975,
       "end": 991,
       "name": "SLOAD"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "tag",
       "value": "45"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "JUMPDEST"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "SWAP2"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "SWAP1"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "POP"
      },
      {
       "begin": 892,
       "end": 996,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "tag",
       "value": "27"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "JUMPDEST"
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
       "begin": 558,
       "end": 568,
       "name": "CALLER"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "AND"
      },
      {
       "begin": 514,
       "end": 518,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "SWAP1"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "DUP2"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "MSTORE"
      },
      {
       "begin": 549,
       "end": 557,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "MSTORE"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "DUP2"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "KECCAK256"
      },
      {
       "begin": 549,
       "end": 569,
       "name": "SLOAD"
      },
      {
       "begin": 549,
       "end": 581,
       "name": "PUSH [tag]",
       "value": "47"
      },
      {
       "begin": 549,
       "end": 581,
       "name": "SWAP1"
      },
      {
       "begin": 574,
       "end": 580,
       "name": "DUP4"
      },
      {
       "begin": 549,
       "end": 581,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 549,
       "end": 573,
       "name": "PUSH [tag]",
       "value": "37"
      },
      {
       "begin": 549,
       "end": 581,
       "name": "AND"
      },
      {
       "begin": 549,
       "end": 581,
       "name": "JUMP",
       "value": "[in]"
      },
      {
       "begin": 549,
       "end": 581,
       "name": "tag",
       "value": "47"
      },
      {
       "begin": 549,
       "end": 581,
       "name": "JUMPDEST"
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
       "begin": 535,
       "end": 545,
       "name": "CALLER"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "DUP2"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "AND"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "SWAP1"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "DUP2"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "MSTORE"
      },
      {
       "begin": 526,
       "end": 534,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "MSTORE"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "DUP1"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "DUP3"
      },
      {
       "begin": 526,
       "end": 546,
       "name": "KECCAK256"
      },
      {
       "begin": 526,
       "end": 581,
       "name": "SWAP4"
      },
      {
       "begin": 526,
       "end": 581,
       "name": "SWAP1"
      },
      {
       "begin": 526,
       "end": 581,
       "name": "SWAP4"
      },
      {
       "begin": 526,
       "end": 581,
       "name": "SSTORE"
      },
      {
       "begin": 603,
       "end": 616,
       "name": "SWAP1"
      },
      {
       "begin": 603,
       "end": 616,
       "name": "DUP6"
      },
      {
       "begin": 603,
       "end": 616,
       "name": "AND"
      },
      {
       "begin": 603,
       "end": 616,
       "name": "DUP2"
      },
      {
       "begin": 603,
       "end": 616,
       "name": "MSTORE"
      },
      {
       "begin": 603,
       "end": 616,
       "name": "KECCAK256"
      },
      {
       "begin": 603,
       "end": 616,
       "name": "SLOAD"
      },
      {
       "begin": 603,
       "end": 628,
       "name": "PUSH [tag]",
       "value": "48"
      },
      {
       "begin": 603,
       "end": 628,
       "name": "SWAP1"
      },
      {
       "begin": 621,
       "end": 627,
       "name": "DUP4"
      },
      {
       "begin": 603,
       "end": 628,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 603,
       "end": 620,
       "name": "PUSH [tag]",
       "value": "39"
      },
      {
       "begin": 603,
       "end": 628,
       "name": "AND"
      },
      {
       "begin": 603,
       "end": 628,
       "name": "JUMP",
       "value": "[in]"
      },
      {
       "begin": 603,
       "end": 628,
       "name": "tag",
       "value": "48"
      },
      {
       "begin": 603,
       "end": 628,
       "name": "JUMPDEST"
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
       "begin": 587,
       "end": 600,
       "name": "DUP1"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "DUP6"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "AND"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "DUP2"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "DUP2"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "MSTORE"
      },
      {
       "begin": 587,
       "end": 595,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "MSTORE"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "SWAP1"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "DUP2"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "SWAP1"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "KECCAK256"
      },
      {
       "begin": 587,
       "end": 628,
       "name": "SWAP4"
      },
      {
       "begin": 587,
       "end": 628,
       "name": "SWAP1"
      },
      {
       "begin": 587,
       "end": 628,
       "name": "SWAP4"
      },
      {
       "begin": 587,
       "end": 628,
       "name": "SSTORE"
      },
      {
       "begin": 587,
       "end": 600,
       "name": "SWAP2"
      },
      {
       "begin": 643,
       "end": 653,
       "name": "CALLER"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "SWAP1"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "SWAP2"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "AND"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "SWAP1"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "PUSH",
       "value": "DDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "SWAP1"
      },
      {
       "begin": 660,
       "end": 666,
       "name": "DUP6"
      },
      {
       "begin": 660,
       "end": 666,
       "name": "SWAP1"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "MLOAD"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "SWAP1"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "DUP2"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "MSTORE"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "ADD"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "MLOAD"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "DUP1"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "SWAP2"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "SUB"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "SWAP1"
      },
      {
       "begin": 634,
       "end": 667,
       "name": "LOG3"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 680,
       "end": 684,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "tag",
       "value": "46"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "JUMPDEST"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "SWAP3"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "SWAP2"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "POP"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "POP"
      },
      {
       "begin": 458,
       "end": 689,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "tag",
       "value": "30"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "JUMPDEST"
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
       "begin": 2478,
       "end": 2488,
       "name": "CALLER"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "DUP2"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "AND"
      },
      {
       "begin": 2418,
       "end": 2430,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "SWAP1"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "DUP2"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "MSTORE"
      },
      {
       "begin": 2470,
       "end": 2477,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "SWAP1"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "DUP2"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "MSTORE"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "DUP1"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "DUP4"
      },
      {
       "begin": 2470,
       "end": 2489,
       "name": "KECCAK256"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "SWAP4"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "DUP7"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "AND"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "DUP4"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "MSTORE"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "SWAP3"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "SWAP1"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "MSTORE"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "SWAP1"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "DUP2"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "KECCAK256"
      },
      {
       "begin": 2470,
       "end": 2499,
       "name": "SLOAD"
      },
      {
       "begin": 2470,
       "end": 2516,
       "name": "PUSH [tag]",
       "value": "50"
      },
      {
       "begin": 2470,
       "end": 2516,
       "name": "SWAP1"
      },
      {
       "begin": 2504,
       "end": 2515,
       "name": "DUP4"
      },
      {
       "begin": 2470,
       "end": 2516,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 2470,
       "end": 2503,
       "name": "PUSH [tag]",
       "value": "39"
      },
      {
       "begin": 2470,
       "end": 2516,
       "name": "AND"
      },
      {
       "begin": 2470,
       "end": 2516,
       "name": "JUMP",
       "value": "[in]"
      },
      {
       "begin": 2470,
       "end": 2516,
       "name": "tag",
       "value": "50"
      },
      {
       "begin": 2470,
       "end": 2516,
       "name": "JUMPDEST"
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
       "begin": 2446,
       "end": 2456,
       "name": "CALLER"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "DUP2"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "AND"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "DUP2"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "DUP2"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "MSTORE"
      },
      {
       "begin": 2438,
       "end": 2445,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "SWAP1"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "DUP2"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "MSTORE"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "DUP1"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "DUP4"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "KECCAK256"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "SWAP5"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "DUP10"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "AND"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "DUP1"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "DUP5"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "MSTORE"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "SWAP5"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "SWAP1"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "SWAP2"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "MSTORE"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "SWAP1"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "DUP2"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "SWAP1"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "KECCAK256"
      },
      {
       "begin": 2438,
       "end": 2516,
       "name": "DUP5"
      },
      {
       "begin": 2438,
       "end": 2516,
       "name": "SWAP1"
      },
      {
       "begin": 2438,
       "end": 2516,
       "name": "SSTORE"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "SWAP2"
      },
      {
       "begin": 2438,
       "end": 2467,
       "name": "SWAP3"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "SWAP1"
      },
      {
       "begin": 2438,
       "end": 2457,
       "name": "SWAP2"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "PUSH",
       "value": "8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "SWAP2"
      },
      {
       "begin": 2438,
       "end": 2516,
       "name": "SWAP1"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "MLOAD"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "SWAP1"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "DUP2"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "MSTORE"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "ADD"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "MLOAD"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "DUP1"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "SWAP2"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "SUB"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "SWAP1"
      },
      {
       "begin": 2522,
       "end": 2583,
       "name": "LOG3"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 2596,
       "end": 2600,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "tag",
       "value": "49"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "JUMPDEST"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "SWAP3"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "SWAP2"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "POP"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "POP"
      },
      {
       "begin": 2341,
       "end": 2605,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "tag",
       "value": "33"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "JUMPDEST"
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
       "begin": 2067,
       "end": 2082,
       "name": "DUP1"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "DUP4"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "AND"
      },
      {
       "begin": 2035,
       "end": 2052,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "SWAP1"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "DUP2"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "MSTORE"
      },
      {
       "begin": 2067,
       "end": 2074,
       "name": "PUSH",
       "value": "2"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "SWAP1"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "DUP2"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "MSTORE"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "DUP1"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "DUP4"
      },
      {
       "begin": 2067,
       "end": 2082,
       "name": "KECCAK256"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "SWAP4"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "DUP6"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "AND"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "DUP4"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "MSTORE"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "SWAP3"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "SWAP1"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "MSTORE"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "KECCAK256"
      },
      {
       "begin": 2067,
       "end": 2092,
       "name": "SLOAD"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "tag",
       "value": "51"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "JUMPDEST"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "SWAP3"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "SWAP2"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "POP"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "POP"
      },
      {
       "begin": 1964,
       "end": 2097,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 566,
       "end": 680,
       "name": "tag",
       "value": "37"
      },
      {
       "begin": 566,
       "end": 680,
       "name": "JUMPDEST"
      },
      {
       "begin": 628,
       "end": 635,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 650,
       "end": 656,
       "name": "DUP3"
      },
      {
       "begin": 650,
       "end": 656,
       "name": "DUP3"
      },
      {
       "begin": 650,
       "end": 656,
       "name": "GT"
      },
      {
       "begin": 650,
       "end": 656,
       "name": "ISZERO"
      },
      {
       "begin": 643,
       "end": 657,
       "name": "PUSH [tag]",
       "value": "53"
      },
      {
       "begin": 643,
       "end": 657,
       "name": "JUMPI"
      },
      {
       "begin": 643,
       "end": 657,
       "name": "INVALID"
      },
      {
       "begin": 643,
       "end": 657,
       "name": "tag",
       "value": "53"
      },
      {
       "begin": 643,
       "end": 657,
       "name": "JUMPDEST"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "POP"
      },
      {
       "begin": 670,
       "end": 675,
       "name": "DUP1"
      },
      {
       "begin": 670,
       "end": 675,
       "name": "DUP3"
      },
      {
       "begin": 670,
       "end": 675,
       "name": "SUB"
      },
      {
       "begin": 566,
       "end": 680,
       "name": "tag",
       "value": "52"
      },
      {
       "begin": 566,
       "end": 680,
       "name": "JUMPDEST"
      },
      {
       "begin": 566,
       "end": 680,
       "name": "SWAP3"
      },
      {
       "begin": 566,
       "end": 680,
       "name": "SWAP2"
      },
      {
       "begin": 566,
       "end": 680,
       "name": "POP"
      },
      {
       "begin": 566,
       "end": 680,
       "name": "POP"
      },
      {
       "begin": 566,
       "end": 680,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "tag",
       "value": "39"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "JUMPDEST"
      },
      {
       "begin": 746,
       "end": 753,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 773,
       "end": 778,
       "name": "DUP3"
      },
      {
       "begin": 773,
       "end": 778,
       "name": "DUP3"
      },
      {
       "begin": 773,
       "end": 778,
       "name": "ADD"
      },
      {
       "begin": 791,
       "end": 797,
       "name": "DUP4"
      },
      {
       "begin": 791,
       "end": 797,
       "name": "DUP2"
      },
      {
       "begin": 791,
       "end": 797,
       "name": "LT"
      },
      {
       "begin": 791,
       "end": 797,
       "name": "ISZERO"
      },
      {
       "begin": 784,
       "end": 798,
       "name": "PUSH [tag]",
       "value": "55"
      },
      {
       "begin": 784,
       "end": 798,
       "name": "JUMPI"
      },
      {
       "begin": 784,
       "end": 798,
       "name": "INVALID"
      },
      {
       "begin": 784,
       "end": 798,
       "name": "tag",
       "value": "55"
      },
      {
       "begin": 784,
       "end": 798,
       "name": "JUMPDEST"
      },
      {
       "begin": 811,
       "end": 812,
       "name": "DUP1"
      },
      {
       "begin": 804,
       "end": 812,
       "name": "SWAP2"
      },
      {
       "begin": 804,
       "end": 812,
       "name": "POP"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "tag",
       "value": "54"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "JUMPDEST"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "POP"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "SWAP3"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "SWAP2"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "POP"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "POP"
      },
      {
       "begin": 684,
       "end": 817,
       "name": "JUMP",
       "value": "[out]"
      }
     ]
    }
   }
  },
  "methodIdentifiers": {
   "allowance(address,address)": "dd62ed3e",
   "approve(address,uint256)": "095ea7b3",
   "balanceOf(address)": "70a08231",
   "decreaseApproval(address,uint256)": "66188463",
   "increaseApproval(address,uint256)": "d73dd623",
   "totalSupply()": "18160ddd",
   "transfer(address,uint256)": "a9059cbb",
   "transferFrom(address,address,uint256)": "23b872dd"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.16+commit.d7661dd9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"Function to check the amount of tokens that an owner allowed to a spender.\",\"params\":{\"_owner\":\"address The address which owns the funds.\",\"_spender\":\"address The address which will spend the funds.\"},\"return\":\"A uint256 specifying the amount of tokens still available for the spender.\"},\"approve(address,uint256)\":{\"details\":\"Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.\",\"params\":{\"_spender\":\"The address which will spend the funds.\",\"_value\":\"The amount of tokens to be spent.\"}},\"balanceOf(address)\":{\"details\":\"Gets the balance of the specified address.\",\"params\":{\"_owner\":\"The address to query the the balance of. \"},\"return\":\"An uint256 representing the amount owned by the passed address.\"},\"transfer(address,uint256)\":{\"details\":\"transfer token for a specified address\",\"params\":{\"_to\":\"The address to transfer to.\",\"_value\":\"The amount to be transferred.\"}},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfer tokens from one address to another\",\"params\":{\"_from\":\"address The address which you want to send tokens from\",\"_to\":\"address The address which you want to transfer to\",\"_value\":\"uint256 the amount of tokens to be transferred\"}}},\"title\":\"Standard ERC20 token\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":\"linkStandardToken\"},\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":{\"keccak256\":\"0x2cf8ffbc5706435764ac6b559efc7fa332b80d35e17cfb6632839561225b6bd2\",\"urls\":[\"bzzr://a9bc9e1af2e9fe8e315112156f1e6ab9bf284b5ae42a140260c2cf950d9663ef\"]},\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":{\"keccak256\":\"0x2102fe4e4f7127666c4e408922ad637a26e02c1dfccd292ea9fa7a5b4eef172b\",\"urls\":[\"bzzr://41be046988410fa7fd84406fd20155bc22c722b89657c2e120f591be51599ebc\"]},\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkERC20.sol\":{\"keccak256\":\"0xcc5638b5697c9250838e0de415cfeb8fd9ff188c0b5509f882b64cad857300aa\",\"urls\":[\"bzzr://cce9c5b2e016977aa115e0ec43e4759aa6c5e328c5a0e0188251a098b5e17485\"]},\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkERC20Basic.sol\":{\"keccak256\":\"0x48709e79e775c71bf47d41d8521be253566652528b427a95e9322583576c6d82\",\"urls\":[\"bzzr://1e3c03d046f795b8980838cde12502477cbcbd0e157cf43e43e75dc3af903d8c\"]},\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkStandardToken.sol\":{\"keccak256\":\"0xde01a16e4810ed90311647da8d450c8b5f2db7e946f9719458918e05939534da\",\"urls\":[\"bzzr://6efa2a8a16df9c37b17aaf4ab300cd6b8c7dde9fac30351739d65aa64c322fad\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('linkStandardToken.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.linkStandardToken = linkStandardToken
