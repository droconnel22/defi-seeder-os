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

interface Token677Interface extends Interface {
  functions: {
    name: TypedFunctionDescription<{ encode([]: []): string }>;

    approve: TypedFunctionDescription<{
      encode([_spender, _value]: [string, BigNumberish]): string;
    }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transferFrom: TypedFunctionDescription<{
      encode([_from, _to, _value]: [string, string, BigNumberish]): string;
    }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    transferAndCall: TypedFunctionDescription<{
      encode([_to, _value, _data]: [string, BigNumberish, Arrayish]): string;
    }>;

    decreaseApproval: TypedFunctionDescription<{
      encode([_spender, _subtractedValue]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{ encode([_owner]: [string]): string }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([_to, _value]: [string, BigNumberish]): string;
    }>;

    increaseApproval: TypedFunctionDescription<{
      encode([_spender, _addedValue]: [string, BigNumberish]): string;
    }>;

    allowance: TypedFunctionDescription<{
      encode([_owner, _spender]: [string, string]): string;
    }>;
  };

  events: {
    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value, data]: [
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class Token677 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Token677;
  attach(addressOrName: string): Token677;
  deployed(): Promise<Token677>;

  on(event: EventFilter | string, listener: Listener): Token677;
  once(event: EventFilter | string, listener: Listener): Token677;
  addListener(eventName: EventFilter | string, listener: Listener): Token677;
  removeAllListeners(eventName: EventFilter | string): Token677;
  removeListener(eventName: any, listener: Listener): Token677;

  interface: Token677Interface;

  functions: {
    name(): Promise<string>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    totalSupply(): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decimals(): Promise<number>;

    transferAndCall(
      _to: string,
      _value: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decreaseApproval(
      _spender: string,
      _subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(_owner: string): Promise<BigNumber>;

    symbol(): Promise<string>;

    transfer(
      _to: string,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    increaseApproval(
      _spender: string,
      _addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    allowance(_owner: string, _spender: string): Promise<BigNumber>;
  };

  name(): Promise<string>;

  approve(
    _spender: string,
    _value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  totalSupply(): Promise<BigNumber>;

  transferFrom(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  decimals(): Promise<number>;

  transferAndCall(
    _to: string,
    _value: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  decreaseApproval(
    _spender: string,
    _subtractedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(_owner: string): Promise<BigNumber>;

  symbol(): Promise<string>;

  transfer(
    _to: string,
    _value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  increaseApproval(
    _spender: string,
    _addedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  allowance(_owner: string, _spender: string): Promise<BigNumber>;

  filters: {
    Transfer(
      from: string | null,
      to: string | null,
      value: null,
      data: null
    ): EventFilter;

    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;
  };

  estimate: {
    name(): Promise<BigNumber>;

    approve(_spender: string, _value: BigNumberish): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _value: BigNumberish
    ): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    transferAndCall(
      _to: string,
      _value: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    decreaseApproval(
      _spender: string,
      _subtractedValue: BigNumberish
    ): Promise<BigNumber>;

    balanceOf(_owner: string): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    transfer(_to: string, _value: BigNumberish): Promise<BigNumber>;

    increaseApproval(
      _spender: string,
      _addedValue: BigNumberish
    ): Promise<BigNumber>;

    allowance(_owner: string, _spender: string): Promise<BigNumber>;
  };
}
