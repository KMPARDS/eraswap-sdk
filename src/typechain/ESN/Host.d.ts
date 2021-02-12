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

interface HostInterface extends ethers.utils.Interface {
  functions: {
    "Balance(uint256)": FunctionFragment;
    "ETHER()": FunctionFragment;
    "SECONDS_IN_MONTH()": FunctionFragment;
    "START()": FunctionFragment;
    "_owner()": FunctionFragment;
    "addFiles(bytes32,uint256)": FunctionFragment;
    "details()": FunctionFragment;
    "disputeFile(bytes32)": FunctionFragment;
    "disputes(bytes32)": FunctionFragment;
    "files(bytes32)": FunctionFragment;
    "getActiveFiles()": FunctionFragment;
    "init(address,bytes32,address)": FunctionFragment;
    "manager()": FunctionFragment;
    "rating()": FunctionFragment;
    "ratings(address)": FunctionFragment;
    "removeFile(bytes32)": FunctionFragment;
    "renewFile(bytes32,uint256)": FunctionFragment;
    "resolveDispute(bytes32,bool)": FunctionFragment;
    "setActiveFiles()": FunctionFragment;
    "withdrawFund(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "Balance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ETHER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SECONDS_IN_MONTH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "START", values?: undefined): string;
  encodeFunctionData(functionFragment: "_owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addFiles",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "details", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "disputeFile",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "disputes", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "files", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getActiveFiles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(functionFragment: "rating", values?: undefined): string;
  encodeFunctionData(functionFragment: "ratings", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeFile",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renewFile",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveDispute",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setActiveFiles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFund",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "Balance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ETHER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "SECONDS_IN_MONTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "START", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addFiles", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "details", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disputeFile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "files", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getActiveFiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rating", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ratings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeFile", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renewFile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "resolveDispute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setActiveFiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFund",
    data: BytesLike
  ): Result;

  events: {
    "Raised(bytes32)": EventFragment;
    "newFile(address,bytes32,uint256)": EventFragment;
    "remove(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Raised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "newFile"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "remove"): EventFragment;
}

export class Host extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: HostInterface;

  functions: {
    Balance(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "Balance(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    ETHER(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "ETHER()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    SECONDS_IN_MONTH(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "SECONDS_IN_MONTH()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    START(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "START()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    _owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "_owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    addFiles(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "addFiles(bytes32,uint256)"(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    details(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "details()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    disputeFile(
      Hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "disputeFile(bytes32)"(
      Hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    disputes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "disputes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    files(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      User: string;
      Time: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    "files(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      User: string;
      Time: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    getActiveFiles(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    "getActiveFiles()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    init(
      _owner1: string,
      _details: BytesLike,
      _manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "init(address,bytes32,address)"(
      _owner1: string,
      _details: BytesLike,
      _manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    manager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "manager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    rating(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "rating()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    ratings(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "ratings(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    removeFile(
      Hash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "removeFile(bytes32)"(
      Hash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    renewFile(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "renewFile(bytes32,uint256)"(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    resolveDispute(
      Hash: BytesLike,
      isRefund: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "resolveDispute(bytes32,bool)"(
      Hash: BytesLike,
      isRefund: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setActiveFiles(overrides?: Overrides): Promise<ContractTransaction>;

    "setActiveFiles()"(overrides?: Overrides): Promise<ContractTransaction>;

    withdrawFund(
      monthID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawFund(uint256)"(
      monthID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  Balance(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "Balance(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ETHER(overrides?: CallOverrides): Promise<BigNumber>;

  "ETHER()"(overrides?: CallOverrides): Promise<BigNumber>;

  SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

  "SECONDS_IN_MONTH()"(overrides?: CallOverrides): Promise<BigNumber>;

  START(overrides?: CallOverrides): Promise<BigNumber>;

  "START()"(overrides?: CallOverrides): Promise<BigNumber>;

  _owner(overrides?: CallOverrides): Promise<string>;

  "_owner()"(overrides?: CallOverrides): Promise<string>;

  addFiles(
    Hash: BytesLike,
    month: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "addFiles(bytes32,uint256)"(
    Hash: BytesLike,
    month: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  details(overrides?: CallOverrides): Promise<string>;

  "details()"(overrides?: CallOverrides): Promise<string>;

  disputeFile(
    Hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "disputeFile(bytes32)"(
    Hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  disputes(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;

  "disputes(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  files(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    User: string;
    Time: BigNumber;
    0: string;
    1: BigNumber;
  }>;

  "files(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    User: string;
    Time: BigNumber;
    0: string;
    1: BigNumber;
  }>;

  getActiveFiles(overrides?: CallOverrides): Promise<string[]>;

  "getActiveFiles()"(overrides?: CallOverrides): Promise<string[]>;

  init(
    _owner1: string,
    _details: BytesLike,
    _manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "init(address,bytes32,address)"(
    _owner1: string,
    _details: BytesLike,
    _manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  manager(overrides?: CallOverrides): Promise<string>;

  "manager()"(overrides?: CallOverrides): Promise<string>;

  rating(overrides?: CallOverrides): Promise<number>;

  "rating()"(overrides?: CallOverrides): Promise<number>;

  ratings(arg0: string, overrides?: CallOverrides): Promise<number>;

  "ratings(address)"(arg0: string, overrides?: CallOverrides): Promise<number>;

  removeFile(
    Hash: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "removeFile(bytes32)"(
    Hash: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  renewFile(
    Hash: BytesLike,
    month: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "renewFile(bytes32,uint256)"(
    Hash: BytesLike,
    month: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  resolveDispute(
    Hash: BytesLike,
    isRefund: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "resolveDispute(bytes32,bool)"(
    Hash: BytesLike,
    isRefund: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setActiveFiles(overrides?: Overrides): Promise<ContractTransaction>;

  "setActiveFiles()"(overrides?: Overrides): Promise<ContractTransaction>;

  withdrawFund(
    monthID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawFund(uint256)"(
    monthID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    Balance(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "Balance(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ETHER(overrides?: CallOverrides): Promise<BigNumber>;

    "ETHER()"(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_IN_MONTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    START(overrides?: CallOverrides): Promise<BigNumber>;

    "START()"(overrides?: CallOverrides): Promise<BigNumber>;

    _owner(overrides?: CallOverrides): Promise<string>;

    "_owner()"(overrides?: CallOverrides): Promise<string>;

    addFiles(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addFiles(bytes32,uint256)"(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    details(overrides?: CallOverrides): Promise<string>;

    "details()"(overrides?: CallOverrides): Promise<string>;

    disputeFile(Hash: BytesLike, overrides?: CallOverrides): Promise<void>;

    "disputeFile(bytes32)"(
      Hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    disputes(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;

    "disputes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    files(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      User: string;
      Time: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    "files(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      User: string;
      Time: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    getActiveFiles(overrides?: CallOverrides): Promise<string[]>;

    "getActiveFiles()"(overrides?: CallOverrides): Promise<string[]>;

    init(
      _owner1: string,
      _details: BytesLike,
      _manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "init(address,bytes32,address)"(
      _owner1: string,
      _details: BytesLike,
      _manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    manager(overrides?: CallOverrides): Promise<string>;

    "manager()"(overrides?: CallOverrides): Promise<string>;

    rating(overrides?: CallOverrides): Promise<number>;

    "rating()"(overrides?: CallOverrides): Promise<number>;

    ratings(arg0: string, overrides?: CallOverrides): Promise<number>;

    "ratings(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<number>;

    removeFile(Hash: BytesLike, overrides?: CallOverrides): Promise<void>;

    "removeFile(bytes32)"(
      Hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renewFile(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "renewFile(bytes32,uint256)"(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    resolveDispute(
      Hash: BytesLike,
      isRefund: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "resolveDispute(bytes32,bool)"(
      Hash: BytesLike,
      isRefund: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setActiveFiles(overrides?: CallOverrides): Promise<void>;

    "setActiveFiles()"(overrides?: CallOverrides): Promise<void>;

    withdrawFund(
      monthID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawFund(uint256)"(
      monthID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Raised(Hash: BytesLike | null): EventFilter;

    newFile(
      user: string | null,
      Hash: BytesLike | null,
      Time: null
    ): EventFilter;

    remove(Hash: BytesLike | null): EventFilter;
  };

  estimateGas: {
    Balance(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "Balance(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ETHER(overrides?: CallOverrides): Promise<BigNumber>;

    "ETHER()"(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_IN_MONTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    START(overrides?: CallOverrides): Promise<BigNumber>;

    "START()"(overrides?: CallOverrides): Promise<BigNumber>;

    _owner(overrides?: CallOverrides): Promise<BigNumber>;

    "_owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    addFiles(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "addFiles(bytes32,uint256)"(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    details(overrides?: CallOverrides): Promise<BigNumber>;

    "details()"(overrides?: CallOverrides): Promise<BigNumber>;

    disputeFile(Hash: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "disputeFile(bytes32)"(
      Hash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    disputes(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "disputes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    files(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "files(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActiveFiles(overrides?: CallOverrides): Promise<BigNumber>;

    "getActiveFiles()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _owner1: string,
      _details: BytesLike,
      _manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "init(address,bytes32,address)"(
      _owner1: string,
      _details: BytesLike,
      _manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    "manager()"(overrides?: CallOverrides): Promise<BigNumber>;

    rating(overrides?: CallOverrides): Promise<BigNumber>;

    "rating()"(overrides?: CallOverrides): Promise<BigNumber>;

    ratings(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "ratings(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeFile(
      Hash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "removeFile(bytes32)"(
      Hash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    renewFile(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "renewFile(bytes32,uint256)"(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    resolveDispute(
      Hash: BytesLike,
      isRefund: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "resolveDispute(bytes32,bool)"(
      Hash: BytesLike,
      isRefund: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setActiveFiles(overrides?: Overrides): Promise<BigNumber>;

    "setActiveFiles()"(overrides?: Overrides): Promise<BigNumber>;

    withdrawFund(
      monthID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawFund(uint256)"(
      monthID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    Balance(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "Balance(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ETHER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ETHER()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SECONDS_IN_MONTH()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    START(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "START()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addFiles(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "addFiles(bytes32,uint256)"(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    details(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "details()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disputeFile(
      Hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "disputeFile(bytes32)"(
      Hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    disputes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "disputes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    files(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "files(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActiveFiles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getActiveFiles()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      _owner1: string,
      _details: BytesLike,
      _manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "init(address,bytes32,address)"(
      _owner1: string,
      _details: BytesLike,
      _manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "manager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rating(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rating()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ratings(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ratings(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeFile(
      Hash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "removeFile(bytes32)"(
      Hash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    renewFile(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "renewFile(bytes32,uint256)"(
      Hash: BytesLike,
      month: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    resolveDispute(
      Hash: BytesLike,
      isRefund: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "resolveDispute(bytes32,bool)"(
      Hash: BytesLike,
      isRefund: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setActiveFiles(overrides?: Overrides): Promise<PopulatedTransaction>;

    "setActiveFiles()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    withdrawFund(
      monthID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawFund(uint256)"(
      monthID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
