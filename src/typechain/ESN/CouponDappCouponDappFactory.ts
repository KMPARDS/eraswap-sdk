/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CouponDappCouponDapp } from "./CouponDappCouponDapp";

export class CouponDappCouponDappFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CouponDappCouponDapp> {
    return super.deploy(overrides || {}) as Promise<CouponDappCouponDapp>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CouponDappCouponDapp {
    return super.attach(address) as CouponDappCouponDapp;
  }
  connect(signer: Signer): CouponDappCouponDappFactory {
    return super.connect(signer) as CouponDappCouponDappFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CouponDappCouponDapp {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CouponDappCouponDapp;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "User",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "Amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_TimeStamp",
        type: "uint256",
      },
    ],
    name: "Created",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "User",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "Amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_TimeStamp",
        type: "uint256",
      },
    ],
    name: "Redeemed",
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
    name: "coupons",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum CouponDapp.CouponStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "creator",
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
        name: "_couponHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "newCoupon",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_couponBytes",
        type: "bytes",
      },
    ],
    name: "redeemCoupon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061084f806100206000396000f3fe6080604052600436106100345760003560e01c80632c8c56921461003957806357f8dfd11461004e578063742b20cd1461006e575b600080fd5b61004c610047366004610561565b6100a6565b005b34801561005a57600080fd5b5061004c6100693660046104c1565b61020a565b34801561007a57600080fd5b5061008e6100893660046104a9565b610316565b60405161009d939291906107db565b60405180910390f35b816100cc5760405162461bcd60e51b81526004016100c390610701565b60405180910390fd5b600160008381526020819052604090206001015460ff1660028111156100ee57fe5b141561010c5760405162461bcd60e51b81526004016100c390610654565b6000811161012c5760405162461bcd60e51b81526004016100c3906107a8565b34811461014b5760405162461bcd60e51b81526004016100c390610602565b6040805160608101909152818152602081016001815233602091820152600084815280825260409020825181559082015160018083018054909160ff199091169083600281111561019857fe5b0217905550604091820151600190910180546001600160a01b0390921661010002610100600160a81b03199092169190911790555133907f95b18bbe5373dcbe675d3ab2ae6e3888392575c51b8b8c9c3cbbdb431af19299906101fe903490429061080b565b60405180910390a25050565b600061021f8261021985610342565b90610372565b60008481526020819052604090206001810154919250906001600160a01b0380841661010090920416146102655760405162461bcd60e51b81526004016100c39061062e565b60018082015460ff16600281111561027957fe5b146102965760405162461bcd60e51b81526004016100c39061077a565b60018101805460ff19166002179055805460405133916108fc811502916000818181858888f193505050501580156102d2573d6000803e3d6000fd5b50805460405133917ff3a670cd3af7d64b488926880889d08a8585a138ff455227af6737339a1ec262916103089190429061080b565b60405180910390a250505050565b6000602081905290815260409020805460019091015460ff81169061010090046001600160a01b031683565b6000816040516020016103559190610582565b604051602081830303815290604052805190602001209050919050565b600081516041146103955760405162461bcd60e51b81526004016100c390610688565b60208201516040830151606084015160001a6103b3868285856103bd565b9695505050505050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b038211156103f55760405162461bcd60e51b81526004016100c3906106bf565b8360ff16601b148061040a57508360ff16601c145b6104265760405162461bcd60e51b81526004016100c390610738565b60006001868686866040516000815260200160405260405161044b94939291906105b2565b6020604051602081039080840390855afa15801561046d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166104a05760405162461bcd60e51b81526004016100c3906105d0565b95945050505050565b6000602082840312156104ba578081fd5b5035919050565b600080604083850312156104d3578081fd5b823591506020808401356001600160401b03808211156104f1578384fd5b818601915086601f830112610504578384fd5b81358181111561051057fe5b604051601f8201601f191681018501838111828210171561052d57fe5b6040528181528382018501891015610543578586fd5b81858501868301378585838301015280955050505050509250929050565b60008060408385031215610573578182fd5b50508035926020909101359150565b7b0ca2ba3432b932bab69029b4b3b732b21026b2b9b9b0b3b29d05199960211b8152601c810191909152603c0190565b93845260ff9290921660208401526040830152606082015260800190565b60208082526018908201527745434453413a20696e76616c6964207369676e617475726560401b604082015260600190565b602080825260129082015271496e73756666696369656e745f46756e647360701b604082015260600190565b6020808252600c908201526b494e56414c49445f434f444560a01b604082015260600190565b6020808252601a9082015279636f75706f6e20616c72656164792065786973742c726574727960301b604082015260600190565b6020808252601f908201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252601f908201527f636f75706f6e486173682073686f756c64206e6f74207a65726f206861736800604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b602080825260149082015273636f75706f6e206973206e6f742061637469766560601b604082015260600190565b602080825260199082015278616d6f756e742073686f756c64206265206e6f6e207a65726f60381b604082015260600190565b83815260608101600384106107ec57fe5b60208201939093526001600160a01b0391909116604090910152919050565b91825260208201526040019056fea26469706673582212203d0ec30247c7230d53c072ac1e498f4875954db7ab9002302665ca72ce9f748164736f6c63430007050033";