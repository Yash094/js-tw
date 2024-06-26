import type { Chain } from "../src/types";
export default {
  "chain": "Bitlayer",
  "chainId": 200810,
  "explorers": [
    {
      "name": "bitlayer testnet scan",
      "url": "https://testnet.btrscan.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://www.bitlayer.org/faucet"
  ],
  "icon": {
    "url": "ipfs://QmdWZ1frB47fr3tw31xE68C2Vocaw5Ef53LQ5WDNdNnNyG",
    "width": 4500,
    "height": 4500,
    "format": "jpg"
  },
  "infoURL": "https://docs.bitlayer.org/",
  "name": "Bitlayer Testnet",
  "nativeCurrency": {
    "name": "BTC",
    "symbol": "BTC",
    "decimals": 18
  },
  "networkId": 200810,
  "rpc": [
    "https://200810.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet-rpc.bitlayer.org",
    "wss://testnet-ws.bitlayer.org",
    "https://testnet-rpc.bitlayer-rpc.com",
    "wss://testnet-ws.bitlayer-rpc.com",
    "https://rpc.ankr.com/bitlayer_testnet"
  ],
  "shortName": "btrt",
  "slip44": 1,
  "slug": "bitlayer-testnet",
  "testnet": true
} as const satisfies Chain;