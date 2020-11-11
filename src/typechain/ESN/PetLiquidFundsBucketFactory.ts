/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { PetLiquidFundsBucket } from './PetLiquidFundsBucket';

export class PetLiquidFundsBucketFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _prepaidEs: string,
    _governance: string,
    overrides?: Overrides
  ): Promise<PetLiquidFundsBucket> {
    return super.deploy(_prepaidEs, _governance, overrides || {}) as Promise<PetLiquidFundsBucket>;
  }
  getDeployTransaction(
    _prepaidEs: string,
    _governance: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_prepaidEs, _governance, overrides || {});
  }
  attach(address: string): PetLiquidFundsBucket {
    return super.attach(address) as PetLiquidFundsBucket;
  }
  connect(signer: Signer): PetLiquidFundsBucketFactory {
    return super.connect(signer) as PetLiquidFundsBucketFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PetLiquidFundsBucket {
    return new Contract(address, _abi, signerOrProvider) as PetLiquidFundsBucket;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract PrepaidEs',
        name: '_prepaidEs',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_governance',
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'allocateFunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
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
    name: 'prepaidEs',
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
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
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
  '0x608060405234801561001057600080fd5b506040516107b53803806107b58339818101604052604081101561003357600080fd5b50805160209091015160006100466100b7565b600080546001600160a01b0319166001600160a01b038316908117825560405192935091600080516020610795833981519152908290a350600180546001600160a01b0384166001600160a01b03199182161790915560028054909116331790556100b0816100bb565b50506101d5565b3390565b6100c36100b7565b6000546001600160a01b03908116911614610125576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b61012e81610131565b50565b6001600160a01b03811661018c576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b038085169392169160008051602061079583398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6105b1806101e46000396000f3fe6080604052600436106100745760003560e01c8063a26759cb1161004e578063a26759cb14610100578063c9f8cc6714610108578063f2fde38b14610132578063f45679511461016557610083565b80633b4d8a7d146100885780638da5cb5b146100ba5780639997e137146100eb57610083565b366100835761008161017a565b005b600080fd5b34801561009457600080fd5b50610081600480360360408110156100ab57600080fd5b508035151590602001356101b6565b3480156100c657600080fd5b506100cf610306565b604080516001600160a01b039092168252519081900360200190f35b3480156100f757600080fd5b506100cf610315565b61008161017a565b34801561011457600080fd5b506100816004803603602081101561012b57600080fd5b5035610324565b34801561013e57600080fd5b506100816004803603602081101561015557600080fd5b50356001600160a01b0316610424565b34801561017157600080fd5b506100cf61049a565b6040805133815234602082015281517f543ba50a5eec5e6178218e364b1d0f396157b3c8fa278522c2cb7fd99407d474929181900390910190a1565b6101be6104a9565b6000546001600160a01b03908116911614610220576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b81156102295750475b604051600090339083908381818185875af1925050503d806000811461026b576040519150601f19603f3d011682016040523d82523d6000602084013e610270565b606091505b50509050806102c6576040805162461bcd60e51b815260206004820152601a60248201527f5045544c697146423a2057495448445241575f4641494c494e47000000000000604482015290519081900360640190fd5b604080513381526020810184905281517feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d929181900390910190a1505050565b6000546001600160a01b031690565b6002546001600160a01b031681565b6002546001600160a01b03163314610383576040805162461bcd60e51b815260206004820152601160248201527f6f6e6c79205045542063616e2063616c6c000000000000000000000000000000604482015290519081900360640190fd5b604051600090339083908381818185875af1925050503d80600081146103c5576040519150601f19603f3d011682016040523d82523d6000602084013e6103ca565b606091505b5050905080610420576040805162461bcd60e51b815260206004820181905260248201527f5045544c697146423a20414c4c4f434154455f46554e44535f4641494c494e47604482015290519081900360640190fd5b5050565b61042c6104a9565b6000546001600160a01b0390811691161461048e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b610497816104ad565b50565b6001546001600160a01b031681565b3390565b6001600160a01b038116610508576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b039290921691909117905556fea26469706673582212205aa2a66b26f063abd6a8d69dea9eadf14f758efd2eaa5601e4efacddff744d5964736f6c634300070400338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0';
