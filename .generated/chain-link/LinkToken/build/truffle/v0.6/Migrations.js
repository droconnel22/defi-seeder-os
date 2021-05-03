'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Migrations = contract({
 "contractName": "Migrations",
 "abi": [
  {
   "inputs": [],
   "stateMutability": "nonpayable",
   "type": "constructor"
  },
  {
   "inputs": [],
   "name": "last_completed_migration",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "owner",
   "outputs": [
    {
     "internalType": "address",
     "name": "",
     "type": "address"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "uint256",
     "name": "completed",
     "type": "uint256"
    }
   ],
   "name": "setCompleted",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "address",
     "name": "new_address",
     "type": "address"
    }
   ],
   "name": "upgrade",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556101b4806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063445df0ac146100795780638da5cb5b14610093578063fdacd576146100b7575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100d4565b005b610081610151565b60408051918252519081900360200190f35b61009b610157565b604080516001600160a01b039092168252519081900360200190f35b610077600480360360208110156100cd57600080fd5b5035610166565b6000546001600160a01b031633141561014e576000819050806001600160a01b031663fdacd5766001546040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561013457600080fd5b505af1158015610148573d6000803e3d6000fd5b50505050505b50565b60015481565b6000546001600160a01b031681565b6000546001600160a01b031633141561014e5760015556fea2646970667358221220788bc5304c5298f2477ea379ea54ab08fd5c6d97fc942f1f3f9e87e946ec655f64736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND CALLER OR SWAP1 SSTORE PUSH2 0x1B4 DUP1 PUSH2 0x32 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x900F010 EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0x445DF0AC EQ PUSH2 0x79 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x93 JUMPI DUP1 PUSH4 0xFDACD576 EQ PUSH2 0xB7 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x77 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x67 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0xD4 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x81 PUSH2 0x151 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x9B PUSH2 0x157 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x77 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0xCD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x166 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ ISZERO PUSH2 0x14E JUMPI PUSH1 0x0 DUP2 SWAP1 POP DUP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH4 0xFDACD576 PUSH1 0x1 SLOAD PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x134 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x148 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP POP JUMPDEST POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ ISZERO PUSH2 0x14E JUMPI PUSH1 0x1 SSTORE JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH25 0x8BC5304C5298F2477EA379EA54AB08FD5C6D97FC942F1F3F9E DUP8 0xE9 CHAINID 0xEC PUSH6 0x5F64736F6C63 NUMBER STOP MOD MOD STOP CALLER ",
   "sourceMap": "25:480:2:-:0;;;114:50;5:9:-1;2:2;;;27:1;24;17:12;2:2;-1:-1;141:5:2;:18;;-1:-1:-1;;;;;;141:18:2;149:10;141:18;;;25:480;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063445df0ac146100795780638da5cb5b14610093578063fdacd576146100b7575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100d4565b005b610081610151565b60408051918252519081900360200190f35b61009b610157565b604080516001600160a01b039092168252519081900360200190f35b610077600480360360208110156100cd57600080fd5b5035610166565b6000546001600160a01b031633141561014e576000819050806001600160a01b031663fdacd5766001546040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561013457600080fd5b505af1158015610148573d6000803e3d6000fd5b50505050505b50565b60015481565b6000546001600160a01b031681565b6000546001600160a01b031633141561014e5760015556fea2646970667358221220788bc5304c5298f2477ea379ea54ab08fd5c6d97fc942f1f3f9e87e946ec655f64736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x900F010 EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0x445DF0AC EQ PUSH2 0x79 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x93 JUMPI DUP1 PUSH4 0xFDACD576 EQ PUSH2 0xB7 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x77 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x67 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0xD4 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x81 PUSH2 0x151 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x9B PUSH2 0x157 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x77 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0xCD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x166 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ ISZERO PUSH2 0x14E JUMPI PUSH1 0x0 DUP2 SWAP1 POP DUP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH4 0xFDACD576 PUSH1 0x1 SLOAD PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x134 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x148 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP POP JUMPDEST POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ ISZERO PUSH2 0x14E JUMPI PUSH1 0x1 SSTORE JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH25 0x8BC5304C5298F2477EA379EA54AB08FD5C6D97FC942F1F3F9E DUP8 0xE9 CHAINID 0xEC PUSH6 0x5F64736F6C63 NUMBER STOP MOD MOD STOP CALLER ",
   "sourceMap": "25:480:2:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;25:480:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;338:165:2;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;338:165:2;-1:-1:-1;;;;;338:165:2;;:::i;:::-;;73:36;;;:::i;:::-;;;;;;;;;;;;;;;;49:20;;;:::i;:::-;;;;-1:-1:-1;;;;;49:20:2;;;;;;;;;;;;;;231:103;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;231:103:2;;:::i;338:165::-;214:5;;-1:-1:-1;;;;;214:5:2;200:10;:19;196:26;;;400:19:::1;433:11;400:45;;451:8;-1:-1:-1::0;;;;;451:21:2::1;;473:24;;451:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24::::0;17:12:::1;2:2;451:47:2;;;;8:9:-1;5:2;;;45:16;42:1;39::::0;24:38:::1;77:16;74:1;67:27;5:2;451:47:2;;;;221:1;196:26:::0;338:165;:::o;73:36::-;;;;:::o;49:20::-;;;-1:-1:-1;;;;;49:20:2;;:::o;231:103::-;214:5;;-1:-1:-1;;;;;214:5:2;200:10;:19;196:26;;;293:24:::1;:36:::0;231:103::o"
  },
  "methodIdentifiers": {
   "last_completed_migration()": "445df0ac",
   "owner()": "8da5cb5b",
   "setCompleted(uint256)": "fdacd576",
   "upgrade(address)": "0900f010"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"last_completed_migration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"completed\",\"type\":\"uint256\"}],\"name\":\"setCompleted\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"new_address\",\"type\":\"address\"}],\"name\":\"upgrade\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.6/Migrations.sol\":\"Migrations\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@chainlink/contracts=/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/node_modules/@chainlink/contracts\",\":@openzeppelin/contracts=/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/node_modules/@openzeppelin/contracts\"]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.6/Migrations.sol\":{\"keccak256\":\"0x37c36653e429c66f8a852bca33119df8d5a41f9b6c6a3584595fd00c21e00c03\",\"urls\":[\"bzz-raw://39a5465b957aeb86fbc39a386e0ef075af7e564a85543d13347c0771b1cad72c\",\"dweb:/ipfs/QmZ3ghZnW5uVfn25xr49La1XEwuJeQYtT66cWfEor2T3ZZ\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Migrations.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Migrations = Migrations