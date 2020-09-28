/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import {
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface InrtManagerInterface extends ethers.utils.Interface {
  functions: {
    'addToBurnPool()': FunctionFragment;
    'addToLuckPool()': FunctionFragment;
    'currentNrtMonth()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'addToBurnPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addToLuckPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'currentNrtMonth', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'addToBurnPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addToLuckPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentNrtMonth', data: BytesLike): Result;

  events: {};
}

export abstract class InrtManager extends Contract {
  abstract connect(signerOrProvider: Signer | Provider | string): this;
  abstract attach(addressOrName: string): this;
  abstract deployed(): Promise<this>;

  abstract on(event: EventFilter | string, listener: Listener): this;
  abstract once(event: EventFilter | string, listener: Listener): this;
  abstract addListener(eventName: EventFilter | string, listener: Listener): this;
  abstract removeAllListeners(eventName: EventFilter | string): this;
  abstract removeListener(eventName: any, listener: Listener): this;

  abstract interface: InrtManagerInterface;

  abstract functions: {
    addToBurnPool(overrides?: PayableOverrides): Promise<ContractTransaction>;

    'addToBurnPool()'(overrides?: PayableOverrides): Promise<ContractTransaction>;

    addToLuckPool(overrides?: PayableOverrides): Promise<ContractTransaction>;

    'addToLuckPool()'(overrides?: PayableOverrides): Promise<ContractTransaction>;

    currentNrtMonth(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    'currentNrtMonth()'(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;
  };

  abstract addToBurnPool(overrides?: PayableOverrides): Promise<ContractTransaction>;

  abstract 'addToBurnPool()'(overrides?: PayableOverrides): Promise<ContractTransaction>;

  abstract addToLuckPool(overrides?: PayableOverrides): Promise<ContractTransaction>;

  abstract 'addToLuckPool()'(overrides?: PayableOverrides): Promise<ContractTransaction>;

  abstract currentNrtMonth(overrides?: CallOverrides): Promise<number>;

  abstract 'currentNrtMonth()'(overrides?: CallOverrides): Promise<number>;

  abstract callStatic: {
    addToBurnPool(overrides?: CallOverrides): Promise<void>;

    'addToBurnPool()'(overrides?: CallOverrides): Promise<void>;

    addToLuckPool(overrides?: CallOverrides): Promise<void>;

    'addToLuckPool()'(overrides?: CallOverrides): Promise<void>;

    currentNrtMonth(overrides?: CallOverrides): Promise<number>;

    'currentNrtMonth()'(overrides?: CallOverrides): Promise<number>;
  };

  abstract filters: {};

  abstract estimateGas: {
    addToBurnPool(overrides?: PayableOverrides): Promise<BigNumber>;

    'addToBurnPool()'(overrides?: PayableOverrides): Promise<BigNumber>;

    addToLuckPool(overrides?: PayableOverrides): Promise<BigNumber>;

    'addToLuckPool()'(overrides?: PayableOverrides): Promise<BigNumber>;

    currentNrtMonth(overrides?: CallOverrides): Promise<BigNumber>;

    'currentNrtMonth()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  abstract populateTransaction: {
    addToBurnPool(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    'addToBurnPool()'(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    addToLuckPool(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    'addToLuckPool()'(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    currentNrtMonth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'currentNrtMonth()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
