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

interface PetLiquidFlattenOwnableInterface extends ethers.utils.Interface {
  functions: {
    "owner()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class PetLiquidFlattenOwnable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PetLiquidFlattenOwnableInterface;

  functions: {
    /**
     * Returns the address of the current owner.
     */
    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
