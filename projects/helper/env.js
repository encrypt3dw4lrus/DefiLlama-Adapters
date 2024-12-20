
const BOOL_KEYS = [
  'HISTORICAL',
  'LLAMA_DEBUG_MODE',
]

const DEFAULTS = {
  EVMOS_MULTICALL_CHUNK_SIZE: "3", // evmos reduced gas limit, this is a workaround to make multicall work
  STARKNET_RPC: 'https://starknet-mainnet.public.blastapi.io',
  COVALENT_KEY: 'ckey_72cd3b74b4a048c9bc671f7c5a6',
  // SOLANA_RPC: 'https://mainnet.helius-rpc.com/?api-key=0109717a-77b4-498a-bc3c-a0b31aa1b3bf',
  SOLANA_RPC: "https://api.mainnet-beta.solana.com",
  ECLIPSE_RPC: 'https://eclipse.lgns.net',
  APTOS_RPC: 'https://fullnode.mainnet.aptoslabs.com',
  SUI_RPC: 'https://fullnode.mainnet.sui.io/',
  SUI_GRAPH_RPC: 'https://sui-mainnet.mystenlabs.com/graphql',
  FLOW_RPC: 'https://rest-mainnet.onflow.org',
  MULTIVERSX_RPC: 'https://api.multiversx.com',
  ANKR_API_KEY: '79258ce7f7ee046decc3b5292a24eb4bf7c910d7e39b691384c7ce0cfb839a01',
  RENEC_RPC: "https://api-mainnet-beta.renec.foundation:8899/",
  RPC_PROXY_URL: "https://rpc-proxy.llama.fi",
  UNIT0_RPC: "https://rpc.unit0.dev",
  RBN_RPC: "https://governors.mainnet.redbelly.network",
  CORN_RPC: "https://rpc.ankr.com/corn_maizenet",
  QL1_RPC: "https://rpc.qom.one",
  ACE_RPC_MULTICALL: "0x025A2B4fCE1E0bD736D5cebe6C8a52229795376B",
  ZILLIQA_RPC_MULTICALL: "0x38899efb93d5106d3adb86662c557f237f6ecf57",
  VINU_RPC_MULTICALL: "0x63CE2062281fb85fE5BC407799A455C21f35F355",
}

const ENV_KEYS = [
  ...BOOL_KEYS,
  ...Object.keys(DEFAULTS),
  'GETBLOCK_KEY',
  'LOFTY_API',
  'SOLANA_RPC_CLIENT',
  'OLYMPUS_GRAPH_API_KEY',
  'SUMMER_HISTORY_ENDPOINT',
  'SUMMER_AJNA_ENDPOINT',
  'SUMMER_CONFIRMED_VAULTS_ENDPOINT',
  'ETHEREUM_TOKENS_ENDPOINT',
  'FBTC_ACCESS_TOKEN',
  'UNISAT_AUTH'
]

Object.keys(DEFAULTS).forEach(i => {
  if (!process.env[i]) process.env[i] = DEFAULTS[i] // this is done to set the chain RPC details in @defillama/sdk
})


function getEnv(key) {
  if (!ENV_KEYS.includes(key)) throw new Error(`Unknown env key: ${key}`)
  const value = process.env[key] ?? DEFAULTS[key]
  return BOOL_KEYS.includes(key) ? !!value : value
}

module.exports = {
  ENV_KEYS,
  getEnv,
}
