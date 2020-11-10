export interface Addresses {
  ETH: {
    network: string;
    esContract: string;
    plasmaManager: string;
    fundsManager: string;
  };
  ESN: {
    reversePlasma: string;
    fundsManager: string;
    proxyAdmin: string;
    nrtManager: string;
    timeallyManager: string;
    timeallyStakingTarget: string;
    validatorSet: string;
    validatorManager: string;
    randomnessManager: string;
    blockRewardManager: string;
    prepaidEs: string;
    dayswappers: string;
    kycdapp: string;
    timeallyclub: string;
    timeAllyPromotionalBucket: string;
    betdeex: string;
    betImplementation: string;
    buildSurvey: string;
    rentingDappManager: string;
    tsgap: string;
    petLiquid: string;
    petPrepaid: string;
  };
}

// for developing with yarn start or npm run start
const development: Addresses = {
  ETH: {
    network: 'rinkeby',
    esContract: '0x2C94a51e1ffc2a43c3d88B645c3de007eeaccB75',
    plasmaManager: '0x7c43dcA5752c59e12B79b605E7C6866E4bCAa4bE',
    fundsManager: '0x7BdE3BfbFb22B6237C2145EbF3bACaF55Cd88000',
  },
  ESN: {
    reversePlasma: '0x3bEb087e33eC0B830325991A32E3F8bb16A51317',
    fundsManager: '0xc4cfb05119Ea1F59fb5a8F949288801491D00110',
    proxyAdmin: '0x89309551Fb7AbaaB85867ACa60404CDA649751d4',
    nrtManager: '0xA3C6cf908EeeebF61da6e0e885687Cab557b5e3F',
    timeallyManager: '0x44F70d80642998F6ABc424ceAf1E706a479De8Ce',
    timeallyStakingTarget: '0x2AA786Cd8544c50136e5097D5E19F6AE10E02543',
    validatorSet: '0x22E0940C1AE5D31B9efBaf7D674F7D62895FBde8',
    validatorManager: '0x6D57FaDF31e62E28Ab059f3dCd565df055428c57',
    randomnessManager: '0xC140E0cb11401A07fb92Aea5dD232ad1cFEa2739',
    blockRewardManager: '0xa5AAaA6b5E852433aCCE2f0c64595b286d8A4977',
    prepaidEs: '0x10082d2730BA943a8D9a8D5e890b6bA062e8d1e9',
    dayswappers: '0x2B7e1FF3D2D14c5b80907a61D70DA04Ae6DFEAEb',
    kycdapp: '0x56d38C60793b64aeab5E62630a2b690C695779da',
    timeallyclub: '0x25c315E657385467433005D051FB90BdA789ac56',
    timeAllyPromotionalBucket: '0xb9b7BEAA9276F8C79996a4B70C3BB4E01C886e6f',
    betdeex: '0x99660616e8922a1887E1683A6836f2cf916F4B2a',
    betImplementation: '0x238FA401068d4b4Ba186Da30e84023AA1a763d17',
    buildSurvey: '0x72e8c7B091b00d4be459357AC2c065079ADCa09B',
    rentingDappManager: '0x44B299D15Fa883216CD7c0e5a77901aEBB670c46',
    tsgap: '0x73861A6C82C9342E30744353216D1f597642AD71',
    petLiquid: '0xf6cA67cC19435A64a8D9911cF39Dc39dB63Ae1c8',
    petPrepaid: '0x427D4946eE290A49Ac215D1fC64e465C457D99De',
  },
};

// for building with yarn build or npm run build
const production: Addresses = {
  ETH: {
    network: 'homestead',
    esContract: '0x72108a8CC3254813C6BE2F1b77be53E185abFdD9',
    plasmaManager: '0x952Aa6073386f4a23F72cC1012138a6aaFD02d81',
    fundsManager: '0x933A43a0F6368B38212A725029314E74F8379EEa',
  },
  ESN: {
    reversePlasma: '0x952Aa6073386f4a23F72cC1012138a6aaFD02d81',
    fundsManager: '0x933A43a0F6368B38212A725029314E74F8379EEa',
    proxyAdmin: '0xc3b32965b799E5f96d54A312ad3afA5E57044B20',
    nrtManager: '0x44EeD9580aEa47405F98173377296E75765074C8',
    timeallyManager: '0xF19Ea5D90cD8b9480f6B46880b020fe3eADd392F',
    timeallyStakingTarget: '0xDA7c99e1c5b8f6B6983502953540e621b092a69e',
    validatorSet: '0x8433035CBb293b0e460E99ad6B42274FdcE7099F',
    validatorManager: '0xd014d4149A57b9126F67c03F93FBC078810972Ef',
    randomnessManager: '0xB2D158fcc47320F580E96374c34394750EC07558',
    blockRewardManager: '0x69601642417b3fE47E5f8Cc893696a410e8F7448',
    prepaidEs: '0x6325e975a09E047720f6D8cF25bD2577fB706250',
    dayswappers: '0x38CB3aeF3aAD8fB063C03F5EFD067C992EEFfDEC',
    kycdapp: '0xe1347dAAffbd3102F6CD67edAEA9dfc8A8C4FaDB',
    timeallyclub: '0x8422da7f9bd28868796545D0cd9c15483bD6d214',
    timeAllyPromotionalBucket: '0xE30be1E70e944b800f4933A11EC90C8E44a42594',
    betdeex: '0xEcEB558CB9B905674544AB393414Aa2E2D2004c7',
    betImplementation: '0x0bD7e7a62Da3fE867E6dDae56801D79785E4FC0B',
    buildSurvey: '0x87D673fCc902EF19241633674f6617fcd5B95F15',
    rentingDappManager: '0xE79be7ba19d3fA67736A27EC0d0D30D6cfC146F7',
    tsgap: '0x3334690604871703d27DC0c25FE2f5A0A91551D1',
    petLiquid: '0x4125e6Ef70AbA4f4Ed7c4eB3d53a08DC53a9316D',
    petPrepaid: '0xEAFB2b46B523B5199311d46D160f1174BFfe9A9E',
  },
};

// this is added due to react's process.env.NODE_ENV type
// because of following you don't get any error while doing
// es.addresses[process.env.NODE_ENV]
// other than that, following has ho such use
const test: Addresses = {
  ETH: {
    network: 'ganache',
    esContract: '',
    plasmaManager: '',
    fundsManager: '',
  },
  ESN: {
    reversePlasma: '',
    fundsManager: '',
    proxyAdmin: '',
    nrtManager: 'NRT_MANAGER',
    timeallyManager: 'TIMEALLY_MANAGER',
    timeallyStakingTarget: 'TIMEALLY_STAKING_TARGET',
    validatorSet: 'VALIDATOR_SET',
    validatorManager: 'VALIDATOR_MANAGER',
    randomnessManager: 'RANDOMNESS_MANAGER',
    blockRewardManager: 'BLOCK_REWARD',
    prepaidEs: 'PREPAID_ES',
    dayswappers: 'DAYSWAPPERS',
    kycdapp: '',
    timeallyclub: 'TIMEALLY_CLUB',
    timeAllyPromotionalBucket: 'TIMEALLY_PROMOTIONAL_BUCKET',
    betdeex: 'BETDEEX',
    betImplementation: 'BET_IMPLEMENTATION',
    buildSurvey: 'BUILD_SURVEY',
    rentingDappManager: 'RENTING_DAPP',
    tsgap: 'TSGAP',
    petLiquid: 'PET_LIQUID',
    petPrepaid: 'PET_PREPAID',
  },
};

export const addresses = { development, production, test };
