/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { PetPrepaidFundsBucket } from './PetPrepaidFundsBucket';

export class PetPrepaidFundsBucketFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_token: string, _deployer: string, overrides?: Overrides): Promise<PetPrepaidFundsBucket> {
    return super.deploy(_token, _deployer, overrides || {}) as Promise<PetPrepaidFundsBucket>;
  }
  getDeployTransaction(
    _token: string,
    _deployer: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _deployer, overrides || {});
  }
  attach(address: string): PetPrepaidFundsBucket {
    return super.attach(address) as PetPrepaidFundsBucket;
  }
  connect(signer: Signer): PetPrepaidFundsBucketFactory {
    return super.connect(signer) as PetPrepaidFundsBucketFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PetPrepaidFundsBucket {
    return new Contract(address, _abi, signerOrProvider) as PetPrepaidFundsBucket;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract PrepaidEs',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_deployer',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_depositer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_depositAmount',
        type: 'uint256',
      },
    ],
    name: 'FundsDeposited',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_withdrawer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_withdrawAmount',
        type: 'uint256',
      },
    ],
    name: 'FundsWithdrawn',
    type: 'event',
  },
  {
    inputs: [],
    name: 'addFunds',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deployer',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'petContract',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token',
    outputs: [
      {
        internalType: 'contract PrepaidEs',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_withdrawEverything',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_withdrawlAmount',
        type: 'uint256',
      },
    ],
    name: 'withdrawFunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516105a53803806105a58339818101604052604081101561003357600080fd5b508051602090910151600180546001600160a01b039384166001600160a01b0319918216179091556000805493909216928116929092179055600280549091163317905561051f806100866000396000f3fe60806040526004361061005e5760003560e01c8063a26759cb11610043578063a26759cb146100e2578063d5f39488146100ea578063fc0c546a146100ff5761006d565b80633b4d8a7d146100725780639997e137146100a45761006d565b3661006d5761006b610114565b005b600080fd5b34801561007e57600080fd5b5061006b6004803603604081101561009557600080fd5b50803515159060200135610284565b3480156100b057600080fd5b506100b9610495565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61006b610114565b3480156100f657600080fd5b506100b96104b1565b34801561010b57600080fd5b506100b96104cd565b600154604080517f301bae2e000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff9092169163301bae2e913491602480830192600092919082900301818588803b15801561018757600080fd5b505af115801561019b573d6000803e3d6000fd5b5050600154600254604080517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9283166004820152346024820152905191909216945063095ea7b39350604480830193506020928290030181600087803b15801561021c57600080fd5b505af1158015610230573d6000803e3d6000fd5b505050506040513d602081101561024657600080fd5b50506040805133815234602082015281517f543ba50a5eec5e6178218e364b1d0f396157b3c8fa278522c2cb7fd99407d474929181900390910190a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461030a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6f6e6c79206465706c6f7965722063616e2063616c6c00000000000000000000604482015290519081900360640190fd5b81156103b057600154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561038157600080fd5b505afa158015610395573d6000803e3d6000fd5b505050506040513d60208110156103ab57600080fd5b505190505b600154604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101849052905173ffffffffffffffffffffffffffffffffffffffff9092169163a9059cbb916044808201926020929091908290030181600087803b15801561042a57600080fd5b505af115801561043e573d6000803e3d6000fd5b505050506040513d602081101561045457600080fd5b5050604080513381526020810183905281517feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d929181900390910190a15050565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff168156fea2646970667358221220bcab07dd3bf87ea2cb49d9a1d71eb464c211467197f9cd545b44b3d75cfcb0e564736f6c63430007040033';
