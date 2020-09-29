# Era Swap SDK

This kit is intended to make it convenient to access to addresses of smart contracts related to Era Swap and common utilities.

```
$ yarn add eraswap-sdk

or

$ npm i eraswap-sdk
```

## `addresses` bucket: Accessing Contract Addresses

```ts
import { es } from 'eraswap-sdk';

// Get the testing address
const timeallyAddressTesting = es.addresses['development'].ESN.timeallyManager;

// Get the mainnet address
const timeallyAddressMainnet = es.addresses['production'].ESN.timeallyManager;
```

You can use a env variable to easily switch between testnet and mainnet deployments.

## `CustomProvider`

Custom provider is a modification of `ethers.js`'s `JsonRpcProvider` with Kyc Dapp integrated and better errors

```ts
import { es } from 'eraswap-sdk';

// for mainnet
const providerESN = new es.CustomProvider('mainnet');

// for testnet
const providerESN = new es.CustomProvider('testnet');

// or (a preferrable way)

import { CustomProvider } from 'eraswap-sdk';

const providerESN = new CustomProvider('testnet');
```

## `typechain` bucket: Accessing Contract Typings

```ts
import { es } from 'eraswap-sdk';

const timeallyInstance = es.typechain.ESN.TimeAllyManagerFactory.connect(
  es.addresses[process.env.NODE_ENV].ESN.timeallyManager,
  providerESN
);

// another (preferrable) way to import

import { PlasmaManagerFactory } from 'eraswap-sdk/dist/typechain/ETH';
import { TimeAllyManagerFactory } from 'eraswap-sdk/dist/typechain/ESN';

const timeallyInstance = TimeAllyManagerFactory.connect(
  es.addresses[process.env.NODE_ENV].ESN.timeallyManager,
  providerESN
);
```

## General Utils

### Parsing Ethers.js errors.

Errors in v5 have gotten ugly lately. See [ethers-io/ethers.js#871](https://github.com/ethers-io/ethers.js/issues/871). This

```ts
import { es } from 'eraswap-sdk';

try {
  await contract.methodThatThrowError();
} catch (error) {
  const readableError = es.utils.parseEthersJsError(error); // string
  setDisplayMessage(`Error: ${readableError}`);
}
```

### Getting Era Swap Explorer url

```ts
import { es } from 'eraswap-sdk';

const url = es.utils.EraswapInfo.getAddressHref(
  '0xC8e1F3B9a0CdFceF9fFd2343B943989A22517b26'
);
// returns: https://eraswap.info/address/0xC8e1F3B9a0CdFceF9fFd2343B943989A22517b26

const url = es.utils.EraswapInfo.getTxHref(
  '0x200706e0608bec9ad2993b6659df036062e8fbbdc9cc61bd52c61ab106a48f44'
);
// returns: https://eraswap.info/txn/0x200706e0608bec9ad2993b6659df036062e8fbbdc9cc61bd52c61ab106a48f44
```

# License

[MIT](https://github.com/KMPARDS/eraswap-sdk/blob/HEAD/LICENSE)
