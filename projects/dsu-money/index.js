const { sumTokensExport } = require('../helper/unwrapLPs')

module.exports = {
  ethereum: {
    tvl: sumTokensExport({ tokensAndOwners: [
      ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0xaef566ca7e84d1e736f999765a804687f39d9094'],
      ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0xD05aCe63789cCb35B9cE71d01e4d632a0486Da4B'],
      ['0x39aa39c021dfbae8fac545936693ac917d5e7563', '0xD05aCe63789cCb35B9cE71d01e4d632a0486Da4B'],
    ]})
  }
}