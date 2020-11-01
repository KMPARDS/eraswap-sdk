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
    kycdapp: '0xC4336494606203e3907539d5b462A5cb7853B3C6',
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
