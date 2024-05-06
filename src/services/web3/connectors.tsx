import { WalletConnect } from "@web3-react/walletconnect-v2"
import { MetaMask } from "@web3-react/metamask"
import { Web3ReactHooks, initializeConnector } from '@web3-react/core'
import { APP_CHAIN_ID, getWalletConnectRpcMap } from "./chains"
import { Web3ReactStore } from "@web3-react/types"

let metamaskConnectorPrepare: [MetaMask, Web3ReactHooks, Web3ReactStore] | null = null

if (window.ethereum) {
  metamaskConnectorPrepare = initializeConnector<MetaMask>((actions) => new MetaMask({
    actions,
    options: {
      mustBeMetaMask: true
    },
    onError: (e => {
      console.log("Metamask connector: ", e)
    })
  }))
}

const [walletConnectV2, walletConnectHooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        projectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID || "",
        chains: [APP_CHAIN_ID],
        showQrModal: true,
        rpcMap: getWalletConnectRpcMap(APP_CHAIN_ID)
      },
      timeout: 20000,
      onError: (error) => {
        console.log("WalletConnect connector error:", error)
      }
    })
)
let connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = []

if (metamaskConnectorPrepare) {
  const [metaMask, metaMaskHooks] = metamaskConnectorPrepare
  connectors.push([metaMask, metaMaskHooks])
}
connectors.push([walletConnectV2, walletConnectHooks])

const metamaskConnector = metamaskConnectorPrepare ? metamaskConnectorPrepare[0] : null

export {
  walletConnectV2,
  walletConnectHooks,
  metamaskConnector
}
export default connectors



