import { MetaMask } from '@web3-react/metamask'
import type { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect-v2'

export function getWalletName(connector: Connector) {
  if (connector instanceof MetaMask) return 'metamask'
  if (connector instanceof WalletConnect) return 'wconnect'
  return 'Unknown'
}