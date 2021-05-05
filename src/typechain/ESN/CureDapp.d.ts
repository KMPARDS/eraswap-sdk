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

interface CureDappInterface extends ethers.utils.Interface {
  functions: {
    "BookAppointment(address)": FunctionFragment;
    "CureAppointment(address)": FunctionFragment;
    "ProceedAppointment(address)": FunctionFragment;
    "Refund(address)": FunctionFragment;
    "appointments(address)": FunctionFragment;
    "dayswappers()": FunctionFragment;
    "experts(address)": FunctionFragment;
    "implementation()": FunctionFragment;
    "kycDapp()": FunctionFragment;
    "newExpert(string,string,bytes32,uint256,uint256)": FunctionFragment;
    "nrtManager()": FunctionFragment;
    "owner()": FunctionFragment;
    "prepaidEs()": FunctionFragment;
    "randomnessManager()": FunctionFragment;
    "resolveAddress(bytes32)": FunctionFragment;
    "resolveAddressStrict(bytes32)": FunctionFragment;
    "resolveUsername(address)": FunctionFragment;
    "resolveUsernameStrict(address)": FunctionFragment;
    "setKycDapp(address)": FunctionFragment;
    "storageFactory(address)": FunctionFragment;
    "timeallyClub()": FunctionFragment;
    "timeallyManager()": FunctionFragment;
    "timeallyPromotionalBucket()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateExpert(string,string,bytes32,uint256,uint256)": FunctionFragment;
    "validatorManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BookAppointment",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "CureAppointment",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "ProceedAppointment",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "Refund", values: [string]): string;
  encodeFunctionData(
    functionFragment: "appointments",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "dayswappers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "experts", values: [string]): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kycDapp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "newExpert",
    values: [string, string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nrtManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "prepaidEs", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "randomnessManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resolveAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveAddressStrict",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveUsername",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveUsernameStrict",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setKycDapp", values: [string]): string;
  encodeFunctionData(
    functionFragment: "storageFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "timeallyClub",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeallyManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeallyPromotionalBucket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateExpert",
    values: [string, string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorManager",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BookAppointment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CureAppointment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ProceedAppointment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Refund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "appointments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dayswappers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "experts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kycDapp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newExpert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nrtManager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prepaidEs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "randomnessManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveAddressStrict",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveUsername",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveUsernameStrict",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKycDapp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "storageFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeallyClub",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeallyManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeallyPromotionalBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateExpert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorManager",
    data: BytesLike
  ): Result;

  events: {
    "AppointmentBooked(address,address,address)": EventFragment;
    "NewExpert(address,string,bytes32,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AppointmentBooked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewExpert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class CureDapp extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CureDappInterface;

  functions: {
    BookAppointment(
      _expert: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "BookAppointment(address)"(
      _expert: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    CureAppointment(
      _chat: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "CureAppointment(address)"(
      _chat: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ProceedAppointment(
      _chat: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ProceedAppointment(address)"(
      _chat: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    Refund(_chat: string, overrides?: Overrides): Promise<ContractTransaction>;

    "Refund(address)"(
      _chat: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    appointments(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      expert: string;
      patient: string;
      fees: BigNumber;
      chat: string;
      status: number;
      0: string;
      1: string;
      2: BigNumber;
      3: string;
      4: number;
    }>;

    "appointments(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      expert: string;
      patient: string;
      fees: BigNumber;
      chat: string;
      status: number;
      0: string;
      1: string;
      2: BigNumber;
      3: string;
      4: number;
    }>;

    dayswappers(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "dayswappers()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    experts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      specilization: string;
      Details: string;
      name: string;
      fees: BigNumber;
      Incentive: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
      4: BigNumber;
    }>;

    "experts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      specilization: string;
      Details: string;
      name: string;
      fees: BigNumber;
      Incentive: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
      4: BigNumber;
    }>;

    implementation(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "implementation()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    kycDapp(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "kycDapp()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    newExpert(
      _Details: string,
      name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "newExpert(string,string,bytes32,uint256,uint256)"(
      _Details: string,
      name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    nrtManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "nrtManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

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

    prepaidEs(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "prepaidEs()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    randomnessManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "randomnessManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveAddress(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolveAddress(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveAddressStrict(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolveAddressStrict(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveUsername(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolveUsername(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolveUsernameStrict(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setKycDapp(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    storageFactory(
      _implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "storageFactory(address)"(
      _implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    timeallyClub(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "timeallyClub()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    timeallyManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "timeallyManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    timeallyPromotionalBucket(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "timeallyPromotionalBucket()"(
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

    updateExpert(
      _Details: string,
      _name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateExpert(string,string,bytes32,uint256,uint256)"(
      _Details: string,
      _name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    validatorManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "validatorManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  BookAppointment(
    _expert: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "BookAppointment(address)"(
    _expert: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  CureAppointment(
    _chat: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "CureAppointment(address)"(
    _chat: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ProceedAppointment(
    _chat: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ProceedAppointment(address)"(
    _chat: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  Refund(_chat: string, overrides?: Overrides): Promise<ContractTransaction>;

  "Refund(address)"(
    _chat: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  appointments(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    expert: string;
    patient: string;
    fees: BigNumber;
    chat: string;
    status: number;
    0: string;
    1: string;
    2: BigNumber;
    3: string;
    4: number;
  }>;

  "appointments(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    expert: string;
    patient: string;
    fees: BigNumber;
    chat: string;
    status: number;
    0: string;
    1: string;
    2: BigNumber;
    3: string;
    4: number;
  }>;

  dayswappers(overrides?: CallOverrides): Promise<string>;

  "dayswappers()"(overrides?: CallOverrides): Promise<string>;

  experts(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    specilization: string;
    Details: string;
    name: string;
    fees: BigNumber;
    Incentive: BigNumber;
    0: string;
    1: string;
    2: string;
    3: BigNumber;
    4: BigNumber;
  }>;

  "experts(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    specilization: string;
    Details: string;
    name: string;
    fees: BigNumber;
    Incentive: BigNumber;
    0: string;
    1: string;
    2: string;
    3: BigNumber;
    4: BigNumber;
  }>;

  implementation(overrides?: CallOverrides): Promise<string>;

  "implementation()"(overrides?: CallOverrides): Promise<string>;

  kycDapp(overrides?: CallOverrides): Promise<string>;

  "kycDapp()"(overrides?: CallOverrides): Promise<string>;

  newExpert(
    _Details: string,
    name: string,
    _specilization: BytesLike,
    _fees: BigNumberish,
    _incentive: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "newExpert(string,string,bytes32,uint256,uint256)"(
    _Details: string,
    name: string,
    _specilization: BytesLike,
    _fees: BigNumberish,
    _incentive: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  nrtManager(overrides?: CallOverrides): Promise<string>;

  "nrtManager()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  prepaidEs(overrides?: CallOverrides): Promise<string>;

  "prepaidEs()"(overrides?: CallOverrides): Promise<string>;

  randomnessManager(overrides?: CallOverrides): Promise<string>;

  "randomnessManager()"(overrides?: CallOverrides): Promise<string>;

  resolveAddress(
    _username: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "resolveAddress(bytes32)"(
    _username: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  resolveAddressStrict(
    _username: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "resolveAddressStrict(bytes32)"(
    _username: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  resolveUsername(_wallet: string, overrides?: CallOverrides): Promise<string>;

  "resolveUsername(address)"(
    _wallet: string,
    overrides?: CallOverrides
  ): Promise<string>;

  resolveUsernameStrict(
    _wallet: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "resolveUsernameStrict(address)"(
    _wallet: string,
    overrides?: CallOverrides
  ): Promise<string>;

  setKycDapp(
    _kycDapp: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setKycDapp(address)"(
    _kycDapp: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  storageFactory(
    _implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "storageFactory(address)"(
    _implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  timeallyClub(overrides?: CallOverrides): Promise<string>;

  "timeallyClub()"(overrides?: CallOverrides): Promise<string>;

  timeallyManager(overrides?: CallOverrides): Promise<string>;

  "timeallyManager()"(overrides?: CallOverrides): Promise<string>;

  timeallyPromotionalBucket(overrides?: CallOverrides): Promise<string>;

  "timeallyPromotionalBucket()"(overrides?: CallOverrides): Promise<string>;

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

  updateExpert(
    _Details: string,
    _name: string,
    _specilization: BytesLike,
    _fees: BigNumberish,
    _incentive: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateExpert(string,string,bytes32,uint256,uint256)"(
    _Details: string,
    _name: string,
    _specilization: BytesLike,
    _fees: BigNumberish,
    _incentive: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  validatorManager(overrides?: CallOverrides): Promise<string>;

  "validatorManager()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BookAppointment(_expert: string, overrides?: CallOverrides): Promise<void>;

    "BookAppointment(address)"(
      _expert: string,
      overrides?: CallOverrides
    ): Promise<void>;

    CureAppointment(_chat: string, overrides?: CallOverrides): Promise<void>;

    "CureAppointment(address)"(
      _chat: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ProceedAppointment(_chat: string, overrides?: CallOverrides): Promise<void>;

    "ProceedAppointment(address)"(
      _chat: string,
      overrides?: CallOverrides
    ): Promise<void>;

    Refund(_chat: string, overrides?: CallOverrides): Promise<void>;

    "Refund(address)"(_chat: string, overrides?: CallOverrides): Promise<void>;

    appointments(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      expert: string;
      patient: string;
      fees: BigNumber;
      chat: string;
      status: number;
      0: string;
      1: string;
      2: BigNumber;
      3: string;
      4: number;
    }>;

    "appointments(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      expert: string;
      patient: string;
      fees: BigNumber;
      chat: string;
      status: number;
      0: string;
      1: string;
      2: BigNumber;
      3: string;
      4: number;
    }>;

    dayswappers(overrides?: CallOverrides): Promise<string>;

    "dayswappers()"(overrides?: CallOverrides): Promise<string>;

    experts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      specilization: string;
      Details: string;
      name: string;
      fees: BigNumber;
      Incentive: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
      4: BigNumber;
    }>;

    "experts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      specilization: string;
      Details: string;
      name: string;
      fees: BigNumber;
      Incentive: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
      4: BigNumber;
    }>;

    implementation(overrides?: CallOverrides): Promise<string>;

    "implementation()"(overrides?: CallOverrides): Promise<string>;

    kycDapp(overrides?: CallOverrides): Promise<string>;

    "kycDapp()"(overrides?: CallOverrides): Promise<string>;

    newExpert(
      _Details: string,
      name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "newExpert(string,string,bytes32,uint256,uint256)"(
      _Details: string,
      name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nrtManager(overrides?: CallOverrides): Promise<string>;

    "nrtManager()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    prepaidEs(overrides?: CallOverrides): Promise<string>;

    "prepaidEs()"(overrides?: CallOverrides): Promise<string>;

    randomnessManager(overrides?: CallOverrides): Promise<string>;

    "randomnessManager()"(overrides?: CallOverrides): Promise<string>;

    resolveAddress(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "resolveAddress(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    resolveAddressStrict(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "resolveAddressStrict(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    resolveUsername(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "resolveUsername(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "resolveUsernameStrict(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setKycDapp(_kycDapp: string, overrides?: CallOverrides): Promise<void>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: CallOverrides
    ): Promise<void>;

    storageFactory(
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "storageFactory(address)"(
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    timeallyClub(overrides?: CallOverrides): Promise<string>;

    "timeallyClub()"(overrides?: CallOverrides): Promise<string>;

    timeallyManager(overrides?: CallOverrides): Promise<string>;

    "timeallyManager()"(overrides?: CallOverrides): Promise<string>;

    timeallyPromotionalBucket(overrides?: CallOverrides): Promise<string>;

    "timeallyPromotionalBucket()"(overrides?: CallOverrides): Promise<string>;

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

    updateExpert(
      _Details: string,
      _name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateExpert(string,string,bytes32,uint256,uint256)"(
      _Details: string,
      _name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validatorManager(overrides?: CallOverrides): Promise<string>;

    "validatorManager()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    AppointmentBooked(
      expert: string | null,
      patient: string | null,
      chat: string | null
    ): EventFilter;

    NewExpert(
      expert: string | null,
      name: null,
      specilization: BytesLike | null,
      fees: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    BookAppointment(
      _expert: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "BookAppointment(address)"(
      _expert: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    CureAppointment(_chat: string, overrides?: Overrides): Promise<BigNumber>;

    "CureAppointment(address)"(
      _chat: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ProceedAppointment(
      _chat: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ProceedAppointment(address)"(
      _chat: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    Refund(_chat: string, overrides?: Overrides): Promise<BigNumber>;

    "Refund(address)"(_chat: string, overrides?: Overrides): Promise<BigNumber>;

    appointments(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "appointments(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dayswappers(overrides?: CallOverrides): Promise<BigNumber>;

    "dayswappers()"(overrides?: CallOverrides): Promise<BigNumber>;

    experts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "experts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    "implementation()"(overrides?: CallOverrides): Promise<BigNumber>;

    kycDapp(overrides?: CallOverrides): Promise<BigNumber>;

    "kycDapp()"(overrides?: CallOverrides): Promise<BigNumber>;

    newExpert(
      _Details: string,
      name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "newExpert(string,string,bytes32,uint256,uint256)"(
      _Details: string,
      name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    nrtManager(overrides?: CallOverrides): Promise<BigNumber>;

    "nrtManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    prepaidEs(overrides?: CallOverrides): Promise<BigNumber>;

    "prepaidEs()"(overrides?: CallOverrides): Promise<BigNumber>;

    randomnessManager(overrides?: CallOverrides): Promise<BigNumber>;

    "randomnessManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    resolveAddress(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "resolveAddress(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveAddressStrict(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "resolveAddressStrict(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveUsername(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "resolveUsername(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "resolveUsernameStrict(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setKycDapp(_kycDapp: string, overrides?: Overrides): Promise<BigNumber>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    storageFactory(
      _implementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "storageFactory(address)"(
      _implementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    timeallyClub(overrides?: CallOverrides): Promise<BigNumber>;

    "timeallyClub()"(overrides?: CallOverrides): Promise<BigNumber>;

    timeallyManager(overrides?: CallOverrides): Promise<BigNumber>;

    "timeallyManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    timeallyPromotionalBucket(overrides?: CallOverrides): Promise<BigNumber>;

    "timeallyPromotionalBucket()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    updateExpert(
      _Details: string,
      _name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateExpert(string,string,bytes32,uint256,uint256)"(
      _Details: string,
      _name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    validatorManager(overrides?: CallOverrides): Promise<BigNumber>;

    "validatorManager()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BookAppointment(
      _expert: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "BookAppointment(address)"(
      _expert: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    CureAppointment(
      _chat: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "CureAppointment(address)"(
      _chat: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ProceedAppointment(
      _chat: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ProceedAppointment(address)"(
      _chat: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    Refund(_chat: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "Refund(address)"(
      _chat: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    appointments(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "appointments(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dayswappers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dayswappers()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    experts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "experts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "implementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kycDapp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "kycDapp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newExpert(
      _Details: string,
      name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "newExpert(string,string,bytes32,uint256,uint256)"(
      _Details: string,
      name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    nrtManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nrtManager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prepaidEs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "prepaidEs()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randomnessManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "randomnessManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveAddress(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolveAddress(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveAddressStrict(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolveAddressStrict(bytes32)"(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveUsername(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolveUsername(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolveUsernameStrict(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setKycDapp(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setKycDapp(address)"(
      _kycDapp: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    storageFactory(
      _implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "storageFactory(address)"(
      _implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    timeallyClub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timeallyClub()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timeallyManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timeallyManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timeallyPromotionalBucket(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "timeallyPromotionalBucket()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    updateExpert(
      _Details: string,
      _name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateExpert(string,string,bytes32,uint256,uint256)"(
      _Details: string,
      _name: string,
      _specilization: BytesLike,
      _fees: BigNumberish,
      _incentive: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    validatorManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "validatorManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
