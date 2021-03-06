'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const linkBasicToken = contract({
 "contractName": "linkBasicToken",
 "abi": [
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
  "assembly": "    /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":186:999  contract linkBasicToken is linkERC20Basic {... */\n  mstore(0x40, 0x60)\n  jumpi(tag_1, iszero(callvalue))\n  0x0\n  dup1\n  revert\ntag_1:\ntag_2:\n  dataSize(sub_0)\n  dup1\n  dataOffset(sub_0)\n  0x0\n  codecopy\n  0x0\n  return\nstop\n\nsub_0: assembly {\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":186:999  contract linkBasicToken is linkERC20Basic {... */\n      mstore(0x40, 0x60)\n      and(div(calldataload(0x0), 0x100000000000000000000000000000000000000000000000000000000), 0xffffffff)\n      0x18160ddd\n      dup2\n      eq\n      tag_2\n      jumpi\n      dup1\n      0x70a08231\n      eq\n      tag_3\n      jumpi\n      dup1\n      0xa9059cbb\n      eq\n      tag_4\n      jumpi\n    tag_1:\n      0x0\n      dup1\n      revert\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkERC20Basic.sol\":183:209  uint256 public totalSupply */\n    tag_2:\n      jumpi(tag_5, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_5:\n      tag_6\n      jump(tag_7)\n    tag_6:\n      mload(0x40)\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":892:996  function balanceOf(address _owner) constant returns (uint256 balance) {... */\n    tag_3:\n      jumpi(tag_8, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_8:\n      tag_6\n      and(calldataload(0x4), sub(exp(0x2, 0xa0), 0x1))\n      jump(tag_10)\n    tag_9:\n      mload(0x40)\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":458:689  function transfer(address _to, uint256 _value) returns (bool) {... */\n    tag_4:\n      jumpi(tag_11, iszero(callvalue))\n      0x0\n      dup1\n      revert\n    tag_11:\n      tag_12\n      and(calldataload(0x4), sub(exp(0x2, 0xa0), 0x1))\n      calldataload(0x24)\n      jump(tag_13)\n    tag_12:\n      mload(0x40)\n      swap1\n      iszero\n      iszero\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkERC20Basic.sol\":183:209  uint256 public totalSupply */\n    tag_7:\n      sload(0x0)\n      dup2\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":892:996  function balanceOf(address _owner) constant returns (uint256 balance) {... */\n    tag_10:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":975:991  balances[_owner] */\n      dup2\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":945:960  uint256 balance */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":975:991  balances[_owner] */\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":975:983  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":975:991  balances[_owner] */\n      0x20\n      mstore\n      0x40\n      swap1\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":892:996  function balanceOf(address _owner) constant returns (uint256 balance) {... */\n    tag_14:\n      swap2\n      swap1\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":458:689  function transfer(address _to, uint256 _value) returns (bool) {... */\n    tag_13:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":558:568  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:569  balances[msg.sender] */\n      and\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":514:518  bool */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:569  balances[msg.sender] */\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:557  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:569  balances[msg.sender] */\n      0x20\n      mstore\n      0x40\n      dup2\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:581  balances[msg.sender].sub(_value) */\n      tag_16\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":574:580  _value */\n      dup4\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:581  balances[msg.sender].sub(_value) */\n      0xffffffff\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:573  balances[msg.sender].sub */\n      tag_17\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":549:581  balances[msg.sender].sub(_value) */\n      and\n      jump\t// in\n    tag_16:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":535:545  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":526:546  balances[msg.sender] */\n      dup2\n      and\n      0x0\n      swap1\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":526:534  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":526:546  balances[msg.sender] */\n      0x20\n      mstore\n      0x40\n      dup1\n      dup3\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":526:581  balances[msg.sender] = balances[msg.sender].sub(_value) */\n      swap4\n      swap1\n      swap4\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:616  balances[_to] */\n      swap1\n      dup6\n      and\n      dup2\n      mstore\n      keccak256\n      sload\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:628  balances[_to].add(_value) */\n      tag_18\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":621:627  _value */\n      dup4\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:628  balances[_to].add(_value) */\n      0xffffffff\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:620  balances[_to].add */\n      tag_19\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":603:628  balances[_to].add(_value) */\n      and\n      jump\t// in\n    tag_18:\n      sub(exp(0x2, 0xa0), 0x1)\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:600  balances[_to] */\n      dup1\n      dup6\n      and\n      0x0\n      dup2\n      dup2\n      mstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:595  balances */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:600  balances[_to] */\n      0x20\n      mstore\n      0x40\n      swap1\n      dup2\n      swap1\n      keccak256\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:628  balances[_to] = balances[_to].add(_value) */\n      swap4\n      swap1\n      swap4\n      sstore\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":587:600  balances[_to] */\n      swap2\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":643:653  msg.sender */\n      caller\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":634:667  Transfer(msg.sender, _to, _value) */\n      swap1\n      swap2\n      and\n      swap1\n      0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":660:666  _value */\n      dup6\n      swap1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":634:667  Transfer(msg.sender, _to, _value) */\n      mload\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      log3\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":680:684  true */\n      0x1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":458:689  function transfer(address _to, uint256 _value) returns (bool) {... */\n    tag_15:\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":566:680  function sub(uint256 a, uint256 b) internal constant returns (uint256) {... */\n    tag_17:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":628:635  uint256 */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":650:656  b <= a */\n      dup3\n      dup3\n      gt\n      iszero\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":643:657  assert(b <= a) */\n      tag_21\n      jumpi\n      invalid\n    tag_21:\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":670:675  a - b */\n      dup1\n      dup3\n      sub\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":566:680  function sub(uint256 a, uint256 b) internal constant returns (uint256) {... */\n    tag_20:\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":684:817  function add(uint256 a, uint256 b) internal constant returns (uint256) {... */\n    tag_19:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":746:753  uint256 */\n      0x0\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":773:778  a + b */\n      dup3\n      dup3\n      add\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":791:797  c >= a */\n      dup4\n      dup2\n      lt\n      iszero\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":784:798  assert(c >= a) */\n      tag_23\n      jumpi\n      invalid\n    tag_23:\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":811:812  c */\n      dup1\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":804:812  return c */\n      swap2\n      pop\n        /* \"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":684:817  function add(uint256 a, uint256 b) internal constant returns (uint256) {... */\n    tag_22:\n      pop\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n\n    auxdata: 0xa165627a7a7230582037d68cbb04ce89cef41f97f76549224e62bf89b59ab05fc715a1cac5308f35cc0029\n}\n",
  "bytecode": {
   "linkReferences": {},
   "object": "0x6060604052341561000f57600080fd5b5b6102218061001f6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166318160ddd811461005357806370a0823114610078578063a9059cbb146100a9575b600080fd5b341561005e57600080fd5b6100666100df565b60405190815260200160405180910390f35b341561008357600080fd5b610066600160a060020a03600435166100e5565b60405190815260200160405180910390f35b34156100b457600080fd5b6100cb600160a060020a0360043516602435610104565b604051901515815260200160405180910390f35b60005481565b600160a060020a0381166000908152600160205260409020545b919050565b600160a060020a03331660009081526001602052604081205461012d908363ffffffff6101c416565b600160a060020a033381166000908152600160205260408082209390935590851681522054610162908363ffffffff6101db16565b600160a060020a0380851660008181526001602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b92915050565b6000828211156101d057fe5b508082035b92915050565b6000828201838110156101ea57fe5b8091505b50929150505600a165627a7a7230582037d68cbb04ce89cef41f97f76549224e62bf89b59ab05fc715a1cac5308f35cc0029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST PUSH2 0x221 DUP1 PUSH2 0x1F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x18160DDD DUP2 EQ PUSH2 0x53 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x78 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0xA9 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x5E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x66 PUSH2 0xDF JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x83 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x66 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0xE5 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xB4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xCB PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x104 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH2 0x12D SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x1C4 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP6 AND DUP2 MSTORE KECCAK256 SLOAD PUSH2 0x162 SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x1DB AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP6 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP2 CALLER SWAP1 SWAP2 AND SWAP1 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 DUP6 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 GT ISZERO PUSH2 0x1D0 JUMPI INVALID JUMPDEST POP DUP1 DUP3 SUB JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 ADD DUP4 DUP2 LT ISZERO PUSH2 0x1EA JUMPI INVALID JUMPDEST DUP1 SWAP2 POP JUMPDEST POP SWAP3 SWAP2 POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 CALLDATACOPY 0xd6 DUP13 0xbb DIV 0xce DUP10 0xce DELEGATECALL 0x1f SWAP8 0xf7 PUSH6 0x49224E62BF89 0xb5 SWAP11 0xb0 0x5f 0xc7 ISZERO LOG1 0xca 0xc5 ADDRESS DUP16 CALLDATALOAD 0xcc STOP 0x29 ",
   "sourceMap": "186:813:12:-;;;;;;;;;;;;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166318160ddd811461005357806370a0823114610078578063a9059cbb146100a9575b600080fd5b341561005e57600080fd5b6100666100df565b60405190815260200160405180910390f35b341561008357600080fd5b610066600160a060020a03600435166100e5565b60405190815260200160405180910390f35b34156100b457600080fd5b6100cb600160a060020a0360043516602435610104565b604051901515815260200160405180910390f35b60005481565b600160a060020a0381166000908152600160205260409020545b919050565b600160a060020a03331660009081526001602052604081205461012d908363ffffffff6101c416565b600160a060020a033381166000908152600160205260408082209390935590851681522054610162908363ffffffff6101db16565b600160a060020a0380851660008181526001602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b92915050565b6000828211156101d057fe5b508082035b92915050565b6000828201838110156101ea57fe5b8091505b50929150505600a165627a7a7230582037d68cbb04ce89cef41f97f76549224e62bf89b59ab05fc715a1cac5308f35cc0029",
   "opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x18160DDD DUP2 EQ PUSH2 0x53 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x78 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0xA9 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x5E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x66 PUSH2 0xDF JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x83 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x66 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0xE5 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0xB4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xCB PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x104 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH2 0x12D SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x1C4 AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP1 DUP6 AND DUP2 MSTORE KECCAK256 SLOAD PUSH2 0x162 SWAP1 DUP4 PUSH4 0xFFFFFFFF PUSH2 0x1DB AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP1 DUP6 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SWAP2 CALLER SWAP1 SWAP2 AND SWAP1 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP1 DUP6 SWAP1 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 GT ISZERO PUSH2 0x1D0 JUMPI INVALID JUMPDEST POP DUP1 DUP3 SUB JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 ADD DUP4 DUP2 LT ISZERO PUSH2 0x1EA JUMPI INVALID JUMPDEST DUP1 SWAP2 POP JUMPDEST POP SWAP3 SWAP2 POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 CALLDATACOPY 0xd6 DUP13 0xbb DIV 0xce DUP10 0xce DELEGATECALL 0x1f SWAP8 0xf7 PUSH6 0x49224E62BF89 0xb5 SWAP11 0xb0 0x5f 0xc7 ISZERO LOG1 0xca 0xc5 ADDRESS DUP16 CALLDATALOAD 0xcc STOP 0x29 ",
   "sourceMap": "186:813:12:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;183:26:14;;;;;;;;;;;;;;;;;;;;;;;;;;;892:104:12;;;;;;;;;;-1:-1:-1;;;;;892:104:12;;;;;;;;;;;;;;;;;;;;458:231;;;;;;;;;;-1:-1:-1;;;;;458:231:12;;;;;;;;;;;;;;;;;;;;;;;;183:26:14;;;;:::o;892:104:12:-;-1:-1:-1;;;;;975:16:12;;945:15;975:16;;;:8;:16;;;;;;892:104;;;;:::o;458:231::-;-1:-1:-1;;;;;558:10:12;549:20;514:4;549:20;;;:8;:20;;;;;;:32;;574:6;549:32;:24;:32;:::i;:::-;-1:-1:-1;;;;;535:10:12;526:20;;;;;;:8;:20;;;;;;:55;;;;603:13;;;;;;;:25;;621:6;603:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;587:13:12;;;;;;;:8;:13;;;;;;;:41;;;;:13;643:10;634:33;;;;;;660:6;;634:33;;;;;;;;;;;;;-1:-1:-1;680:4:12;458:231;;;;;:::o;566:114:3:-;628:7;650:6;;;;643:14;;;;-1:-1:-1;670:5:3;;;566:114;;;;;:::o;684:133::-;746:7;773:5;;;791:6;;;;784:14;;;;811:1;804:8;;684:133;;;;;;:::o"
  },
  "gasEstimates": {
   "creation": {
    "codeDepositCost": "109000",
    "executionCost": "155",
    "totalCost": "109155"
   },
   "external": {
    "balanceOf(address)": "605",
    "totalSupply()": "352",
    "transfer(address,uint256)": "infinite"
   }
  },
  "legacyAssembly": {
   ".code": [
    {
     "begin": 186,
     "end": 999,
     "name": "PUSH",
     "value": "60"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "PUSH",
     "value": "40"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "MSTORE"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "CALLVALUE"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "ISZERO"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "PUSH [tag]",
     "value": "1"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "JUMPI"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "DUP1"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "REVERT"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "tag",
     "value": "1"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "JUMPDEST"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "tag",
     "value": "2"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "JUMPDEST"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "PUSH #[$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "DUP1"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "PUSH [$]",
     "value": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "CODECOPY"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "PUSH",
     "value": "0"
    },
    {
     "begin": 186,
     "end": 999,
     "name": "RETURN"
    }
   ],
   ".data": {
    "0": {
     ".auxdata": "a165627a7a7230582037d68cbb04ce89cef41f97f76549224e62bf89b59ab05fc715a1cac5308f35cc0029",
     ".code": [
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH",
       "value": "60"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH",
       "value": "40"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "MSTORE"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH",
       "value": "FFFFFFFF"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH",
       "value": "100000000000000000000000000000000000000000000000000000000"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "CALLDATALOAD"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "DIV"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "AND"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH",
       "value": "18160DDD"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "DUP2"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "EQ"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH [tag]",
       "value": "2"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "JUMPI"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "DUP1"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH",
       "value": "70A08231"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "EQ"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH [tag]",
       "value": "3"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "JUMPI"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "DUP1"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH",
       "value": "A9059CBB"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "EQ"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH [tag]",
       "value": "4"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "JUMPI"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "tag",
       "value": "1"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "JUMPDEST"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "PUSH",
       "value": "0"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "DUP1"
      },
      {
       "begin": 186,
       "end": 999,
       "name": "REVERT"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "tag",
       "value": "2"
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
       "value": "5"
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
       "value": "5"
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
       "value": "6"
      },
      {
       "begin": 183,
       "end": 209,
       "name": "PUSH [tag]",
       "value": "7"
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
       "value": "6"
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
       "begin": 892,
       "end": 996,
       "name": "tag",
       "value": "3"
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
       "value": "8"
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
       "value": "8"
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
       "value": "6"
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
       "value": "10"
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
       "value": "9"
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
       "value": "4"
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
       "value": "11"
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
       "value": "11"
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
       "value": "12"
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
       "value": "13"
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
       "value": "12"
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
       "begin": 183,
       "end": 209,
       "name": "tag",
       "value": "7"
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
       "begin": 892,
       "end": 996,
       "name": "tag",
       "value": "10"
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
       "value": "14"
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
       "value": "13"
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
       "value": "16"
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
       "value": "17"
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
       "value": "16"
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
       "value": "18"
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
       "value": "19"
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
       "value": "18"
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
       "value": "15"
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
       "begin": 566,
       "end": 680,
       "name": "tag",
       "value": "17"
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
       "value": "21"
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
       "value": "21"
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
       "value": "20"
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
       "value": "19"
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
       "value": "23"
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
       "value": "23"
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
       "value": "22"
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
   "balanceOf(address)": "70a08231",
   "totalSupply()": "18160ddd",
   "transfer(address,uint256)": "a9059cbb"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.16+commit.d7661dd9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"balanceOf(address)\":{\"details\":\"Gets the balance of the specified address.\",\"params\":{\"_owner\":\"The address to query the the balance of. \"},\"return\":\"An uint256 representing the amount owned by the passed address.\"},\"transfer(address,uint256)\":{\"details\":\"transfer token for a specified address\",\"params\":{\"_to\":\"The address to transfer to.\",\"_value\":\"The amount to be transferred.\"}}},\"title\":\"Basic token\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":\"linkBasicToken\"},\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/math/linkSafeMath.sol\":{\"keccak256\":\"0x2cf8ffbc5706435764ac6b559efc7fa332b80d35e17cfb6632839561225b6bd2\",\"urls\":[\"bzzr://a9bc9e1af2e9fe8e315112156f1e6ab9bf284b5ae42a140260c2cf950d9663ef\"]},\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkBasicToken.sol\":{\"keccak256\":\"0x2102fe4e4f7127666c4e408922ad637a26e02c1dfccd292ea9fa7a5b4eef172b\",\"urls\":[\"bzzr://41be046988410fa7fd84406fd20155bc22c722b89657c2e120f591be51599ebc\"]},\"/Users/dennismacpro/Projects/Defi/Ethereum-Solidity-Collection/icarus-protocol/defi-seeder/.tmp/chain-link/LinkToken/contracts/v0.4/token/linkERC20Basic.sol\":{\"keccak256\":\"0x48709e79e775c71bf47d41d8521be253566652528b427a95e9322583576c6d82\",\"urls\":[\"bzzr://1e3c03d046f795b8980838cde12502477cbcbd0e157cf43e43e75dc3af903d8c\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('linkBasicToken.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.linkBasicToken = linkBasicToken
