/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { NrtManager } from './NrtManager';

export class NrtManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<NrtManager> {
    return super.deploy(overrides || {}) as Promise<NrtManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NrtManager {
    return super.attach(address) as NrtManager;
  }
  connect(signer: Signer): NrtManagerFactory {
    return super.connect(signer) as NrtManagerFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NrtManager {
    return new Contract(address, _abi, signerOrProvider) as NrtManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'nrtMonth',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'nrtMonth',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'BurnPoolAccrue',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'nrtMonth',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'LuckPoolAccrue',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'nrtMonth',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'releaser',
        type: 'address',
      },
    ],
    name: 'NRT',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'nrtMonth',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'platformIdentifier',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'platform',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'NRTSend',
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
    name: 'BURN_ADDR',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SECONDS_IN_MONTH',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'addToBurnPool',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'addToLuckPool',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'annualNRT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'availableSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'burnPoolBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentNrtMonth',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dayswappers',
    outputs: [
      {
        internalType: 'contract IDayswappers',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBurnAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_perThousandIndex',
        type: 'uint256',
      },
    ],
    name: 'getPerThousand',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPerThousands',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_platformIndex',
        type: 'uint256',
      },
    ],
    name: 'getPlatform',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPlatformDetails',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPlatforms',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isAdminMode',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'kycDapp',
    outputs: [
      {
        internalType: 'contract IKycDapp',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastReleaseTimestamp',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'luckPoolBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nrtManager',
    outputs: [
      {
        internalType: 'contract INRTManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    name: 'prepaidEs',
    outputs: [
      {
        internalType: 'contract IPrepaidEs',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'randomnessManager',
    outputs: [
      {
        internalType: 'contract RandomnessManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'releaseMonthlyNRT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceAdminMode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
    ],
    name: 'resolveAddress',
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
    inputs: [
      {
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
    ],
    name: 'resolveAddressStrict',
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
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'resolveUsername',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'resolveUsernameStrict',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_kycDapp',
        type: 'address',
      },
    ],
    name: 'setKycDapp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: '_platformIdentifiers',
        type: 'bytes32[]',
      },
      {
        internalType: 'uint256[]',
        name: '_perThousands',
        type: 'uint256[]',
      },
    ],
    name: 'setPlatforms',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyClub',
    outputs: [
      {
        internalType: 'contract ITimeAllyClub',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyManager',
    outputs: [
      {
        internalType: 'contract ITimeAllyManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyPromotionalBucket',
    outputs: [
      {
        internalType: 'contract ITimeAllyPromotionalBucket',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalNrtReleased',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
    inputs: [],
    name: 'validatorManager',
    outputs: [
      {
        internalType: 'contract IValidatorManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526001805460ff60a01b1916600160a01b1790556b02a575fef6999c3a1300000060025534801561003357600080fd5b50600061003e61008d565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610091565b3390565b611f16806100a06000396000f3fe6080604052600436106102a05760003560e01c8063722d2b3e1161016e578063b5955eed116100cb578063eae22a151161007f578063f456795111610064578063f456795114610898578063fcc3e822146108ad578063fe55bde9146108db576102a0565b8063eae22a151461073e578063f2fde38b14610865576102a0565b8063c25c56e0116100b0578063c25c56e0146106ff578063d0c5c58514610714578063dccc1b0814610729576102a0565b8063b5955eed146106c1578063bf8c3144146106ea576102a0565b806388cbfff3116101225780638da5cb5b116101075780638da5cb5b1461066457806398b1a44d14610679578063a7017b52146106ac576102a0565b806388cbfff3146106325780638c0577e81461063a576102a0565b80637ecc2b56116101535780637ecc2b56146106005780638129fc1c1461061557806385150cc71461061d576102a0565b8063722d2b3e146105d6578063783028a9146105eb576102a0565b8063208b38041161021c57806349032635116101d05780635bd22c98116101b55780635bd22c981461056d57806367b48b18146105975780636a14920a146105ac576102a0565b8063490326351461054e57806351b199fb14610558576102a0565b806323060e741161020157806323060e74146104f457806325a424541461050957806327855b131461051e576102a0565b8063208b38041461043157806320edad4714610446576102a0565b806318160ddd116102735780631d849b30116102585780631d849b301461036f5780631f70693c146103995780631fbe552e146103cc576102a0565b806318160ddd146103455780631b33f3af1461035a576102a0565b8063031b3075146102a55780630d541ecb146102cc5780630df5202f146102ff57806314eb29df14610330575b600080fd5b3480156102b157600080fd5b506102ba6108f0565b60408051918252519081900360200190f35b3480156102d857600080fd5b506102ba600480360360208110156102ef57600080fd5b50356001600160a01b03166108f6565b34801561030b57600080fd5b50610314610946565b604080516001600160a01b039092168252519081900360200190f35b34801561033c57600080fd5b506102ba610976565b34801561035157600080fd5b506102ba61097c565b34801561036657600080fd5b506102ba610998565b34801561037b57600080fd5b506103146004803603602081101561039257600080fd5b503561099e565b3480156103a557600080fd5b506102ba600480360360208110156103bc57600080fd5b50356001600160a01b03166109f1565b3480156103d857600080fd5b506103e1610a8d565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561041d578181015183820152602001610405565b505050509050019250505060405180910390f35b34801561043d57600080fd5b50610314610ae5565b34801561045257600080fd5b5061045b610b10565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561049f578181015183820152602001610487565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156104de5781810151838201526020016104c6565b5050505090500194505050505060405180910390f35b34801561050057600080fd5b506102ba610bc3565b34801561051557600080fd5b506103e1610bc9565b34801561052a57600080fd5b50610533610c1f565b6040805165ffffffffffff9092168252519081900360200190f35b610556610c26565b005b34801561056457600080fd5b50610556610c85565b34801561057957600080fd5b506102ba6004803603602081101561059057600080fd5b5035610d77565b3480156105a357600080fd5b50610314610d98565b3480156105b857600080fd5b50610314600480360360208110156105cf57600080fd5b5035610da7565b3480156105e257600080fd5b50610314610e0c565b3480156105f757600080fd5b50610314610e37565b34801561060c57600080fd5b506102ba610e4f565b610556610e78565b34801561062957600080fd5b506102ba61106b565b610556611071565b34801561064657600080fd5b506102ba6004803603602081101561065d57600080fd5b50356110cf565b34801561067057600080fd5b506103146110de565b34801561068557600080fd5b506105566004803603602081101561069c57600080fd5b50356001600160a01b03166110ed565b3480156106b857600080fd5b5061031461115a565b3480156106cd57600080fd5b506106d6611185565b604080519115158252519081900360200190f35b3480156106f657600080fd5b50610314611195565b34801561070b57600080fd5b506105566111c0565b34801561072057600080fd5b506102ba611766565b34801561073557600080fd5b5061031461179c565b6105566004803603604081101561075457600080fd5b81019060208101813564010000000081111561076f57600080fd5b82018360208201111561078157600080fd5b803590602001918460208302840111640100000000831117156107a357600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156107f357600080fd5b82018360208201111561080557600080fd5b8035906020019184602083028401116401000000008311171561082757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506117c7945050505050565b34801561087157600080fd5b506105566004803603602081101561088857600080fd5b50356001600160a01b031661193e565b3480156108a457600080fd5b506103146119b1565b3480156108b957600080fd5b506108c26119dc565b6040805163ffffffff9092168252519081900360200190f35b3480156108e757600080fd5b506103146119e8565b60035481565b600080610902836109f1565b9050806109405760405162461bcd60e51b815260040180806020018281038252602a815260200180611dcd602a913960400191505060405180910390fd5b92915050565b60006109717f4e52545f4d414e4147455200000000000000000000000000000000000000000061099e565b905090565b60065481565b600354600090610971906b02f0bbfed91c74b24e000000611a13565b60025481565b6000806109aa83610da7565b90506001600160a01b0381166109405760405162461bcd60e51b8152600401808060200182810382526026815260200180611ebb6026913960400191505060405180910390fd5b600154604080517f1f70693c0000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b158015610a5b57600080fd5b505afa158015610a6f573d6000803e3d6000fd5b505050506040513d6020811015610a8557600080fd5b505192915050565b60606008805480602002602001604051908101604052809291908181526020018280548015610adb57602002820191906000526020600020905b815481526020019060010190808311610ac7575b5050505050905090565b60006109717f444159535741505045525300000000000000000000000000000000000000000061099e565b6060806008600981805480602002602001604051908101604052809291908181526020018280548015610b6257602002820191906000526020600020905b815481526020019060010190808311610b4e575b5050505050915080805480602002602001604051908101604052809291908181526020018280548015610bb457602002820191906000526020600020905b815481526020019060010190808311610ba0575b50505050509050915091509091565b60055481565b60606009805480602002602001604051908101604052809291908181526020018280548015610adb5760200282019190600052602060002090815481526020019060010190808311610ac7575050505050905090565b6228207081565b3415610c8357600654610c399034611a13565b60065560045460408051348152336020820152815163ffffffff909316927f4555001c485e4695ddb7771b3b89e67516e695a29dce69534deb57b65d7b2205929181900390910190a25b565b600154600160a01b900460ff16610ce3576040805162461bcd60e51b815260206004820152601e60248201527f41646d696e4d6f64653a2041444d494e5f4d4f44455f494e4143544956450000604482015290519081900360640190fd5b610ceb611a74565b6000546001600160a01b03908116911614610d4d576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff169055565b600060088281548110610d8657fe5b90600052602060002001549050919050565b6001546001600160a01b031690565b600154604080517f6a14920a0000000000000000000000000000000000000000000000000000000081526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b158015610a5b57600080fd5b60006109717f54494d45414c4c595f4d414e414745520000000000000000000000000000000061099e565b73bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb81565b600061097173bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb31610e7261097c565b90611a78565b600154760100000000000000000000000000000000000000000000900460ff1680610ea65750610ea6611aba565b80610ecd57506001547501000000000000000000000000000000000000000000900460ff16155b610f085760405162461bcd60e51b815260040180806020018281038252602e815260200180611e1e602e913960400191505060405180910390fd5b600154760100000000000000000000000000000000000000000000900460ff16158015610fad57600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff909116760100000000000000000000000000000000000000000000171675010000000000000000000000000000000000000000001790555b610fb5611ac0565b610fbd611ac9565b600254610fd5576b02a575fef6999c3a130000006002555b346b1a769bf5a2001a44be00000014611035576040805162461bcd60e51b815260206004820152601960248201527f4e52544d3a20494e56414c49445f4e52545f4c4f434b494e4700000000000000604482015290519081900360640190fd5b42600555801561106857600180547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff1690555b50565b60075481565b3415610c83576007546110849034611a13565b60075560045460408051348152336020820152815163ffffffff909316927f4281668f7e7a24a92e0d4c014bf60a82b40b1617fe809e61594c19586c53d3c4929181900390910190a2565b600060098281548110610d8657fe5b6000546001600160a01b031690565b336110f66110de565b6001600160a01b031614611151576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b61106881611b0a565b60006109717f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b4554000000000061099e565b600154600160a01b900460ff1690565b60006109717f52414e444f4d4e4553535f4d414e41474552000000000000000000000000000061099e565b6111c8611185565b611230576228207065ffffffffffff1660055442031015611230576040805162461bcd60e51b815260206004820152601860248201527f4e52544d3a204d4f4e54485f4e4f545f46494e49534845440000000000000000604482015290519081900360640190fd5b600061125460065461124e600c600254611b4490919063ffffffff16565b90611a13565b90506000611260611766565b60006006556007549091506112759082611a78565b6007556004805463ffffffff808216600101167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009091161790556112b7611185565b156112c557426005556112d1565b60058054622820700190555b600454600c63ffffffff91821606166113095761130560646112ff605a600254611b8690919063ffffffff16565b90611b44565b6002555b80156113eb5760405160009073bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9083908381818185875af1925050503d8060008114611365576040519150601f19603f3d011682016040523d82523d6000602084013e61136a565b606091505b50509050806113aa5760405162461bcd60e51b8152600401808060200182810382526024815260200180611e6d6024913960400191505060405180910390fd5b60045460408051848152905163ffffffff909216917faf453473a5639f1e93d2c496acfee95b3d60896c66c896681fe2bc0a8525e1ee9181900360200190a2505b6003546113f89083611a13565b60035560045460408051848152336020820152815163ffffffff909316927f438f6aadab4ac7879113b16e0ce726c9c44bb3adf7604549e34396e4bf89db2c929181900390910190a260005b6008548110156117615760006114806103e86112ff6009858154811061146657fe5b906000526020600020015487611b8690919063ffffffff16565b9050804710156114c15760405162461bcd60e51b8152600401808060200182810382526027815260200180611df76027913960400191505060405180910390fd5b60006114e3600884815481106114d357fe5b9060005260206000200154610da7565b9050600883815481106114f257fe5b60009182526020918290200154600454604080516001600160a01b03861681529384018690528051929363ffffffff909216927f214cab2dbc96fa111a6aed8c98f719a2943b7aa5251616ace8a6416782ea506c9281900390910190a36004546040805163ffffffff90921660248084019190915281518084039091018152604490920181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fed86108f00000000000000000000000000000000000000000000000000000000178152905182516000936001600160a01b03861693879391928291908083835b6020831061161a57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016115dd565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461167c576040519150601f19603f3d011682016040523d82523d6000602084013e611681565b606091505b50509050806008858154811061169357fe5b90600052602060002001546040516020018080611e91602a9139602a01828152602001915050604051602081830303815290604052906117515760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117165781810151838201526020016116fe565b50505050905090810190601f1680156117435780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5050600190920191506114449050565b505050565b60008061178160646112ff600361177b61097c565b90611b86565b9050806007541161179457600754611796565b805b91505090565b60006109717f54494d45414c4c595f434c55420000000000000000000000000000000000000061099e565b6117cf611a74565b6000546001600160a01b03908116911614611831576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b8051825114611887576040805162461bcd60e51b815260206004820152601460248201527f4e52544d3a20494e56414c49445f56414c554553000000000000000000000000604482015290519081900360640190fd5b6000805b82518110156118b9578281815181106118a057fe5b602002602001015182019150808060010191505061188b565b506103e8811115611911576040805162461bcd60e51b815260206004820152601860248201527f4e52544d3a204e52545f53484152455f4f564552464c4f570000000000000000604482015290519081900360640190fd5b8251611924906008906020860190611d6c565b508151611938906009906020850190611d6c565b50505050565b611946611a74565b6000546001600160a01b039081169116146119a8576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b61106881611bdf565b60006109717f505245504149445f45530000000000000000000000000000000000000000000061099e565b60045463ffffffff1681565b60006109717f56414c494441544f525f4d414e4147455200000000000000000000000000000061099e565b600082820183811015611a6d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6000611a6d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611cad565b303b1590565b610c8333611bdf565b600154600160a01b900460ff16610c8357600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b179055565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000611a6d83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611d07565b600082611b9557506000610940565b82820282848281611ba257fe5b0414611a6d5760405162461bcd60e51b8152600401808060200182810382526021815260200180611e4c6021913960400191505060405180910390fd5b6001600160a01b038116611c3a576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60008184841115611cff5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156117165781810151838201526020016116fe565b505050900390565b60008183611d565760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156117165781810151838201526020016116fe565b506000838581611d6257fe5b0495945050505050565b828054828255906000526020600020908101928215611da7579160200282015b82811115611da7578251825591602001919060010190611d8c565b50611db3929150611db7565b5090565b5b80821115611db35760008155600101611db856fe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544e52544d3a204e4f545f454e4f5547485f42414c414e43455f544f5f52454c454153455f4e5254496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77464d5f45534e3a204255524e5f4e41544956455f5452414e534645525f4641494c494e474e52544d3a20504c4154464f524d5f726563656976654e72745f43414c4c5f4641494c494e475f4f4e5f52656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a264697066735822122065b9be31ff908fbc25057c2bf178c371ca8068e3d290a6e54da021d3377592ab64736f6c63430007040033';
