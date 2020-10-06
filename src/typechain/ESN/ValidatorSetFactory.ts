/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { ValidatorSet } from './ValidatorSet';

export class ValidatorSetFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _seedValidators: string[],
    _testSystemAddress: string,
    overrides?: Overrides
  ): Promise<ValidatorSet> {
    return super.deploy(_seedValidators, _testSystemAddress, overrides || {}) as Promise<
      ValidatorSet
    >;
  }
  getDeployTransaction(
    _seedValidators: string[],
    _testSystemAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_seedValidators, _testSystemAddress, overrides || {});
  }
  attach(address: string): ValidatorSet {
    return super.attach(address) as ValidatorSet;
  }
  connect(signer: Signer): ValidatorSetFactory {
    return super.connect(signer) as ValidatorSetFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ValidatorSet {
    return new Contract(address, _abi, signerOrProvider) as ValidatorSet;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_seedValidators',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_testSystemAddress',
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
        indexed: true,
        internalType: 'bytes32',
        name: '_parent_hash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: '_new_set',
        type: 'address[]',
      },
    ],
    name: 'InitiateChange',
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
    name: 'BLOCKS_INTERVAL',
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
    name: 'LUCK_TRIES',
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
    name: 'MAX_VALIDATORS',
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
    name: 'PERCENT_UNIQUE',
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
    name: 'SYSTEM_ADDRESS',
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
    name: 'finalizeChange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNextValidators',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getValidators',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initiateChange',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'lastFinalizeChangeBlock',
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
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'pure',
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
        internalType: 'uint256',
        name: '_BLOCKS_INTERVAL',
        type: 'uint256',
      },
    ],
    name: 'setBlocksInterval',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setInitialValues',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'uint256',
        name: '_LUCK_TRIES',
        type: 'uint256',
      },
    ],
    name: 'setLuckTries',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_MAX_VALIDATORS',
        type: 'uint256',
      },
    ],
    name: 'setMaxValidators',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_PERCENT_UNIQUE',
        type: 'uint256',
      },
    ],
    name: 'setPercentUnique',
    outputs: [],
    stateMutability: 'nonpayable',
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
  '0x60806040526005600281905560336003556004805560289055600780546001600160a01b0319166002600160a01b031790553480156200003e57600080fd5b506040516200134c3803806200134c833981810160405260408110156200006457600080fd5b81019080805160405193929190846401000000008211156200008557600080fd5b9083019060208201858111156200009b57600080fd5b8251866020820283011164010000000082111715620000b957600080fd5b82525081516020918201928201910280838360005b83811015620000e8578181015183820152602001620000ce565b5050505091909101604052506020015191506000905062000108620001b2565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350815162000167906008906020850190620001b6565b5081516200017d90600a906020850190620001b6565b506001600160a01b03811615620001aa57600780546001600160a01b0319166001600160a01b0383161790555b505062000241565b3390565b8280548282559060005260206000209081019282156200020e579160200282015b828111156200020e57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620001d7565b506200021c92915062000220565b5090565b5b808211156200021c5780546001600160a01b031916815560010162000221565b6110fb80620002516000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c8063722d2b3e1161010f578063b3273748116100a2578063dccc1b0811610071578063dccc1b081461042d578063f2fde38b14610435578063f45679511461045b578063fe55bde914610463576101f0565b8063b32737481461040d578063b58a637514610415578063b7ab4db51461041d578063bf8c314414610425576101f0565b80639bb2ea5a116100de5780639bb2ea5a146103c3578063a61fc60d146103e0578063a7017b52146103fd578063add7d01e14610405576101f0565b8063722d2b3e14610385578063752862111461038d5780638da5cb5b1461039557806398b1a44d1461039d576101f0565b80634e855fb2116101875780636a14920a116101565780636a14920a1461033b5780636ad6650614610358578063714897df14610375578063715018a61461037d576101f0565b80634e855fb21461031b578063585a80f31461032357806364760fff1461032b57806367b48b1814610333576101f0565b80631f70693c116101c35780631f70693c1461028d578063208b3804146102b35780633434735f146102bb57806340cddab3146102c3576101f0565b8063082eaf7c146101f55780630d541ecb146102145780630df5202f1461024c5780631d849b3014610270575b600080fd5b6102126004803603602081101561020b57600080fd5b503561046b565b005b61023a6004803603602081101561022a57600080fd5b50356001600160a01b03166104d4565b60408051918252519081900360200190f35b610254610524565b604080516001600160a01b039092168252519081900360200190f35b6102546004803603602081101561028657600080fd5b5035610554565b61023a600480360360208110156102a357600080fd5b50356001600160a01b03166105a7565b610254610643565b61025461066e565b6102cb61067d565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156103075781810151838201526020016102ef565b505050509050019250505060405180910390f35b61023a6106df565b61023a6106e5565b61023a6106eb565b6102546106f1565b6102546004803603602081101561035157600080fd5b5035610700565b6102126004803603602081101561036e57600080fd5b5035610765565b61023a6107ce565b6102126107d4565b610254610821565b61021261084c565b6102546108cb565b610212600480360360208110156103b357600080fd5b50356001600160a01b03166108da565b610212600480360360208110156103d957600080fd5b503561094a565b610212600480360360208110156103f657600080fd5b50356109b3565b610254610a1c565b61023a610a47565b610212610a4d565b610212610be3565b6102cb610be5565b610254610c45565b610254610c70565b6102126004803603602081101561044b57600080fd5b50356001600160a01b0316610c9b565b610254610db2565b610254610ddd565b336104746108cb565b6001600160a01b0316146104cf576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600355565b6000806104e0836105a7565b90508061051e5760405162461bcd60e51b815260040180806020018281038252602a815260200180611050602a913960400191505060405180910390fd5b92915050565b600061054f7f4e52545f4d414e41474552000000000000000000000000000000000000000000610554565b905090565b60008061056083610700565b90506001600160a01b03811661051e5760405162461bcd60e51b81526004018080602001828103825260268152602001806110a06026913960400191505060405180910390fd5b600154604080517f1f70693c0000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b15801561061157600080fd5b505afa158015610625573d6000803e3d6000fd5b505050506040513d602081101561063b57600080fd5b505192915050565b600061054f7f4441595357415050455253000000000000000000000000000000000000000000610554565b6007546001600160a01b031681565b606060098054806020026020016040519081016040528092919081815260200182805480156106d557602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116106b7575b5050505050905090565b60045481565b60065481565b60035481565b6001546001600160a01b031690565b600154604080517f6a14920a0000000000000000000000000000000000000000000000000000000081526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b15801561061157600080fd5b3361076e6108cb565b6001600160a01b0316146107c9576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600455565b60025481565b6040805162461bcd60e51b815260206004820152601c60248201527f4552433137333a2052454e4f554e43455f4e4f545f414c4c4f57454400000000604482015290519081900360640190fd5b600061054f7f54494d45414c4c595f4d414e4147455200000000000000000000000000000000610554565b6007546001600160a01b031633146108ab576040805162461bcd60e51b815260206004820152601a60248201527f417552613a204f6e6c792073797374656d2063616e2063616c6c000000000000604482015290519081900360640190fd5b600954156108c557600980546108c391600891610fa0565b505b43600655565b6000546001600160a01b031690565b336108e36108cb565b6001600160a01b03161461093e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61094781610e08565b50565b336109536108cb565b6001600160a01b0316146109ae576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600255565b336109bc6108cb565b6001600160a01b031614610a17576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600555565b600061054f7f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b45540000000000610554565b60055481565b600654610aa1576040805162461bcd60e51b815260206004820152601560248201527f417552613a2043616e6e6f7420696e6974696174650000000000000000000000604482015290519081900360640190fd5b600554600654014311610afb576040805162461bcd60e51b815260206004820152600f60248201527f417572613a20546f6f206561726c790000000000000000000000000000000000604482015290519081900360640190fd5b610b03610e37565b600954610b57576040805162461bcd60e51b815260206004820152601360248201527f417572613a204e6f2056616c696461746f727300000000000000000000000000604482015290519081900360640190fd5b60014303407f55252fa6eee4741b4e24a74a70e9c11fd2c2281df8d6ea13126ff845f7825c89600960405180806020018281038252838181548152602001915080548015610bce57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610bb0575b50509250505060405180910390a26000600655565b565b606060088054806020026020016040519081016040528092919081815260200182805480156106d5576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116106b7575050505050905090565b600061054f7f52414e444f4d4e4553535f4d414e414745520000000000000000000000000000610554565b600061054f7f54494d45414c4c595f434c554200000000000000000000000000000000000000610554565b610ca3610f9c565b6000546001600160a01b03908116911614610d05576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610d4a5760405162461bcd60e51b815260040180806020018281038252602681526020018061107a6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600061054f7f505245504149445f455300000000000000000000000000000000000000000000610554565b600061054f7f56414c494441544f525f4d414e41474552000000000000000000000000000000610554565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b610e4360096000610ff0565b60005b600454600254028110156109475760025460095410610e6457610947565b6000610e6e610ddd565b6001600160a01b031663b50eb04b6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610ea857600080fd5b505af1158015610ebc573d6000803e3d6000fd5b505050506040513d6020811015610ed257600080fd5b505190506000805b600954811015610f3357600280546009549091021180610f1d575060098181548110610f0257fe5b6000918252602090912001546001600160a01b038481169116145b15610f2b5760019150610f33565b600101610eda565b5080610f9257600980546001810182556000919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af01805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790555b5050600101610e46565b3390565b828054828255906000526020600020908101928215610fe05760005260206000209182015b82811115610fe0578254825591600101919060010190610fc5565b50610fec92915061100e565b5090565b5080546000825590600052602060002090810190610947919061103a565b5b80821115610fec57805473ffffffffffffffffffffffffffffffffffffffff1916815560010161100f565b5b80821115610fec576000815560010161103b56fe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737352656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a26469706673582212209b3d9fe3b24914a6fcdf9b296c343bed313caecbee38441d9bdffe448c46b20064736f6c63430007020033';
