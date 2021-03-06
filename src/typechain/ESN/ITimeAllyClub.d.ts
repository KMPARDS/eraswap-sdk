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

interface ITimeAllyClubInterface extends ethers.utils.Interface {
  functions: {
    "getCurrentIncentiveSlabForNetworker(address,address)": FunctionFragment;
    "getIncentiveSlab(uint256,address)": FunctionFragment;
    "getMembershipVolume(address,uint32)": FunctionFragment;
    "getPlatformBusiness(address,uint32,address)": FunctionFragment;
    "getReward(address,uint32,address)": FunctionFragment;
    "getTotalBusinessVolume(uint32)": FunctionFragment;
    "rewardToIntroducer(address,uint256)": FunctionFragment;
    "rewardToNetworker(address,uint256)": FunctionFragment;
    "withdrawPlatformIncentive(uint32,address,uint8,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCurrentIncentiveSlabForNetworker",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getIncentiveSlab",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMembershipVolume",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformBusiness",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBusinessVolume",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToIntroducer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToNetworker",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawPlatformIncentive",
    values: [BigNumberish, string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentIncentiveSlabForNetworker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncentiveSlab",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMembershipVolume",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformBusiness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBusinessVolume",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToIntroducer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToNetworker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawPlatformIncentive",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITimeAllyClub extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITimeAllyClubInterface;

  functions: {
    getCurrentIncentiveSlabForNetworker(
      _networker: string,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        label: string;
        target: BigNumber;
        directBountyPerTenThousand: number;
        treeBountyPerTenThousand: number;
        0: string;
        1: BigNumber;
        2: number;
        3: number;
      };
    }>;

    "getCurrentIncentiveSlabForNetworker(address,address)"(
      _networker: string,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        label: string;
        target: BigNumber;
        directBountyPerTenThousand: number;
        treeBountyPerTenThousand: number;
        0: string;
        1: BigNumber;
        2: number;
        3: number;
      };
    }>;

    getIncentiveSlab(
      _volume: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        label: string;
        target: BigNumber;
        directBountyPerTenThousand: number;
        treeBountyPerTenThousand: number;
        0: string;
        1: BigNumber;
        2: number;
        3: number;
      };
    }>;

    "getIncentiveSlab(uint256,address)"(
      _volume: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        label: string;
        target: BigNumber;
        directBountyPerTenThousand: number;
        treeBountyPerTenThousand: number;
        0: string;
        1: BigNumber;
        2: number;
        3: number;
      };
    }>;

    getMembershipVolume(
      _network: string,
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      businessVolume: BigNumber;
      otherVolume: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "getMembershipVolume(address,uint32)"(
      _network: string,
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      businessVolume: BigNumber;
      otherVolume: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    getPlatformBusiness(
      _network: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        business: BigNumber;
        calculatedReward: BigNumber;
        claimed: boolean;
        0: BigNumber;
        1: BigNumber;
        2: boolean;
      };
    }>;

    "getPlatformBusiness(address,uint32,address)"(
      _network: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        business: BigNumber;
        calculatedReward: BigNumber;
        claimed: boolean;
        0: BigNumber;
        1: BigNumber;
        2: boolean;
      };
    }>;

    getReward(
      _networker: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      direct: BigNumber;
      tree: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "getReward(address,uint32,address)"(
      _networker: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      direct: BigNumber;
      tree: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    getTotalBusinessVolume(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getTotalBusinessVolume(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    rewardToIntroducer(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "rewardToIntroducer(address,uint256)"(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    rewardToNetworker(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "rewardToNetworker(address,uint256)"(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawPlatformIncentive(
      _month: BigNumberish,
      _platform: string,
      _rewardType: BigNumberish,
      stakingContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawPlatformIncentive(uint32,address,uint8,address)"(
      _month: BigNumberish,
      _platform: string,
      _rewardType: BigNumberish,
      stakingContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getCurrentIncentiveSlabForNetworker(
    _networker: string,
    _platform: string,
    overrides?: CallOverrides
  ): Promise<{
    label: string;
    target: BigNumber;
    directBountyPerTenThousand: number;
    treeBountyPerTenThousand: number;
    0: string;
    1: BigNumber;
    2: number;
    3: number;
  }>;

  "getCurrentIncentiveSlabForNetworker(address,address)"(
    _networker: string,
    _platform: string,
    overrides?: CallOverrides
  ): Promise<{
    label: string;
    target: BigNumber;
    directBountyPerTenThousand: number;
    treeBountyPerTenThousand: number;
    0: string;
    1: BigNumber;
    2: number;
    3: number;
  }>;

  getIncentiveSlab(
    _volume: BigNumberish,
    _platform: string,
    overrides?: CallOverrides
  ): Promise<{
    label: string;
    target: BigNumber;
    directBountyPerTenThousand: number;
    treeBountyPerTenThousand: number;
    0: string;
    1: BigNumber;
    2: number;
    3: number;
  }>;

  "getIncentiveSlab(uint256,address)"(
    _volume: BigNumberish,
    _platform: string,
    overrides?: CallOverrides
  ): Promise<{
    label: string;
    target: BigNumber;
    directBountyPerTenThousand: number;
    treeBountyPerTenThousand: number;
    0: string;
    1: BigNumber;
    2: number;
    3: number;
  }>;

  getMembershipVolume(
    _network: string,
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    businessVolume: BigNumber;
    otherVolume: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "getMembershipVolume(address,uint32)"(
    _network: string,
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    businessVolume: BigNumber;
    otherVolume: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  getPlatformBusiness(
    _network: string,
    _month: BigNumberish,
    _platform: string,
    overrides?: CallOverrides
  ): Promise<{
    business: BigNumber;
    calculatedReward: BigNumber;
    claimed: boolean;
    0: BigNumber;
    1: BigNumber;
    2: boolean;
  }>;

  "getPlatformBusiness(address,uint32,address)"(
    _network: string,
    _month: BigNumberish,
    _platform: string,
    overrides?: CallOverrides
  ): Promise<{
    business: BigNumber;
    calculatedReward: BigNumber;
    claimed: boolean;
    0: BigNumber;
    1: BigNumber;
    2: boolean;
  }>;

  getReward(
    _networker: string,
    _month: BigNumberish,
    _platform: string,
    overrides?: CallOverrides
  ): Promise<{
    direct: BigNumber;
    tree: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "getReward(address,uint32,address)"(
    _networker: string,
    _month: BigNumberish,
    _platform: string,
    overrides?: CallOverrides
  ): Promise<{
    direct: BigNumber;
    tree: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  getTotalBusinessVolume(
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTotalBusinessVolume(uint32)"(
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardToIntroducer(
    _networker: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "rewardToIntroducer(address,uint256)"(
    _networker: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  rewardToNetworker(
    _networker: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "rewardToNetworker(address,uint256)"(
    _networker: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawPlatformIncentive(
    _month: BigNumberish,
    _platform: string,
    _rewardType: BigNumberish,
    stakingContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawPlatformIncentive(uint32,address,uint8,address)"(
    _month: BigNumberish,
    _platform: string,
    _rewardType: BigNumberish,
    stakingContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getCurrentIncentiveSlabForNetworker(
      _networker: string,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      label: string;
      target: BigNumber;
      directBountyPerTenThousand: number;
      treeBountyPerTenThousand: number;
      0: string;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    "getCurrentIncentiveSlabForNetworker(address,address)"(
      _networker: string,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      label: string;
      target: BigNumber;
      directBountyPerTenThousand: number;
      treeBountyPerTenThousand: number;
      0: string;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    getIncentiveSlab(
      _volume: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      label: string;
      target: BigNumber;
      directBountyPerTenThousand: number;
      treeBountyPerTenThousand: number;
      0: string;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    "getIncentiveSlab(uint256,address)"(
      _volume: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      label: string;
      target: BigNumber;
      directBountyPerTenThousand: number;
      treeBountyPerTenThousand: number;
      0: string;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    getMembershipVolume(
      _network: string,
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      businessVolume: BigNumber;
      otherVolume: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "getMembershipVolume(address,uint32)"(
      _network: string,
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      businessVolume: BigNumber;
      otherVolume: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    getPlatformBusiness(
      _network: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      business: BigNumber;
      calculatedReward: BigNumber;
      claimed: boolean;
      0: BigNumber;
      1: BigNumber;
      2: boolean;
    }>;

    "getPlatformBusiness(address,uint32,address)"(
      _network: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      business: BigNumber;
      calculatedReward: BigNumber;
      claimed: boolean;
      0: BigNumber;
      1: BigNumber;
      2: boolean;
    }>;

    getReward(
      _networker: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      direct: BigNumber;
      tree: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "getReward(address,uint32,address)"(
      _networker: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<{
      direct: BigNumber;
      tree: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    getTotalBusinessVolume(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalBusinessVolume(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardToIntroducer(
      _networker: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "rewardToIntroducer(address,uint256)"(
      _networker: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardToNetworker(
      _networker: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "rewardToNetworker(address,uint256)"(
      _networker: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawPlatformIncentive(
      _month: BigNumberish,
      _platform: string,
      _rewardType: BigNumberish,
      stakingContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawPlatformIncentive(uint32,address,uint8,address)"(
      _month: BigNumberish,
      _platform: string,
      _rewardType: BigNumberish,
      stakingContract: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getCurrentIncentiveSlabForNetworker(
      _networker: string,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCurrentIncentiveSlabForNetworker(address,address)"(
      _networker: string,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIncentiveSlab(
      _volume: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getIncentiveSlab(uint256,address)"(
      _volume: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMembershipVolume(
      _network: string,
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMembershipVolume(address,uint32)"(
      _network: string,
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlatformBusiness(
      _network: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPlatformBusiness(address,uint32,address)"(
      _network: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReward(
      _networker: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReward(address,uint32,address)"(
      _networker: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalBusinessVolume(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalBusinessVolume(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardToIntroducer(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "rewardToIntroducer(address,uint256)"(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    rewardToNetworker(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "rewardToNetworker(address,uint256)"(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawPlatformIncentive(
      _month: BigNumberish,
      _platform: string,
      _rewardType: BigNumberish,
      stakingContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawPlatformIncentive(uint32,address,uint8,address)"(
      _month: BigNumberish,
      _platform: string,
      _rewardType: BigNumberish,
      stakingContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentIncentiveSlabForNetworker(
      _networker: string,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurrentIncentiveSlabForNetworker(address,address)"(
      _networker: string,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIncentiveSlab(
      _volume: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getIncentiveSlab(uint256,address)"(
      _volume: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMembershipVolume(
      _network: string,
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMembershipVolume(address,uint32)"(
      _network: string,
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlatformBusiness(
      _network: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPlatformBusiness(address,uint32,address)"(
      _network: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReward(
      _networker: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReward(address,uint32,address)"(
      _networker: string,
      _month: BigNumberish,
      _platform: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBusinessVolume(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalBusinessVolume(uint32)"(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardToIntroducer(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "rewardToIntroducer(address,uint256)"(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    rewardToNetworker(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "rewardToNetworker(address,uint256)"(
      _networker: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawPlatformIncentive(
      _month: BigNumberish,
      _platform: string,
      _rewardType: BigNumberish,
      stakingContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawPlatformIncentive(uint32,address,uint8,address)"(
      _month: BigNumberish,
      _platform: string,
      _rewardType: BigNumberish,
      stakingContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
