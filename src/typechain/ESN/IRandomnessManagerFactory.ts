/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IRandomnessManager } from "./IRandomnessManager";

export class IRandomnessManagerFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRandomnessManager {
    return new Contract(address, _abi, signerOrProvider) as IRandomnessManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numberOfBytes",
        type: "uint256",
      },
    ],
    name: "getRandomBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRandomBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
