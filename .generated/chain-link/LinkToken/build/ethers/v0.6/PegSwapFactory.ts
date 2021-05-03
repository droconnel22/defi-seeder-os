/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { PegSwap } from "./PegSwap";

export class PegSwapFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<PegSwap> {
    return super.deploy(overrides) as Promise<PegSwap>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): PegSwap {
    return super.attach(address) as PegSwap;
  }
  connect(signer: Signer): PegSwapFactory {
    return super.connect(signer) as PegSwapFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PegSwap {
    return new Contract(address, _abi, signerOrProvider) as PegSwap;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "source",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "LiquidityUpdated",
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
      }
    ],
    name: "OwnershipTransferRequested",
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
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "StuckTokensRecovered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "source",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address"
      }
    ],
    name: "TokensSwapped",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "source",
        type: "address"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "getSwappableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "targetData",
        type: "bytes"
      }
    ],
    name: "onTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "recoverStuckTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "source",
        type: "address"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "removeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "source",
        type: "address"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052600080546001600160a01b031916331790556001600255610d5e8061002a6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806379ba50971161006657806379ba5097146101695780638da5cb5b14610171578063a4c0ed3614610195578063f2fde38b1461021a578063f31abcc41461024057610093565b806316094ece146100955780632b7f0923146100d5578063442d77b0146101095780634910630a14610135575b005b6100c3600480360360408110156100ab57600080fd5b506001600160a01b0381358116916020013516610274565b60408051918252519081900360200190f35b610093600480360360608110156100eb57600080fd5b508035906001600160a01b03602082013581169160400135166102a1565b6100936004803603604081101561011f57600080fd5b50803590602001356001600160a01b03166104f7565b6100936004803603606081101561014b57600080fd5b508035906001600160a01b0360208201358116916040013516610650565b61009361079c565b61017961084b565b604080516001600160a01b039092168252519081900360200190f35b610093600480360360608110156101ab57600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156101db57600080fd5b8201836020820111156101ed57600080fd5b8035906020019184600183028401116401000000008311171561020f57600080fd5b50909250905061085a565b6100936004803603602081101561023057600080fd5b50356001600160a01b03166109bc565b6100936004803603606081101561025657600080fd5b508035906001600160a01b0360208201358116916040013516610a65565b6001600160a01b038083166000908152600360209081526040808320938516835292905220545b92915050565b6002805414156102f8576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60028055610307838383610b8b565b610312838284610c10565b336001600160a01b0316816001600160a01b0316836001600160a01b03167fee68281800fd374dbd49d54fe359343466bfeac7fcd7971e268acf415097345b866040518082815260200191505060405180910390a4604080516323b872dd60e01b81523360048201523060248201526044810185905290516001600160a01b038416916323b872dd9160648083019260209291908290030181600087803b1580156103bc57600080fd5b505af11580156103d0573d6000803e3d6000fd5b505050506040513d60208110156103e657600080fd5b505161042f576040805162461bcd60e51b81526020600482015260136024820152721d1c985b9cd9995c919c9bdb4819985a5b1959606a1b604482015290519081900360640190fd5b6040805163a9059cbb60e01b81523360048201526024810185905290516001600160a01b0383169163a9059cbb9160448083019260209291908290030181600087803b15801561047e57600080fd5b505af1158015610492573d6000803e3d6000fd5b505050506040513d60208110156104a857600080fd5b50516104ed576040805162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b604482015290519081900360640190fd5b5050600160025550565b6000546001600160a01b0316331461054f576040805162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b604482015290519081900360640190fd5b6040805183815290516001600160a01b038316917f9e491d87752491d550c542a9393e549a5fe64736584d59fdf01e9711e5e27f5a919081900360200190a26040805163a9059cbb60e01b81523360048201526024810184905290516001600160a01b0383169163a9059cbb9160448083019260209291908290030181600087803b1580156105dd57600080fd5b505af11580156105f1573d6000803e3d6000fd5b505050506040513d602081101561060757600080fd5b505161064c576040805162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b604482015290519081900360640190fd5b5050565b600080546001600160a01b031633148061066f575061066f8383610c2c565b9050806106c3576040805162461bcd60e51b815260206004820152601860248201527f6f6e6c79206f776e65722063616e206164642070616972730000000000000000604482015290519081900360640190fd5b6106ce848484610c10565b604080516323b872dd60e01b81523360048201523060248201526044810186905290516001600160a01b038416916323b872dd9160648083019260209291908290030181600087803b15801561072357600080fd5b505af1158015610737573d6000803e3d6000fd5b505050506040513d602081101561074d57600080fd5b5051610796576040805162461bcd60e51b81526020600482015260136024820152721d1c985b9cd9995c919c9bdb4819985a5b1959606a1b604482015290519081900360640190fd5b50505050565b6001546001600160a01b031633146107f4576040805162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b604482015290519081900360640190fd5b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b6000546001600160a01b031681565b3360008383602081101561086d57600080fd5b50356001600160a01b03169050610885858383610b8b565b610890858284610c10565b856001600160a01b0316816001600160a01b0316836001600160a01b03167fee68281800fd374dbd49d54fe359343466bfeac7fcd7971e268acf415097345b886040518082815260200191505060405180910390a4806001600160a01b031663a9059cbb87876040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561094557600080fd5b505af1158015610959573d6000803e3d6000fd5b505050506040513d602081101561096f57600080fd5b50516109b4576040805162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b604482015290519081900360640190fd5b505050505050565b6000546001600160a01b03163314610a14576040805162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6000546001600160a01b03163314610abd576040805162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b604482015290519081900360640190fd5b610ac8838383610b8b565b6040805163a9059cbb60e01b81523360048201526024810185905290516001600160a01b0383169163a9059cbb9160448083019260209291908290030181600087803b158015610b1757600080fd5b505af1158015610b2b573d6000803e3d6000fd5b505050506040513d6020811015610b4157600080fd5b5051610b86576040805162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b604482015290519081900360640190fd5b505050565b6000610ba784610b9b8585610274565b9063ffffffff610c6a16565b6001600160a01b0380851660008181526003602090815260408083209488168084529482529182902085905581518581529151949550929391927f9832bb3eced80e5d53e74bd87d617aff406ef3afd433670cd9b3dcbf3ba99d8c92918290030190a350505050565b6000610ba784610c208585610274565b9063ffffffff610cc716565b600080610c398484610274565b1115610c475750600161029b565b6000610c538385610274565b1115610c615750600161029b565b50600092915050565b600082821115610cc1576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082820183811015610d21576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fea2646970667358221220ab8502f70ffa77e8cc3336dcfa84819be451d2aa67ef959228c5c6730a4c52e664736f6c63430006060033";
