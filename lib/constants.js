'use strict';


module.exports = {
  ZCLASSIC_GENESIS_HASH: {
    livenet: '0007104ccda289427919efc39dc9e4d499804b7bebc22df55f8b834301260602',
    regtest: '0575f78ee8dc057deee78ef691876e3be29833aaee5e189bb0459c087451305a',
    testnet: '03e1c4bb705c871bf9bfda3e74b7f8f86bff267993c215a89d5795e3708e5e1f', // z-classic/zclassic testnet
    testnet2: '064edf69715fd91f5f0e8b17138f27ef4a9b736e398cbed0083a9e0c06bc47c8' // mrwh0/zclassic testnet
  },
  DB_PREFIX: new Buffer('ffff', 'hex')
};
