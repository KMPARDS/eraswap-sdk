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
    // tsgap: string;
    betdeex: string;
    timeswappers: string;
    buzcafe: string;
    buildSurvey: string;
    rentingDappManager: string;
  };
}

// for developing with yarn start or npm run start
const development: Addresses = {
  ETH: {
    network: 'rinkeby',
    esContract: '0x843458c9E5d184DB5e52A9963C40174c911BB6B2',
    plasmaManager: '0x38b0A265689D1D418BA7CA162c9969827642b234',
    fundsManager: '0x5f3e262b92E2E644162C2144775C971a0Fd1B5E2',
  },
  ESN: {
    reversePlasma: '0x3bEb087e33eC0B830325991A32E3F8bb16A51317',
    fundsManager: '0xc4cfb05119Ea1F59fb5a8F949288801491D00110',
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
    timeswappers: 'TIMESWAPPERS',
    buzcafe: 'BUZCAFE',
    buildSurvey: 'BUILD_SURVEY',
    rentingDappManager: 'RENTING_DAPP',
  },
};

// for building with yarn build or npm run build
const production: Addresses = {
  ETH: {
    network: 'homestead',
    esContract: '0x206949aD387Ce7F35B71e9db3cB576D103123D27',
    plasmaManager: '0x1c5b6e1ff599D1aCEd9cfCE73efab34f0688977e',
    fundsManager: '0xBf2B93384948f57f6927C72baDEA5e0dd0182Aa5',
  },
  ESN: {
    reversePlasma: '0x3bEb087e33eC0B830325991A32E3F8bb16A51317',
    fundsManager: '0xc4cfb05119Ea1F59fb5a8F949288801491D00110',
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
    timeswappers: 'TIMESWAPPERS',
    buzcafe: 'BUZCAFE',
    buildSurvey: 'BUILD_SURVEY',
    rentingDappManager: 'RENTING_DAPP',
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
    timeswappers: 'TIMESWAPPERS',
    buzcafe: 'BUZCAFE',
    buildSurvey: 'BUILD_SURVEY',
    rentingDappManager: 'RENTING_DAPP',
  },
};

export const addresses = { development, production, test };
