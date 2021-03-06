/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface linkERC20BasicInterface extends Interface {
  functions: {
    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    balanceOf: TypedFunctionDescription<{ encode([who]: [string]): string }>;

    transfer: TypedFunctionDescription<{
      encode([to, value]: [string, BigNumberish]): string;
    }>;
  };

  events: {
    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class linkERC20Basic extends Contract {
  connect(signerOrProvider: Signer | Provider | string): linkERC20Basic;
  attach(addressOrName: string): linkERC20Basic;
  deployed(): Promise<linkERC20Basic>;

  on(event: EventFilter | string, listener: Listener): linkERC20Basic;
  once(event: EventFilter | string, listener: Listener): linkERC20Basic;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): linkERC20Basic;
  removeAllListeners(eventName: EventFilter | string): linkERC20Basic;
  removeListener(eventName: any, listener: Listener): linkERC20Basic;

  interface: linkERC20BasicInterface;

  functions: {
    totalSupply(): Promise<BigNumber>;

    balanceOf(who: string): Promise<BigNumber>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  totalSupply(): Promise<BigNumber>;

  balanceOf(who: string): Promise<BigNumber>;

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimate: {
    totalSupply(): Promise<BigNumber>;

    balanceOf(who: string): Promise<BigNumber>;

    transfer(to: string, value: BigNumberish): Promise<BigNumber>;
  };
}
