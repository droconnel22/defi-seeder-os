'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Migrations = contract({
 "contractName": "Migrations",
 "abi": [
  {
   "constant": false,
   "inputs": [
    {
     "name": "new_address",
     "type": "address"
    }
   ],
   "name": "upgrade",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "last_completed_migration",
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
   "name": "owner",
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
     "name": "completed",
     "type": "uint256"
    }
   ],
   "name": "setCompleted",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "constructor"
  }
 ],
 "evm": {
  "assembly": "    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":26:514  contract Migrations {... */\n  mstore(0x40, 0x60)\n    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":115:173  function Migrations() public {... */\n  jumpi(tag_1, iszero(callvalue))\n  0x0\n  dup1\n  revert\ntag_1:\ntag_2:\n    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":150:155  owner */\n  0x0\n    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":150:168  owner = msg.sender */\n  dup1\n  sload\n  not(sub(exp(0x2, 0xa0), 0x1))\n  and\n    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":158:168  msg.sender */\n  caller\n  sub(exp(0x2, 0xa0), 0x1)\n    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":150:168  owner = msg.sender */\n  and\n  or\n  swap1\n  sstore\n    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":115:173  function Migrations() public {... */\ntag_3:\n    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":26:514  contract Migrations {... */\ntag_4:\n  dataSize(sub_0)\n  dup1\n  dataOffset(sub_0)\n  0x0\n  codecopy\n  0x0\n  return\nstop\n\nsub_0: assembly {\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":26:514  contract Migrations {... */\n      mstore(0x40, 0x60)\n      and(div(calldataload(0x0), 0x100000000000000000000000000000000000000000000000000000000), 0xffffffff)\n      0x900f010\n      dup2\n      eq\n      tag_2\n      jumpi\n      dup1\n      0x445df0ac\n      eq\n      tag_3\n      jumpi\n      dup1\n      0x8da5cb5b\n      eq\n      tag_4\n      jumpi\n      dup1\n      0xfdacd576\n      eq\n      tag_5\n      jumpi\n    tag_1:\n      0x0\n      dup1\n      revert\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":347:512  function upgrade(address new_address) public restricted {... */\n    tag_2:\n      jumpi(tag_6, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_6:\n      tag_7\n      and(calldataload(0x4), sub(exp(0x2, 0xa0), 0x1))\n      jump(tag_8)\n    tag_7:\n      stop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":74:110  uint public last_completed_migration */\n    tag_3:\n      jumpi(tag_9, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_9:\n      tag_10\n      jump(tag_11)\n    tag_10:\n      mload(0x40)\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":50:70  address public owner */\n    tag_4:\n      jumpi(tag_12, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_12:\n      tag_13\n      jump(tag_14)\n    tag_13:\n      mload(0x40)\n      sub(exp(0x2, 0xa0), 0x1)\n      swap1\n      swap2\n      and\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":240:343  function setCompleted(uint completed) public restricted {... */\n    tag_5:\n      jumpi(tag_15, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_15:\n      tag_7\n      calldataload(0x4)\n      jump(tag_17)\n    tag_16:\n      stop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":347:512  function upgrade(address new_address) public restricted {... */\n    tag_8:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":409:428  Migrations upgraded */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":223:228  owner */\n      dup1\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":209:219  msg.sender */\n      caller\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":209:228  msg.sender == owner */\n      swap1\n      dup2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":223:228  owner */\n      swap2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":209:228  msg.sender == owner */\n      eq\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":205:231  if (msg.sender == owner) _ */\n      iszero\n      tag_20\n      jumpi\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":442:453  new_address */\n      dup2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":409:454  Migrations upgraded = Migrations(new_address) */\n      swap1\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":460:468  upgraded */\n      dup1\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":460:481  upgraded.setCompleted */\n      and\n      0xfdacd576\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":482:506  last_completed_migration */\n      sload(0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":460:507  upgraded.setCompleted(last_completed_migration) */\n      mload(0x40)\n      0x100000000000000000000000000000000000000000000000000000000\n      0xffffffff\n      dup5\n      and\n      mul\n      dup2\n      mstore\n      0x4\n      dup2\n      add\n      swap2\n      swap1\n      swap2\n      mstore\n      0x24\n      add\n      0x0\n      mload(0x40)\n      dup1\n      dup4\n      sub\n      dup2\n      0x0\n      dup8\n      dup1\n      extcodesize\n      iszero\n      iszero\n      tag_21\n      jumpi\n      0x0\n      dup1\n      revert\n    tag_21:\n      sub(gas, 0x2c6)\n      call\n      iszero\n      iszero\n      tag_22\n      jumpi\n      0x0\n      dup1\n      revert\n    tag_22:\n      pop\n      pop\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":230:231  _ */\n    tag_20:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":205:231  if (msg.sender == owner) _ */\n    tag_19:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":347:512  function upgrade(address new_address) public restricted {... */\n    tag_18:\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":74:110  uint public last_completed_migration */\n    tag_11:\n      sload(0x1)\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":50:70  address public owner */\n    tag_14:\n      and(sub(exp(0x2, 0xa0), 0x1), sload(0x0))\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":240:343  function setCompleted(uint completed) public restricted {... */\n    tag_17:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":223:228  owner */\n      sload(0x0)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":209:219  msg.sender */\n      caller\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":209:228  msg.sender == owner */\n      swap1\n      dup2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":223:228  owner */\n      swap2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":209:228  msg.sender == owner */\n      eq\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":205:231  if (msg.sender == owner) _ */\n      iszero\n      tag_25\n      jumpi\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":302:326  last_completed_migration */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":302:338  last_completed_migration = completed */\n      dup2\n      swap1\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":230:231  _ */\n    tag_25:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":205:231  if (msg.sender == owner) _ */\n    tag_24:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":240:343  function setCompleted(uint completed) public restricted {... */\n    tag_23:\n      pop\n      jump\t// out\n\n    auxdata: 0xa165627a7a72305820e60f1246cda0a739ef2b4b7208f7674268720dbe70ee1c5b55273e146fa762a60029\n}\n",
  "bytecode": {
   "linkReferences": {},
   "object": "0x6060604052341561000f57600080fd5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6101e58061003c6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630900f010811461005e578063445df0ac1461007f5780638da5cb5b146100a4578063fdacd576146100d3575b600080fd5b341561006957600080fd5b61007d600160a060020a03600435166100eb565b005b341561008a57600080fd5b610092610182565b60405190815260200160405180910390f35b34156100af57600080fd5b6100b7610188565b604051600160a060020a03909116815260200160405180910390f35b34156100de57600080fd5b61007d600435610197565b005b6000805433600160a060020a039081169116141561017c5781905080600160a060020a031663fdacd5766001546040517c010000000000000000000000000000000000000000000000000000000063ffffffff84160281526004810191909152602401600060405180830381600087803b151561016757600080fd5b6102c65a03f1151561017857600080fd5b5050505b5b5b5050565b60015481565b600054600160a060020a031681565b60005433600160a060020a03908116911614156101b45760018190555b5b5b505600a165627a7a72305820e60f1246cda0a739ef2b4b7208f7674268720dbe70ee1c5b55273e146fa762a60029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND OR SWAP1 SSTORE JUMPDEST JUMPDEST PUSH2 0x1E5 DUP1 PUSH2 0x3C PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x900F010 DUP2 EQ PUSH2 0x5E JUMPI DUP1 PUSH4 0x445DF0AC EQ PUSH2 0x7F JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xA4 JUMPI DUP1 PUSH4 0xFDACD576 EQ PUSH2 0xD3 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x69 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x7D PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0xEB JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0x8A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x92 PUSH2 0x182 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xAF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB7 PUSH2 0x188 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xDE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x7D PUSH1 0x4 CALLDATALOAD PUSH2 0x197 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ ISZERO PUSH2 0x17C JUMPI DUP2 SWAP1 POP DUP1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH4 0xFDACD576 PUSH1 0x1 SLOAD PUSH1 0x40 MLOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH4 0xFFFFFFFF DUP5 AND MUL DUP2 MSTORE PUSH1 0x4 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x24 ADD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO ISZERO PUSH2 0x167 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x2C6 GAS SUB CALL ISZERO ISZERO PUSH2 0x178 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP POP POP JUMPDEST JUMPDEST JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ ISZERO PUSH2 0x1B4 JUMPI PUSH1 0x1 DUP2 SWAP1 SSTORE JUMPDEST JUMPDEST JUMPDEST POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xe6 0xf SLT 0x46 0xcd LOG0 0xa7 CODECOPY 0xef 0x2b 0x4b PUSH19 0x8F7674268720DBE70EE1C5B55273E146FA762 0xa6 STOP 0x29 ",
   "sourceMap": "26:488:2:-;;;115:58;;;;;;;;;150:5;:18;;-1:-1:-1;;;;;;150:18:2;158:10;-1:-1:-1;;;;;150:18:2;;;;115:58;26:488;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630900f010811461005e578063445df0ac1461007f5780638da5cb5b146100a4578063fdacd576146100d3575b600080fd5b341561006957600080fd5b61007d600160a060020a03600435166100eb565b005b341561008a57600080fd5b610092610182565b60405190815260200160405180910390f35b34156100af57600080fd5b6100b7610188565b604051600160a060020a03909116815260200160405180910390f35b34156100de57600080fd5b61007d600435610197565b005b6000805433600160a060020a039081169116141561017c5781905080600160a060020a031663fdacd5766001546040517c010000000000000000000000000000000000000000000000000000000063ffffffff84160281526004810191909152602401600060405180830381600087803b151561016757600080fd5b6102c65a03f1151561017857600080fd5b5050505b5b5b5050565b60015481565b600054600160a060020a031681565b60005433600160a060020a03908116911614156101b45760018190555b5b5b505600a165627a7a72305820e60f1246cda0a739ef2b4b7208f7674268720dbe70ee1c5b55273e146fa762a60029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x900F010 DUP2 EQ PUSH2 0x5E JUMPI DUP1 PUSH4 0x445DF0AC EQ PUSH2 0x7F JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xA4 JUMPI DUP1 PUSH4 0xFDACD576 EQ PUSH2 0xD3 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x69 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x7D PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0xEB JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0x8A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x92 PUSH2 0x182 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xAF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB7 PUSH2 0x188 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xDE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x7D PUSH1 0x4 CALLDATALOAD PUSH2 0x197 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ ISZERO PUSH2 0x17C JUMPI DUP2 SWAP1 POP DUP1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH4 0xFDACD576 PUSH1 0x1 SLOAD PUSH1 0x40 MLOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH4 0xFFFFFFFF DUP5 AND MUL DUP2 MSTORE PUSH1 0x4 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x24 ADD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO ISZERO PUSH2 0x167 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x2C6 GAS SUB CALL ISZERO ISZERO PUSH2 0x178 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP POP POP JUMPDEST JUMPDEST JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND SWAP2 AND EQ ISZERO PUSH2 0x1B4 JUMPI PUSH1 0x1 DUP2 SWAP1 SSTORE JUMPDEST JUMPDEST JUMPDEST POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xe6 0xf SLT 0x46 0xcd LOG0 0xa7 CODECOPY 0xef 0x2b 0x4b PUSH19 0x8F7674268720DBE70EE1C5B55273E146FA762 0xa6 STOP 0x29 ",
   "sourceMap": "26:488:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;347:165;;;;;;;;;;-1:-1:-1;;;;;347:165:2;;;;;;;74:36;;;;;;;;;;;;;;;;;;;;;;;;;;;50:20;;;;;;;;;;;;;;;-1:-1:-1;;;;;50:20:2;;;;;;;;;;;;;;240:103;;;;;;;;;;;;;;;;347:165;409:19;223:5;;209:10;-1:-1:-1;;;;;209:19:2;;;223:5;;209:19;205:26;;;442:11;409:45;;460:8;-1:-1:-1;;;;;460:21:2;;482:24;;460:47;;;;;;;;;;;;;;;;;;-1:-1:-1;460:47:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;230:1;205:26;347:165;;;:::o;74:36::-;;;;:::o;50:20::-;;;-1:-1:-1;;;;;50:20:2;;:::o;240:103::-;223:5;;209:10;-1:-1:-1;;;;;209:19:2;;;223:5;;209:19;205:26;;;302:24;:36;;;230:1;205:26;240:103;;:::o"
  },
  "gasEstimates": {
   "creation": {
    "codeDepositCost": "97000",
    "executionCost": "20512",
    "totalCost": "117512"
   },
   "external": {
    "last_completed_migration()": "374",
    "owner()": "549",
    "setCompleted(uint256)": "20501",
    "upgrade(address)": "infinite"
   }
  },
  "legacyAssembly": {
   ".code": [
    {
     "begin": 26,
     "end": 514,
     "name": "PUSH",
     "value": "60"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "PUSH",
     "value": "40"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "MSTORE"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "CALLVALUE"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "ISZERO"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "PUSH [tag]",
     "value": "1"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "JUMPI"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "DUP1"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "REVERT"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "tag",
     "value": "1"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "JUMPDEST"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "tag",
     "value": "2"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "JUMPDEST"
    },
    {
     "begin": 150,
     "end": 155,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 150,
     "end": 168,
     "name": "DUP1"
    },
    {
     "begin": 150,
     "end": 168,
     "name": "SLOAD"
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
     "begin": -1,
     "end": -1,
     "name": "NOT"
    },
    {
     "begin": 150,
     "end": 168,
     "name": "AND"
    },
    {
     "begin": 158,
     "end": 168,
     "name": "CALLER"
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
     "begin": 150,
     "end": 168,
     "name": "AND"
    },
    {
     "begin": 150,
     "end": 168,
     "name": "OR"
    },
    {
     "begin": 150,
     "end": 168,
     "name": "SWAP1"
    },
    {
     "begin": 150,
     "end": 168,
     "name": "SSTORE"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "tag",
     "value": "3"
    },
    {
     "begin": 115,
     "end": 173,
     "name": "JUMPDEST"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "tag",
     "value": "4"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "JUMPDEST"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "PUSH #[$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "DUP1"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "PUSH [$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "CODECOPY"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 26,
     "end": 514,
     "name": "RETURN"
    }
   ],
   ".data": {
    "0": {
     ".auxdata": "a165627a7a72305820e60f1246cda0a739ef2b4b7208f7674268720dbe70ee1c5b55273e146fa762a60029",
     ".code": [
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "60"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "MSTORE"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "100000000000000000000000000000000000000000000000000000000"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "DIV"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "AND"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "900F010"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "DUP2"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "EQ"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH [tag]",
       "value": "2"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "445DF0AC"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "EQ"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH [tag]",
       "value": "3"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "8DA5CB5B"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "EQ"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH [tag]",
       "value": "4"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "FDACD576"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "EQ"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH [tag]",
       "value": "5"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "JUMPI"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "tag",
       "value": "1"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "JUMPDEST"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "DUP1"
      },
      {
       "begin": 26,
       "end": 514,
       "name": "REVERT"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "tag",
       "value": "2"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "JUMPDEST"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "CALLVALUE"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "ISZERO"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "PUSH [tag]",
       "value": "6"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "JUMPI"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "DUP1"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "REVERT"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "tag",
       "value": "6"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "JUMPDEST"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "PUSH [tag]",
       "value": "7"
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
       "begin": 347,
       "end": 512,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "AND"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "PUSH [tag]",
       "value": "8"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "JUMP"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "tag",
       "value": "7"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "JUMPDEST"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "STOP"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "tag",
       "value": "3"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "JUMPDEST"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "CALLVALUE"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "ISZERO"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "PUSH [tag]",
       "value": "9"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "JUMPI"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "DUP1"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "REVERT"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "tag",
       "value": "9"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "JUMPDEST"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "PUSH [tag]",
       "value": "10"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "PUSH [tag]",
       "value": "11"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "JUMP"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "tag",
       "value": "10"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "JUMPDEST"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "MLOAD"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "SWAP1"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "DUP2"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "MSTORE"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "ADD"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "MLOAD"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "DUP1"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "SWAP2"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "SUB"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "SWAP1"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "RETURN"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "tag",
       "value": "4"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "JUMPDEST"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "CALLVALUE"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "ISZERO"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "PUSH [tag]",
       "value": "12"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "JUMPI"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "DUP1"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "REVERT"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "tag",
       "value": "12"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "JUMPDEST"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "PUSH [tag]",
       "value": "13"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "PUSH [tag]",
       "value": "14"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "JUMP"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "tag",
       "value": "13"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "JUMPDEST"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "MLOAD"
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
       "begin": 50,
       "end": 70,
       "name": "SWAP1"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "SWAP2"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "AND"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "DUP2"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "MSTORE"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "PUSH",
       "value": "20"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "ADD"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "MLOAD"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "DUP1"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "SWAP2"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "SUB"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "SWAP1"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "RETURN"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "tag",
       "value": "5"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "JUMPDEST"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "CALLVALUE"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "ISZERO"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "PUSH [tag]",
       "value": "15"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "JUMPI"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "DUP1"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "REVERT"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "tag",
       "value": "15"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "JUMPDEST"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "PUSH [tag]",
       "value": "7"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "PUSH [tag]",
       "value": "17"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "JUMP"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "tag",
       "value": "16"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "JUMPDEST"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "STOP"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "tag",
       "value": "8"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "JUMPDEST"
      },
      {
       "begin": 409,
       "end": 428,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 223,
       "end": 228,
       "name": "DUP1"
      },
      {
       "begin": 223,
       "end": 228,
       "name": "SLOAD"
      },
      {
       "begin": 209,
       "end": 219,
       "name": "CALLER"
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
       "begin": 209,
       "end": 228,
       "name": "SWAP1"
      },
      {
       "begin": 209,
       "end": 228,
       "name": "DUP2"
      },
      {
       "begin": 209,
       "end": 228,
       "name": "AND"
      },
      {
       "begin": 223,
       "end": 228,
       "name": "SWAP2"
      },
      {
       "begin": 223,
       "end": 228,
       "name": "AND"
      },
      {
       "begin": 209,
       "end": 228,
       "name": "EQ"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "ISZERO"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "PUSH [tag]",
       "value": "20"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "JUMPI"
      },
      {
       "begin": 442,
       "end": 453,
       "name": "DUP2"
      },
      {
       "begin": 409,
       "end": 454,
       "name": "SWAP1"
      },
      {
       "begin": 409,
       "end": 454,
       "name": "POP"
      },
      {
       "begin": 460,
       "end": 468,
       "name": "DUP1"
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
       "begin": 460,
       "end": 481,
       "name": "AND"
      },
      {
       "begin": 460,
       "end": 481,
       "name": "PUSH",
       "value": "FDACD576"
      },
      {
       "begin": 482,
       "end": 506,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 482,
       "end": 506,
       "name": "SLOAD"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "MLOAD"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "100000000000000000000000000000000000000000000000000000000"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP5"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "AND"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "MUL"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP2"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "MSTORE"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "4"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP2"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "ADD"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "SWAP2"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "SWAP1"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "SWAP2"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "MSTORE"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "24"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "ADD"
      },
      {
       "begin": -1,
       "end": -1,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "MLOAD"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP1"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP4"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "SUB"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP2"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP8"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP1"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "EXTCODESIZE"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "ISZERO"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "ISZERO"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH [tag]",
       "value": "21"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "JUMPI"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP1"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "REVERT"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "tag",
       "value": "21"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "JUMPDEST"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "2C6"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "GAS"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "SUB"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "CALL"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "ISZERO"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "ISZERO"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH [tag]",
       "value": "22"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "JUMPI"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "DUP1"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "REVERT"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "tag",
       "value": "22"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "JUMPDEST"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "POP"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "POP"
      },
      {
       "begin": 460,
       "end": 507,
       "name": "POP"
      },
      {
       "begin": 230,
       "end": 231,
       "name": "tag",
       "value": "20"
      },
      {
       "begin": 230,
       "end": 231,
       "name": "JUMPDEST"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "tag",
       "value": "19"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "JUMPDEST"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "tag",
       "value": "18"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "JUMPDEST"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "POP"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "POP"
      },
      {
       "begin": 347,
       "end": 512,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "tag",
       "value": "11"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "JUMPDEST"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "SLOAD"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "DUP2"
      },
      {
       "begin": 74,
       "end": 110,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "tag",
       "value": "14"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "JUMPDEST"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "SLOAD"
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
       "begin": 50,
       "end": 70,
       "name": "AND"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "DUP2"
      },
      {
       "begin": 50,
       "end": 70,
       "name": "JUMP",
       "value": "[out]"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "tag",
       "value": "17"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "JUMPDEST"
      },
      {
       "begin": 223,
       "end": 228,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 223,
       "end": 228,
       "name": "SLOAD"
      },
      {
       "begin": 209,
       "end": 219,
       "name": "CALLER"
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
       "begin": 209,
       "end": 228,
       "name": "SWAP1"
      },
      {
       "begin": 209,
       "end": 228,
       "name": "DUP2"
      },
      {
       "begin": 209,
       "end": 228,
       "name": "AND"
      },
      {
       "begin": 223,
       "end": 228,
       "name": "SWAP2"
      },
      {
       "begin": 223,
       "end": 228,
       "name": "AND"
      },
      {
       "begin": 209,
       "end": 228,
       "name": "EQ"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "ISZERO"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "PUSH [tag]",
       "value": "25"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "JUMPI"
      },
      {
       "begin": 302,
       "end": 326,
       "name": "PUSH",
       "value": "1"
      },
      {
       "begin": 302,
       "end": 338,
       "name": "DUP2"
      },
      {
       "begin": 302,
       "end": 338,
       "name": "SWAP1"
      },
      {
       "begin": 302,
       "end": 338,
       "name": "SSTORE"
      },
      {
       "begin": 230,
       "end": 231,
       "name": "tag",
       "value": "25"
      },
      {
       "begin": 230,
       "end": 231,
       "name": "JUMPDEST"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "tag",
       "value": "24"
      },
      {
       "begin": 205,
       "end": 231,
       "name": "JUMPDEST"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "tag",
       "value": "23"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "JUMPDEST"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "POP"
      },
      {
       "begin": 240,
       "end": 343,
       "name": "JUMP",
       "value": "[out]"
      }
     ]
    }
   }
  },
  "methodIdentifiers": {
   "last_completed_migration()": "445df0ac",
   "owner()": "8da5cb5b",
   "setCompleted(uint256)": "fdacd576",
   "upgrade(address)": "0900f010"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.16+commit.d7661dd9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"new_address\",\"type\":\"address\"}],\"name\":\"upgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"last_completed_migration\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"completed\",\"type\":\"uint256\"}],\"name\":\"setCompleted\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":\"Migrations\"},\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/Migrations.sol\":{\"keccak256\":\"0x7be0636eea8bf5b783fa312195d7dc03403e46c101b4480bf683274a9f000ee9\",\"urls\":[\"bzzr://168448585770edb684cdc5dfbcd56be3c0942adf80c9a79b515070e7d2f38031\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Migrations.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Migrations = Migrations
