/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SurveyDapp } from "./SurveyDapp";

export class SurveyDappFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SurveyDapp> {
    return super.deploy(overrides || {}) as Promise<SurveyDapp>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SurveyDapp {
    return super.attach(address) as SurveyDapp;
  }
  connect(signer: Signer): SurveyDappFactory {
    return super.connect(signer) as SurveyDappFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SurveyDapp {
    return new Contract(address, _abi, signerOrProvider) as SurveyDapp;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "Auth1",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "NewSurvey",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint16[]",
        name: "answers",
        type: "uint16[]",
      },
    ],
    name: "SentSurvey",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "Funds",
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
        name: "",
        type: "address",
      },
    ],
    name: "Incentives",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accessUser",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_surveyTitle",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_ispublic",
        type: "bool",
      },
    ],
    name: "addSurvey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_survey",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
    ],
    name: "addUsers",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "announceIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_survey",
        type: "bytes32",
      },
    ],
    name: "collectFunds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "dayswappers",
    outputs: [
      {
        internalType: "contract IDayswappers",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kycDapp",
    outputs: [
      {
        internalType: "contract IKycDapp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nrtManager",
    outputs: [
      {
        internalType: "contract INRTManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prepaidEs",
    outputs: [
      {
        internalType: "contract IPrepaidEs",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomnessManager",
    outputs: [
      {
        internalType: "contract RandomnessManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddressStrict",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsername",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsernameStrict",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_survey",
        type: "bytes32",
      },
      {
        internalType: "uint16[]",
        name: "_feedback",
        type: "uint16[]",
      },
    ],
    name: "sendSurvey",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_kycDapp",
        type: "address",
      },
    ],
    name: "setKycDapp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "surveys",
    outputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "surveyTitle",
        type: "string",
      },
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isPublic",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyClub",
    outputs: [
      {
        internalType: "contract ITimeAllyClub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyManager",
    outputs: [
      {
        internalType: "contract ITimeAllyManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyPromotionalBucket",
    outputs: [
      {
        internalType: "contract ITimeAllyPromotionalBucket",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "validatorManager",
    outputs: [
      {
        internalType: "contract IValidatorManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61007c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600280546001600160a01b03191633179055610080565b3390565b6124c58061008f6000396000f3fe6080604052600436106101265760003560e01c80630d541ecb1461012b5780630df5202f146101615780631d849b30146101835780631f70693c146101a3578063208b3804146101c35780632de1e88c146101d8578063392e7c90146101ed57806341e288f21461020d57806367b48b181461023a5780636a14920a1461024f578063722d2b3e1461026f5780638da5cb5b14610284578063961577431461029957806398b1a44d146102b9578063a7017b52146102d9578063a98f6f2e146102ee578063ae1a567a1461031f578063bf8c314414610332578063dccc1b0814610347578063e53b76551461035c578063ee70e8b41461036f578063f2fde38b14610382578063f4213a9b146103a2578063f4567951146103c2578063fe55bde9146103d7575b600080fd5b34801561013757600080fd5b5061014b610146366004611c76565b6103ec565b6040516101589190611fec565b60405180910390f35b34801561016d57600080fd5b5061017661043c565b6040516101589190611f5a565b34801561018f57600080fd5b5061017661019e366004611cca565b61045a565b3480156101af57600080fd5b5061014b6101be366004611c76565b6104ad565b3480156101cf57600080fd5b50610176610530565b6101eb6101e6366004611cca565b610549565b005b3480156101f957600080fd5b5061014b610208366004611cca565b610607565b34801561021957600080fd5b5061022d610228366004611ce2565b610619565b6040516101589190612361565b34801561024657600080fd5b50610176610639565b34801561025b57600080fd5b5061017661026a366004611cca565b610648565b34801561027b57600080fd5b50610176610694565b34801561029057600080fd5b506101766106b2565b3480156102a557600080fd5b506101eb6102b4366004611cca565b6106c1565b3480156102c557600080fd5b506101eb6102d4366004611c76565b6106f4565b3480156102e557600080fd5b50610176610752565b3480156102fa57600080fd5b5061030e610309366004611cca565b61077b565b604051610158959493929190611ff5565b6101eb61032d366004611d11565b6108db565b34801561033e57600080fd5b50610176610b7a565b34801561035357600080fd5b50610176610b9a565b6101eb61036a366004611dba565b610bb5565b61014b61037d366004611e54565b611231565b34801561038e57600080fd5b506101eb61039d366004611c76565b61180c565b3480156103ae57600080fd5b5061014b6103bd366004611c76565b61186d565b3480156103ce57600080fd5b5061017661187f565b3480156103e357600080fd5b50610176611897565b6000806103f8836104ad565b9050806104365760405162461bcd60e51b815260040180806020018281038252602a8152602001806123ff602a913960400191505060405180910390fd5b92915050565b60006104556a27292a2fa6a0a720a3a2a960a91b61045a565b905090565b60008061046683610648565b90506001600160a01b0381166104365760405162461bcd60e51b815260040180806020018281038252602681526020018061246a6026913960400191505060405180910390fd5b600154604080516307dc1a4f60e21b81526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b1580156104fe57600080fd5b505afa158015610512573d6000803e3d6000fd5b505050506040513d602081101561052857600080fd5b505192915050565b60006104556a444159535741505045525360a81b61045a565b6000818152600460205260409020600201546001600160a01b0316331461058b5760405162461bcd60e51b8152600401610582906122ed565b60405180910390fd5b60008181526004602052604090206003015442106105bb5760405162461bcd60e51b815260040161058290612212565b600081815260066020526040808220549051339282156108fc02929190818181858888f193505050501580156105f5573d6000803e3d6000fd5b50600090815260066020526040812055565b60066020526000908152604090205481565b600360209081526000928352604080842090915290825290205460ff1681565b6001546001600160a01b031690565b6001546040805163350a490560e11b81526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b1580156104fe57600080fd5b60006104556f2a24a6a2a0a6262cafa6a0a720a3a2a960811b61045a565b6000546001600160a01b031690565b60638111156106e25760405162461bcd60e51b815260040161058290612243565b33600090815260056020526040902055565b336106fd6106b2565b6001600160a01b031614610746576040805162461bcd60e51b81526020600482018190526024820152600080516020612429833981519152604482015290519081900360640190fd5b61074f816118b6565b50565b60006104557a151253515053131657d41493d353d51253d3905317d09550d2d155602a1b61045a565b60046020908152600091825260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084529092918391908301828280156108125780601f106107e757610100808354040283529160200191610812565b820191906000526020600020905b8154815290600101906020018083116107f557829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108b05780601f10610885576101008083540402835291602001916108b0565b820191906000526020600020905b81548152906001019060200180831161089357829003601f168201915b505050506002830154600384015460049094015492936001600160a01b039091169290915060ff1685565b6108e3610639565b6001600160a01b03166360f140d8336040518263ffffffff1660e01b815260040161090e9190611f5a565b60206040518083038186803b15801561092657600080fd5b505afa15801561093a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095e9190611cae565b61097a5760405162461bcd60e51b815260040161058290612181565b6000670de0b6b3a7640000905060008183510234146109ab5760405162461bcd60e51b8152600401610582906120cc565b8251600085815260066020526040812080549092019091555b8351811015610ad2576003600086815260200190815260200160002060008583815181106109ee57fe5b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff1660011415610a2857600182019150610aca565b6000858152600360205260408120855160019290879085908110610a4857fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff021916908360ff160217905550336001600160a01b03167ffa2d831485a5c6421f94ebfcb87a085fd3fea5efaf121980a3ae2f3c8e4852c686604051610ac19190611fec565b60405180910390a25b6001016109c4565b50604051339083830280156108fc02916000818181858888f19350505050158015610b01573d6000803e3d6000fd5b50610b0a610530565b6001600160a01b0316639048f53a33610b25348686026118d8565b6040518363ffffffff1660e01b8152600401610b42929190611f8b565b600060405180830381600087803b158015610b5c57600080fd5b505af1158015610b70573d6000803e3d6000fd5b5050505050505050565b6000610455712920a72227a6a722a9a9afa6a0a720a3a2a960711b61045a565b60006104556c2a24a6a2a0a6262cafa1a62aa160991b61045a565b600082815260046020526040902060030154421115610be65760405162461bcd60e51b815260040161058290612275565b600082815260036020908152604080832033845290915290205460ff1660021415610c235760405162461bcd60e51b815260040161058290612043565b6000828152600460208190526040909120015460ff16610cbe57600082815260036020908152604080832033845290915290205460ff16600114610c795760405162461bcd60e51b81526004016105829061208a565b600082815260066020526040808220805460001901905551339190670de0b6b3a76400009082818181858883f19350505050158015610cbc573d6000803e3d6000fd5b505b817f414899a449c4db15c6513ea81a7d6b69df9324dd4cea4304837bca63cc26980282604051610cee9190611fa4565b60405180910390a234670de0b6b3a764000014610d1d5760405162461bcd60e51b8152600401610582906120cc565b60008281526003602090815260408083203384528252808320805460ff191660029081179091558584526004835281842001546001600160a01b03168084526005909252822054909190610d8290606490610d7c903490600101611921565b9061197a565b9050610d8c610530565b6001600160a01b0316623e8ec4610da96064610d7c856014611921565b600087815260046020818152604080842060020154815160608101835260328082529381019590955284820192909252516001600160e01b031960e087901b168152610e01936001600160a01b039092169201611f6e565b6000604051808303818588803b158015610e1a57600080fd5b505af1158015610e2e573d6000803e3d6000fd5b5050505050610e3b610530565b6001600160a01b0316637ef40705610e596064610d7c856014611921565b600087815260046020818152604080842060020154815160608101835260328082529381019590955284820192909252516001600160e01b031960e087901b168152610eb1936001600160a01b039092169201611f6e565b6000604051808303818588803b158015610eca57600080fd5b505af1158015610ede573d6000803e3d6000fd5b5050505050610eeb610530565b6001600160a01b0316623e8ec4610f086064610d7c856014611921565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152610f43913391600401611f6e565b6000604051808303818588803b158015610f5c57600080fd5b505af1158015610f70573d6000803e3d6000fd5b5050505050610f7d610530565b6001600160a01b0316637ef40705610f9b6064610d7c856014611921565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152610fd6913391600401611f6e565b6000604051808303818588803b158015610fef57600080fd5b505af1158015611003573d6000803e3d6000fd5b505050505061101061043c565b6001600160a01b03166388cbfff361102e6064610d7c85600a611921565b6040518263ffffffff1660e01b81526004016000604051808303818588803b15801561105957600080fd5b505af115801561106d573d6000803e3d6000fd5b5050505050600061107c610639565b6001600160a01b0316636a14920a6040518163ffffffff1660e01b81526004016110a5906121fa565b60206040518083038186803b1580156110bd57600080fd5b505afa1580156110d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f59190611c92565b905060006001600160a01b0382166111136064610d7c86600a611921565b60405161111f90611f57565b60006040518083038185875af1925050503d806000811461115c576040519150601f19603f3d011682016040523d82523d6000602084013e611161565b606091505b50509050806111825760405162461bcd60e51b81526004016105829061213b565b6001600160a01b0384166108fc61119934866118d8565b6040518115909202916000818181858888f193505050501580156111c1573d6000803e3d6000fd5b506111ca610530565b6001600160a01b0316639048f53a33346040518363ffffffff1660e01b81526004016111f7929190611f8b565b600060405180830381600087803b15801561121157600080fd5b505af1158015611225573d6000803e3d6000fd5b50505050505050505050565b600061123b610639565b6001600160a01b03166360f140d8336040518263ffffffff1660e01b81526004016112669190611f5a565b60206040518083038186803b15801561127e57600080fd5b505afa158015611292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b69190611cae565b6112d25760405162461bcd60e51b815260040161058290612181565b8115611305573468056bc75e2d63100000146113005760405162461bcd60e51b8152600401610582906121b7565b61132c565b34678ac7230489e800001461132c5760405162461bcd60e51b8152600401610582906120f8565b60008533604051602001611341929190611f25565b60408051601f19818403018152918152815160209283012060008181526004909352912060030154909150156113895760405162461bcd60e51b81526004016105829061229f565b600081815260046020908152604090912087516113a892890190611b6f565b50600081815260046020908152604090912086516113ce92600190920191880190611b6f565b5060008181526004602081905260409182902060038101879055600281018054336001600160a01b031990911681179091559101805460ff191686151517905590517f8a6ad1fa68e6f05d231455555f70a62f85733291e60723060a5883120f8e184f9061143d908490611fec565b60405180910390a23360009081526005602052604081205461146a90606490610d7c903490600101611921565b9050611474610530565b6001600160a01b0316623e8ec46114916064610d7c856028611921565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b1681526114cc913391600401611f6e565b6000604051808303818588803b1580156114e557600080fd5b505af11580156114f9573d6000803e3d6000fd5b5050505050611506610530565b6001600160a01b0316637ef407056115246064610d7c856028611921565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b16815261155f913391600401611f6e565b6000604051808303818588803b15801561157857600080fd5b505af115801561158c573d6000803e3d6000fd5b505050505061159961043c565b6001600160a01b03166388cbfff36115b76064610d7c85600a611921565b6040518263ffffffff1660e01b81526004016000604051808303818588803b1580156115e257600080fd5b505af11580156115f6573d6000803e3d6000fd5b50505050506000611605610639565b6001600160a01b0316636a14920a6040518163ffffffff1660e01b815260040161162e906121fa565b60206040518083038186803b15801561164657600080fd5b505afa15801561165a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167e9190611c92565b905060006001600160a01b03821661169c6064610d7c86600a611921565b6040516116a890611f57565b60006040518083038185875af1925050503d80600081146116e5576040519150601f19603f3d011682016040523d82523d6000602084013e6116ea565b606091505b505090508061170b5760405162461bcd60e51b81526004016105829061213b565b60006117156106b2565b6001600160a01b031661172834866118d8565b60405161173490611f57565b60006040518083038185875af1925050503d8060008114611771576040519150601f19603f3d011682016040523d82523d6000602084013e611776565b606091505b50509050806117975760405162461bcd60e51b81526004016105829061231d565b61179f610530565b6001600160a01b0316639048f53a33346040518363ffffffff1660e01b81526004016117cc929190611f8b565b600060405180830381600087803b1580156117e657600080fd5b505af11580156117fa573d6000803e3d6000fd5b50969c9b505050505050505050505050565b6118146119b9565b6000546001600160a01b03908116911614611864576040805162461bcd60e51b81526020600482018190526024820152600080516020612429833981519152604482015290519081900360640190fd5b61074f816119bd565b60056020526000908152604090205481565b600061045569505245504149445f455360b01b61045a565b6000610455702b20a624a220aa27a92fa6a0a720a3a2a960791b61045a565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600061191a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611a73565b9392505050565b60008261193057506000610436565b8282028284828161193d57fe5b041461191a5760405162461bcd60e51b81526004018080602001828103825260218152602001806124496021913960400191505060405180910390fd5b600061191a83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250611b0a565b3390565b6001600160a01b038116611a18576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008184841115611b025760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ac7578181015183820152602001611aaf565b50505050905090810190601f168015611af45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183611b595760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611ac7578181015183820152602001611aaf565b506000838581611b6557fe5b0495945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611ba55760008555611beb565b82601f10611bbe57805160ff1916838001178555611beb565b82800160010185558215611beb579182015b82811115611beb578251825591602001919060010190611bd0565b50611bf7929150611bfb565b5090565b5b80821115611bf75760008155600101611bfc565b600082601f830112611c20578081fd5b81356001600160401b03811115611c3357fe5b611c46601f8201601f191660200161236f565b9150808252836020828501011115611c5d57600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215611c87578081fd5b813561191a816123db565b600060208284031215611ca3578081fd5b815161191a816123db565b600060208284031215611cbf578081fd5b815161191a816123f0565b600060208284031215611cdb578081fd5b5035919050565b60008060408385031215611cf4578081fd5b823591506020830135611d06816123db565b809150509250929050565b60008060408385031215611d23578182fd5b823591506020808401356001600160401b03811115611d40578283fd5b8401601f81018613611d50578283fd5b8035611d63611d5e82612392565b61236f565b81815283810190838501858402850186018a1015611d7f578687fd5b8694505b83851015611daa578035611d96816123db565b835260019490940193918501918501611d83565b5080955050505050509250929050565b60008060408385031215611dcc578182fd5b823591506020808401356001600160401b03811115611de9578283fd5b8401601f81018613611df9578283fd5b8035611e07611d5e82612392565b81815283810190838501858402850186018a1015611e23578687fd5b8694505b83851015611daa57803561ffff81168114611e40578788fd5b835260019490940193918501918501611e27565b60008060008060808587031215611e69578182fd5b84356001600160401b0380821115611e7f578384fd5b611e8b88838901611c10565b95506020870135915080821115611ea0578384fd5b50611ead87828801611c10565b935050604085013591506060850135611ec5816123f0565b939692955090935050565b8060005b6003811015611ef3578151845260209384019390910190600101611ed4565b50505050565b60008151808452611f118160208601602086016123af565b601f01601f19169290920160200192915050565b60008351611f378184602088016123af565b60609390931b6001600160601b0319169190920190815260140192915050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b03831681526080810161191a6020830184611ed0565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b81811015611fe057835161ffff1683529284019291840191600101611fc0565b50909695505050505050565b90815260200190565b600060a0825261200860a0830188611ef9565b828103602084015261201a8188611ef9565b6001600160a01b0396909616604084015250506060810192909252151560809091015292915050565b60208082526027908201527f596f75206861766520616c726561647920766f7465642020666f7220746869736040820152662073757276657960c81b606082015260800190565b60208082526022908201527f596f752068617665206e6f2061636365737320666f7220746869732073757276604082015261657960f01b606082015260800190565b602080825260129082015271496e73756666696369656e742046756e647360701b604082015260600190565b60208082526023908201527f5072697661746520537572766579206e65656420313020455320746f2063726560408201526261746560e81b606082015260800190565b60208082526026908201527f4365727469444170703a20434841524954595f5452414e534645525f49535f4660408201526541494c494e4760d01b606082015260800190565b6020808252601c908201527b14dd5c9d995e51185c1c0e8812d650d7d393d517d054141493d5915160221b604082015260600190565b60208082526023908201527f5075626c696320537572766579206e6565642031303020455320746f2063726560408201526261746560e81b606082015260800190565b6b0434841524954595f444150560a41b815260200190565b60208082526017908201527614dd5c9d995e481a185cdb89dd08195b991959081e595d604a1b604082015260600190565b602080825260189082015277496e63656e74697665732063616e2774206265203130302560401b604082015260600190565b60208082526010908201526f14dd5c9d995e481a185cc8115b99195960821b604082015260600190565b6020808252602e908201527f796f75206861766520616c7265616479206275696c642061205375727665792060408201526d776974682074686973206e616d6560901b606082015260800190565b602080825260169082015275165bdd48185c99481b9bdd08105d5d1a1bdc9a5e995960521b604082015260600190565b60208082526024908201527f4275696c645375727665793a2050524f4649545f5452414e534645525f4641496040820152634c494e4760e01b606082015260800190565b60ff91909116815260200190565b6040518181016001600160401b038111828210171561238a57fe5b604052919050565b60006001600160401b038211156123a557fe5b5060209081020190565b60005b838110156123ca5781810151838201526020016123b2565b83811115611ef35750506000910152565b6001600160a01b038116811461074f57600080fd5b801515811461074f57600080fdfe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7752656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a2646970667358221220b76ca01dce9f97c0ad3dc28847bacb2f00766b67347f710458ed97e66647363264736f6c63430007050033";
