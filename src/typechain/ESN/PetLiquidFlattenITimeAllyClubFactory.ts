/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { PetLiquidFlattenITimeAllyClub } from "./PetLiquidFlattenITimeAllyClub";

export class PetLiquidFlattenITimeAllyClubFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PetLiquidFlattenITimeAllyClub {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PetLiquidFlattenITimeAllyClub;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_networker",
        type: "address",
      },
      {
        internalType: "address",
        name: "_platform",
        type: "address",
      },
    ],
    name: "getCurrentIncentiveSlabForNetworker",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "label",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "target",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "directBountyPerTenThousand",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "treeBountyPerTenThousand",
            type: "uint32",
          },
        ],
        internalType: "struct ITimeAllyClub.Incentive",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_volume",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_platform",
        type: "address",
      },
    ],
    name: "getIncentiveSlab",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "label",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "target",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "directBountyPerTenThousand",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "treeBountyPerTenThousand",
            type: "uint32",
          },
        ],
        internalType: "struct ITimeAllyClub.Incentive",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
    ],
    name: "getMembershipVolume",
    outputs: [
      {
        internalType: "uint256",
        name: "businessVolume",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "otherVolume",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_platform",
        type: "address",
      },
    ],
    name: "getPlatformBusiness",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "business",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "calculatedReward",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "claimed",
            type: "bool",
          },
        ],
        internalType: "struct ITimeAllyClub.PlatformBusiness",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_networker",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_platform",
        type: "address",
      },
    ],
    name: "getReward",
    outputs: [
      {
        internalType: "uint256",
        name: "direct",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tree",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
    ],
    name: "getTotalBusinessVolume",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_networker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "rewardToIntroducer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_networker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "rewardToNetworker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_platform",
        type: "address",
      },
      {
        internalType: "enum ITimeAllyClub.RewardType",
        name: "_rewardType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "stakingContract",
        type: "address",
      },
    ],
    name: "withdrawPlatformIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
