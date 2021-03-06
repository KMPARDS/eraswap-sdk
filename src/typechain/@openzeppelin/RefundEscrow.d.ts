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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface RefundEscrowInterface extends ethers.utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "beneficiaryWithdraw()": FunctionFragment;
    "close()": FunctionFragment;
    "deposit(address)": FunctionFragment;
    "depositsOf(address)": FunctionFragment;
    "enableRefunds()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "state()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "withdrawalAllowed(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiaryWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "close", values?: undefined): string;
  encodeFunctionData(functionFragment: "deposit", values: [string]): string;
  encodeFunctionData(functionFragment: "depositsOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "enableRefunds",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawalAllowed",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beneficiaryWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositsOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enableRefunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalAllowed",
    data: BytesLike
  ): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RefundsClosed()": EventFragment;
    "RefundsEnabled()": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundsClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundsEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class RefundEscrow extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RefundEscrowInterface;

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
     * Withdraws the beneficiary's funds.
     */
    beneficiaryWithdraw(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Withdraws the beneficiary's funds.
     */
    "beneficiaryWithdraw()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
     */
    close(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
     */
    "close()"(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Stores funds that may later be refunded.
     * @param refundee The address funds will be sent to if a refund occurs.
     */
    deposit(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    /**
     * Stores funds that may later be refunded.
     * @param refundee The address funds will be sent to if a refund occurs.
     */
    "deposit(address)"(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    depositsOf(
      payee: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Allows for refunds to take place, rejecting further deposits.
     */
    enableRefunds(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Allows for refunds to take place, rejecting further deposits.
     */
    "enableRefunds()"(overrides?: Overrides): Promise<ContractTransaction>;

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
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     */
    state(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    /**
     */
    "state()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
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

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    withdraw(
      payee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
     */
    withdrawalAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
     */
    "withdrawalAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  /**
   */
  beneficiary(overrides?: CallOverrides): Promise<string>;

  /**
   */
  "beneficiary()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Withdraws the beneficiary's funds.
   */
  beneficiaryWithdraw(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Withdraws the beneficiary's funds.
   */
  "beneficiaryWithdraw()"(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
   */
  close(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
   */
  "close()"(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Stores funds that may later be refunded.
   * @param refundee The address funds will be sent to if a refund occurs.
   */
  deposit(
    refundee: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  /**
   * Stores funds that may later be refunded.
   * @param refundee The address funds will be sent to if a refund occurs.
   */
  "deposit(address)"(
    refundee: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

  "depositsOf(address)"(
    payee: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Allows for refunds to take place, rejecting further deposits.
   */
  enableRefunds(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Allows for refunds to take place, rejecting further deposits.
   */
  "enableRefunds()"(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   */
  state(overrides?: CallOverrides): Promise<number>;

  /**
   */
  "state()"(overrides?: CallOverrides): Promise<number>;

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

  /**
   * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
   * @param payee The address whose funds will be withdrawn and transferred to.
   */
  withdraw(payee: string, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
   * @param payee The address whose funds will be withdrawn and transferred to.
   */
  "withdraw(address)"(
    payee: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
   */
  withdrawalAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  /**
   * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
   */
  "withdrawalAllowed(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    /**
     */
    beneficiary(overrides?: CallOverrides): Promise<string>;

    /**
     */
    "beneficiary()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Withdraws the beneficiary's funds.
     */
    beneficiaryWithdraw(overrides?: CallOverrides): Promise<void>;

    /**
     * Withdraws the beneficiary's funds.
     */
    "beneficiaryWithdraw()"(overrides?: CallOverrides): Promise<void>;

    /**
     * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
     */
    close(overrides?: CallOverrides): Promise<void>;

    /**
     * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
     */
    "close()"(overrides?: CallOverrides): Promise<void>;

    /**
     * Stores funds that may later be refunded.
     * @param refundee The address funds will be sent to if a refund occurs.
     */
    deposit(refundee: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Stores funds that may later be refunded.
     * @param refundee The address funds will be sent to if a refund occurs.
     */
    "deposit(address)"(
      refundee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Allows for refunds to take place, rejecting further deposits.
     */
    enableRefunds(overrides?: CallOverrides): Promise<void>;

    /**
     * Allows for refunds to take place, rejecting further deposits.
     */
    "enableRefunds()"(overrides?: CallOverrides): Promise<void>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    /**
     */
    state(overrides?: CallOverrides): Promise<number>;

    /**
     */
    "state()"(overrides?: CallOverrides): Promise<number>;

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

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    withdraw(payee: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    "withdraw(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
     */
    withdrawalAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
     */
    "withdrawalAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Deposited(payee: string | null, weiAmount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    RefundsClosed(): EventFilter;

    RefundsEnabled(): EventFilter;

    Withdrawn(payee: string | null, weiAmount: null): EventFilter;
  };

  estimateGas: {
    /**
     */
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     */
    "beneficiary()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Withdraws the beneficiary's funds.
     */
    beneficiaryWithdraw(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Withdraws the beneficiary's funds.
     */
    "beneficiaryWithdraw()"(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
     */
    close(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
     */
    "close()"(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Stores funds that may later be refunded.
     * @param refundee The address funds will be sent to if a refund occurs.
     */
    deposit(refundee: string, overrides?: PayableOverrides): Promise<BigNumber>;

    /**
     * Stores funds that may later be refunded.
     * @param refundee The address funds will be sent to if a refund occurs.
     */
    "deposit(address)"(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Allows for refunds to take place, rejecting further deposits.
     */
    enableRefunds(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Allows for refunds to take place, rejecting further deposits.
     */
    "enableRefunds()"(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    /**
     */
    state(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     */
    "state()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    withdraw(payee: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
     */
    withdrawalAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
     */
    "withdrawalAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     */
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     */
    "beneficiary()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Withdraws the beneficiary's funds.
     */
    beneficiaryWithdraw(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Withdraws the beneficiary's funds.
     */
    "beneficiaryWithdraw()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
     */
    close(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Allows for the beneficiary to withdraw their funds, rejecting further deposits.
     */
    "close()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Stores funds that may later be refunded.
     * @param refundee The address funds will be sent to if a refund occurs.
     */
    deposit(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Stores funds that may later be refunded.
     * @param refundee The address funds will be sent to if a refund occurs.
     */
    "deposit(address)"(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    depositsOf(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Allows for refunds to take place, rejecting further deposits.
     */
    enableRefunds(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Allows for refunds to take place, rejecting further deposits.
     */
    "enableRefunds()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     */
    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     */
    "state()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    withdraw(
      payee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
     */
    withdrawalAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a 'payee' argument, but we ignore it here since the condition is global, not per-payee.
     */
    "withdrawalAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
