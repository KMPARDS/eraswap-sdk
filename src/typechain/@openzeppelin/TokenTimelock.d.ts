/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TokenTimelockInterface extends ethers.utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "release()": FunctionFragment;
    "releaseTime()": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "release", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releaseTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class TokenTimelock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TokenTimelockInterface;

  functions: {
    /**
     */
    beneficiary(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     */
    "beneficiary()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    release(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    "release()"(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     */
    releaseTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     */
    "releaseTime()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     */
    token(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     */
    "token()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  /**
   */
  beneficiary(overrides?: CallOverrides): Promise<string>;

  /**
   */
  "beneficiary()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Transfers tokens held by timelock to beneficiary.
   */
  release(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Transfers tokens held by timelock to beneficiary.
   */
  "release()"(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   */
  releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   */
  "releaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   */
  token(overrides?: CallOverrides): Promise<string>;

  /**
   */
  "token()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    /**
     */
    beneficiary(overrides?: CallOverrides): Promise<string>;

    /**
     */
    "beneficiary()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    release(overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    "release()"(overrides?: CallOverrides): Promise<void>;

    /**
     */
    releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     */
    "releaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     */
    token(overrides?: CallOverrides): Promise<string>;

    /**
     */
    "token()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    /**
     */
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     */
    "beneficiary()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    release(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    "release()"(overrides?: Overrides): Promise<BigNumber>;

    /**
     */
    releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     */
    "releaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     */
    token(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     */
    "token()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     */
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     */
    "beneficiary()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    release(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    "release()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     */
    releaseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     */
    "releaseTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     */
    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     */
    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
