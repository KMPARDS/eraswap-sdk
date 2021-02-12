/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { PetLiquidFlattenInrtReceiver } from "./PetLiquidFlattenInrtReceiver";

export class PetLiquidFlattenInrtReceiverFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PetLiquidFlattenInrtReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PetLiquidFlattenInrtReceiver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_month",
        type: "uint32",
      },
    ],
    name: "getMonthlyNRT",
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
        internalType: "uint32",
        name: "_currentNrtMonth",
        type: "uint32",
      },
    ],
    name: "receiveNrt",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
