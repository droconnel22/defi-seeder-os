/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Token677ReceiverMock } from "./Token677ReceiverMock";

export class Token677ReceiverMockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<Token677ReceiverMock> {
    return super.deploy(overrides) as Promise<Token677ReceiverMock>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): Token677ReceiverMock {
    return super.attach(address) as Token677ReceiverMock;
  }
  connect(signer: Signer): Token677ReceiverMockFactory {
    return super.connect(signer) as Token677ReceiverMockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Token677ReceiverMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Token677ReceiverMock;
  }
}

const _abi = [
  {
    inputs: [],
    name: "calledFallback",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
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
    name: "onTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "sentValue",
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
    name: "tokenData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60806040526003805460ff1916905534801561001a57600080fd5b506103b28061002a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063024fd6501461005c578063390f6426146100d95780636dcb8d84146100f55780639898e18c1461010f578063a4c0ed3614610133575b600080fd5b6100646101f0565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561009e578181015183820152602001610086565b50505050905090810190601f1680156100cb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100e161027b565b604080519115158252519081900360200190f35b6100fd610284565b60408051918252519081900360200190f35b61011761028a565b604080516001600160a01b039092168252519081900360200190f35b6101ee6004803603606081101561014957600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561017957600080fd5b82018360208201111561018b57600080fd5b803590602001918460018302840111640100000000831117156101ad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610299945050505050565b005b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156102735780601f1061024857610100808354040283529160200191610273565b820191906000526020600020905b81548152906001019060200180831161025657829003601f168201915b505050505081565b60035460ff1681565b60015481565b6000546001600160a01b031681565b60038054600160ff199091168117909155600080546001600160a01b0319166001600160a01b03861617905582905580516102db9060029060208401906102e1565b50505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061032257805160ff191683800117855561034f565b8280016001018555821561034f579182015b8281111561034f578251825591602001919060010190610334565b5061035b92915061035f565b5090565b61037991905b8082111561035b5760008155600101610365565b9056fea2646970667358221220010ea1452582c2aac587d2a478281d4c7d3c67ad2eebe6891b626accaa64606064736f6c63430006060033";
