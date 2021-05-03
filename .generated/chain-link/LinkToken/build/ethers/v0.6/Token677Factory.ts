/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { Token677 } from "./Token677";

export class Token677Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _initialBalance: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<Token677> {
    return super.deploy(_initialBalance, overrides) as Promise<Token677>;
  }
  getDeployTransaction(
    _initialBalance: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_initialBalance, overrides);
  }
  attach(address: string): Token677 {
    return super.attach(address) as Token677;
  }
  connect(signer: Signer): Token677Factory {
    return super.connect(signer) as Token677Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Token677 {
    return new Contract(address, _abi, signerOrProvider) as Token677;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialBalance",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "transferAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000fa338038062000fa3833981810160405260208110156200003757600080fd5b5051604080518082018252601481527f4578616d706c652045524336373720546f6b656e00000000000000000000000060208281019182528351808501909452600684526545524336373760d01b9084015281519192916200009c916003916200025d565b508051620000b29060049060208401906200025d565b50506005805460ff1916601217905550620000d733826001600160e01b03620000de16565b5062000302565b6001600160a01b0382166200013a576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b62000151600083836001600160e01b03620001f616565b6200016d81600254620001fb60201b62000a141790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620001a091839062000a14620001fb821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b60008282018381101562000256576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002a057805160ff1916838001178555620002d0565b82800160010185558215620002d0579182015b82811115620002d0578251825591602001919060010190620002b3565b50620002de929150620002e2565b5090565b620002ff91905b80821115620002de5760008155600101620002e9565b90565b610c9180620003126000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80634000aea0116100715780634000aea01461021057806370a08231146102cb57806395d89b41146102f1578063a457c2d7146102f9578063a9059cbb14610325578063dd62ed3e14610351576100b4565b806306fdde03146100b9578063095ea7b31461013657806318160ddd1461017657806323b872dd14610190578063313ce567146101c657806339509351146101e4575b600080fd5b6100c161037f565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100fb5781810151838201526020016100e3565b50505050905090810190601f1680156101285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101626004803603604081101561014c57600080fd5b506001600160a01b038135169060200135610415565b604080519115158252519081900360200190f35b61017e610432565b60408051918252519081900360200190f35b610162600480360360608110156101a657600080fd5b506001600160a01b03813581169160208101359091169060400135610438565b6101ce6104c5565b6040805160ff9092168252519081900360200190f35b610162600480360360408110156101fa57600080fd5b506001600160a01b0381351690602001356104ce565b6101626004803603606081101561022657600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561025657600080fd5b82018360208201111561026857600080fd5b8035906020019184600183028401116401000000008311171561028a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610522945050505050565b61017e600480360360208110156102e157600080fd5b50356001600160a01b03166105fd565b6100c1610618565b6101626004803603604081101561030f57600080fd5b506001600160a01b038135169060200135610679565b6101626004803603604081101561033b57600080fd5b506001600160a01b0381351690602001356106e7565b61017e6004803603604081101561036757600080fd5b506001600160a01b03813581169160200135166106fb565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561040b5780601f106103e05761010080835404028352916020019161040b565b820191906000526020600020905b8154815290600101906020018083116103ee57829003601f168201915b5050505050905090565b6000610429610422610726565b848461072a565b50600192915050565b60025490565b6000610445848484610816565b6104bb84610451610726565b6104b685604051806060016040528060288152602001610bc6602891396001600160a01b038a1660009081526001602052604081209061048f610726565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61097d16565b61072a565b5060019392505050565b60055460ff1690565b60006104296104db610726565b846104b685600160006104ec610726565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610a1416565b600061052e84846106e7565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156105a9578181015183820152602001610591565b50505050905090810190601f1680156105d65780820380516001836020036101000a031916815260200191505b50935050505060405180910390a36105ed84610a75565b156104bb576104bb848484610a7b565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561040b5780601f106103e05761010080835404028352916020019161040b565b6000610429610686610726565b846104b685604051806060016040528060258152602001610c3760259139600160006106b0610726565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61097d16565b60006104296106f4610726565b8484610816565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b03831661076f5760405162461bcd60e51b8152600401808060200182810382526024815260200180610c136024913960400191505060405180910390fd5b6001600160a01b0382166107b45760405162461bcd60e51b8152600401808060200182810382526022815260200180610b7e6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661085b5760405162461bcd60e51b8152600401808060200182810382526025815260200180610bee6025913960400191505060405180910390fd5b6001600160a01b0382166108a05760405162461bcd60e51b8152600401808060200182810382526023815260200180610b5b6023913960400191505060405180910390fd5b6108ab838383610b55565b6108ee81604051806060016040528060268152602001610ba0602691396001600160a01b038616600090815260208190526040902054919063ffffffff61097d16565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610923908263ffffffff610a1416565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610a0c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156109d15781810151838201526020016109b9565b50505050905090810190601f1680156109fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610a6e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3b151590565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b83811015610ae9578181015183820152602001610ad1565b50505050905090810190601f168015610b165780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610b3757600080fd5b505af1158015610b4b573d6000803e3d6000fd5b5050505050505050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212207d940280b0b2a41dc5fd9536c289b04c50906ec83cf1454c38680a0be9704b2264736f6c63430006060033";
