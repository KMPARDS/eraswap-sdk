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
    timeswappers: string;
    buzcafe: string;
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
    esContract: '0x237027559f6C07A20EBa97C837b60b9815840a42',
    plasmaManager: '0xaaF33029B457A773C14DFdab4eDc4039E80fC5BF',
    fundsManager: '0x10A23bbfAfc7cc3b94fa268D965F8B78543eCFE0',
  },
  ESN: {
    reversePlasma: '0x3bEb087e33eC0B830325991A32E3F8bb16A51317',
    fundsManager: '0xc4cfb05119Ea1F59fb5a8F949288801491D00110',
    proxyAdmin: '0x89309551Fb7AbaaB85867ACa60404CDA649751d4',
    nrtManager: '0x8418249278d74D46014683A8029Fd6fbC88482a1',
    timeallyManager: '0x2AA786Cd8544c50136e5097D5E19F6AE10E02543',
    timeallyStakingTarget: '0x22E0940C1AE5D31B9efBaf7D674F7D62895FBde8',
    validatorSet: '0xF9FCb8678dB15A5507A5f5414D68aBB2f4568E27',
    validatorManager: '0xaDbA96fDA88B0Cbcf11d668FF6f7A29d062eD050',
    randomnessManager: '0xCf535dB3c1EDbFbBdadbDe725119906BE20fb362',
    blockRewardManager: '0x7DD7EDB18C271959156967bc7651D685E8C1B225',
    prepaidEs: '0x56578Ff4c37Fd4e02C8d75FF9982A22C095dD3c5',
    dayswappers: '0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF',
    kycdapp: '0x8b2C9732137bAD7e629139B1fDa9E6094368f6B4',
    timeallyclub: '0x9e805A912edf6Ce7A57790f2797835Ff6220E5b0',
    timeAllyPromotionalBucket: '0x99660616e8922a1887E1683A6836f2cf916F4B2a',
    betdeex: '0x238FA401068d4b4Ba186Da30e84023AA1a763d17',
    betImplementation: '0x3aE4071a068De6f00a34ACE0Aec43CAc8cb87077',
    timeswappers: 'TIMESWAPPERS',
    buzcafe: 'BUZCAFE',
    buildSurvey: '0x99c691E9592255673AB5CB3a2497B25ef77206d3',
    rentingDappManager: '0x73861A6C82C9342E30744353216D1f597642AD71',
    tsgap: '0xf6cA67cC19435A64a8D9911cF39Dc39dB63Ae1c8',
    petLiquid: '0x427D4946eE290A49Ac215D1fC64e465C457D99De',
    petPrepaid: '0x527778e73eC371979F85826C50EF8758d60366F0',
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
    timeswappers: 'TIMESWAPPERS',
    buzcafe: 'BUZCAFE',
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
    timeswappers: 'TIMESWAPPERS',
    buzcafe: 'BUZCAFE',
    buildSurvey: 'BUILD_SURVEY',
    rentingDappManager: 'RENTING_DAPP',
    tsgap: 'TSGAP',
    petLiquid: 'PET_LIQUID',
    petPrepaid: 'PET_PREPAID',
  },
};

export const addresses = { development, production, test };
