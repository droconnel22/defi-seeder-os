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

interface PegSwapInterface extends Interface {
  functions: {
    acceptOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    addLiquidity: TypedFunctionDescription<{
      encode([amount, source, target]: [BigNumberish, string, string]): string;
    }>;

    getSwappableAmount: TypedFunctionDescription<{
      encode([source, target]: [string, string]): string;
    }>;

    onTokenTransfer: TypedFunctionDescription<{
      encode([sender, amount, targetData]: [
        string,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    recoverStuckTokens: TypedFunctionDescription<{
      encode([amount, target]: [BigNumberish, string]): string;
    }>;

    removeLiquidity: TypedFunctionDescription<{
      encode([amount, source, target]: [BigNumberish, string, string]): string;
    }>;

    swap: TypedFunctionDescription<{
      encode([amount, source, target]: [BigNumberish, string, string]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_to]: [string]): string;
    }>;
  };

  events: {
    LiquidityUpdated: TypedEventDescription<{
      encodeTopics([amount, source, target]: [
        null,
        string | null,
        string | null
      ]): string[];
    }>;

    OwnershipTransferRequested: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;

    StuckTokensRecovered: TypedEventDescription<{
      encodeTopics([amount, target]: [null, string | null]): string[];
    }>;

    TokensSwapped: TypedEventDescription<{
      encodeTopics([amount, source, target, caller]: [
        null,
        string | null,
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class PegSwap extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PegSwap;
  attach(addressOrName: string): PegSwap;
  deployed(): Promise<PegSwap>;

  on(event: EventFilter | string, listener: Listener): PegSwap;
  once(event: EventFilter | string, listener: Listener): PegSwap;
  addListener(eventName: EventFilter | string, listener: Listener): PegSwap;
  removeAllListeners(eventName: EventFilter | string): PegSwap;
  removeListener(eventName: any, listener: Listener): PegSwap;

  interface: PegSwapInterface;

  functions: {
    acceptOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addLiquidity(
      amount: BigNumberish,
      source: string,
      target: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getSwappableAmount(source: string, target: string): Promise<BigNumber>;

    onTokenTransfer(
      sender: string,
      amount: BigNumberish,
      targetData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    owner(): Promise<string>;

    recoverStuckTokens(
      amount: BigNumberish,
      target: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      source: string,
      target: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    swap(
      amount: BigNumberish,
      source: string,
      target: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addLiquidity(
    amount: BigNumberish,
    source: string,
    target: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getSwappableAmount(source: string, target: string): Promise<BigNumber>;

  onTokenTransfer(
    sender: string,
    amount: BigNumberish,
    targetData: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  owner(): Promise<string>;

  recoverStuckTokens(
    amount: BigNumberish,
    target: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  removeLiquidity(
    amount: BigNumberish,
    source: string,
    target: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  swap(
    amount: BigNumberish,
    source: string,
    target: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    LiquidityUpdated(
      amount: null,
      source: string | null,
      target: string | null
    ): EventFilter;

    OwnershipTransferRequested(
      from: string | null,
      to: string | null
    ): EventFilter;

    OwnershipTransferred(from: string | null, to: string | null): EventFilter;

    StuckTokensRecovered(amount: null, target: string | null): EventFilter;

    TokensSwapped(
      amount: null,
      source: string | null,
      target: string | null,
      caller: string | null
    ): EventFilter;
  };

  estimate: {
    acceptOwnership(): Promise<BigNumber>;

    addLiquidity(
      amount: BigNumberish,
      source: string,
      target: string
    ): Promise<BigNumber>;

    getSwappableAmount(source: string, target: string): Promise<BigNumber>;

    onTokenTransfer(
      sender: string,
      amount: BigNumberish,
      targetData: Arrayish
    ): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    recoverStuckTokens(
      amount: BigNumberish,
      target: string
    ): Promise<BigNumber>;

    removeLiquidity(
      amount: BigNumberish,
      source: string,
      target: string
    ): Promise<BigNumber>;

    swap(
      amount: BigNumberish,
      source: string,
      target: string
    ): Promise<BigNumber>;

    transferOwnership(_to: string): Promise<BigNumber>;
  };
}
