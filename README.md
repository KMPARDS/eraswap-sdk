# Era Swap SDK

This kit is intended to make it convenient to access to addresses of smart contracts related to Era Swap and common utilities.

```
$ yarn add eraswap-sdk

or

$ npm i eraswap-sdk
```

## `addresses` bucket: Accessing Contract Addresses

```ts
import { addresses } from 'eraswap-sdk';

// Get the testing address
const timeallyAddressTesting = addresses['development'].ESN.timeallyManager;

// Get the mainnet address
const timeallyAddressMainnet = addresses['production'].ESN.timeallyManager;
```

## `typechain` bucket: Accessing Contract Typings

```ts
import { typechain, addresses } from 'eraswap-sdk';

const timeallyInstance = typechain.ESN.TimeAllyManagerFactory.connect(
  addresses['development'].ESN.timeallyManager
);
```

## `Customprovider`

Custom provider is a modification of `ethers.js`'s `JsonRpcProvider` with Kyc Dapp integrated and better errors

```ts
import { CustomProvider } from 'eraswap-sdk';

// for mainnet
const providerESN = new CustomProvider('mainnet');

// for testnet
const providerESN = new CustomProvider('testnet');
```

## `esutils` bucket: General Utils

### Parsing Ethers.js errors.

Errors in v5 have gotten ugly lately. See [ethers-io/ethers.js#871](https://github.com/ethers-io/ethers.js/issues/871). This

```ts
import { esutils } from 'eraswap-sdk';

try {
  await contract.methodThatThrowError();
} catch (error) {
  const readableError = esutils.parseEthersJsError(error); // string
  setDisplayMessage(`Error: ${readableError}`);
}
```

### Getting Era Swap Explorer url

```ts
import { esutils } from 'eraswap-sdk';

const url = esutils.EraswapInfo.getAddressHref(
  '0xC8e1F3B9a0CdFceF9fFd2343B943989A22517b26'
);
// returns: https://eraswap.info/address/0xC8e1F3B9a0CdFceF9fFd2343B943989A22517b26

const url = esutils.EraswapInfo.getTxHref(
  '0x200706e0608bec9ad2993b6659df036062e8fbbdc9cc61bd52c61ab106a48f44'
);
// returns: https://eraswap.info/txn/0x200706e0608bec9ad2993b6659df036062e8fbbdc9cc61bd52c61ab106a48f44
```

# License

[MIT](https://github.com/KMPARDS/eraswap-sdk/blob/HEAD/LICENSE)
