import { useWeb3React } from "@web3-react/core"
import { useModal } from "../../hooks/useModal"
import { WalletConnectModal } from "../modals/wallet-connect/wallet-connect-modal"
import styles from "./button-connect.module.scss"
import { useEffect, useRef, useState } from "react"
import { APP_CHAIN_ID, getAddChainParameters } from "../../services/web3/chains"
import { truncateAddress } from "../../utils/helpers"
import { WalletConnect } from "@web3-react/walletconnect-v2"
import useBalance from "../../hooks/useBalance"
import { WalletInfoCard } from "./wallet-info-card"
import { BUTTON_PARTS } from "../../media/images/button"
import { useClickOutside } from "../../hooks/useClickOutside"
import { WalletsNameType } from "../modals/wallet-connect/wallet-connect-card"
import { metamaskConnector, walletConnectV2 } from "../../services/web3/connectors"

export const ConnectButton: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isWrongNetwork, setIsWrongNetwork] = useState(false)
  const { connector, chainId, account, isActive, provider } = useWeb3React()
  const balance = useBalance(provider, account)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen, toggle] = useModal()

  useClickOutside(dropdownRef, () => setIsDropdownOpen(false))

  //TODO: listen to uri available for WalletConnect
  useEffect(() => {
    if (connector.connectEagerly) {
      try {
        console.log("Tying to connect eagerly")
        connector.connectEagerly()
      } catch (error) {
        console.log("Can't connect eagerly", error)
        connector.resetState()
      }
    }
  }, [])

  useEffect(() => {
    // close modal if connected
    if (isActive) {
      setIsOpen(false)
    }
    if (isActive && chainId && chainId !== APP_CHAIN_ID) {
      setIsWrongNetwork(true)
      // logic for walletconnect provider if networks doesn't match
      if (connector instanceof WalletConnect) {
        connector.provider?.disconnect()
        connector.resetState()
        connector.deactivate()
      }
    } else {
      setIsWrongNetwork(false)
    }


  }, [chainId, isActive])

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev)

  const onDisconnectHandler = () => {
    setIsDropdownOpen(false)
    connector.deactivate && connector.deactivate()
    connector.resetState()
  }

  const onConnect = (type: WalletsNameType) => {
    switch (type) {
      case "metamask":
        if (metamaskConnector) {
          metamaskConnector.activate(getAddChainParameters(APP_CHAIN_ID)).then(e => {
            console.log("Connected metamask!!!")
          }).catch(e => {
            metamaskConnector?.resetState()
            console.log("Metamask from app modal error:", e)
          })
        }
        break;
      case "wconnect":
        walletConnectV2.resetState()
        walletConnectV2.deactivate().then(() => {
          walletConnectV2.activate().then(e => {
            console.log("Shold be connected to walletconnect", e)
          }).catch(e => {
            console.log("Wallectconnect connection error: ", e)
            walletConnectV2.resetState()
          })
        }).catch(e => {
          console.log("WalletConnect deactivating error: ", e)
        })
        break;
      default:
        break;
    }
  }

  const renderButton = () => {
    if (isActive && chainId && chainId !== APP_CHAIN_ID) {
      // if wrong network
      return <button
        className={styles.content}
        onClick={() => {
          connector.activate(APP_CHAIN_ID)
        }}
      >
        Wrong network
      </button>
    } else if (isActive && account) {
      // if connected
      return <button
        className={`${styles.content} ${styles.connected}`}
        onClick={toggleDropdown}
      >
        <span>{truncateAddress(account)}</span>
        {BUTTON_PARTS.dropdown_arrow}
      </button>
    } else {
      return <button
        className={styles.content}
        onClick={toggle}
      >
        <span>Connect Wallet</span>
      </button>
    }
  }

  return <div className={`${styles.btn_connect} ${isWrongNetwork ? styles.warning : ""}`} ref={dropdownRef}>
    <WalletConnectModal isOpen={isOpen} onCloseButtonClick={toggle} onConnect={onConnect} />
    {renderButton()}
    {isDropdownOpen && <WalletInfoCard
      balance={balance?.toString() || ""}
      address={account ? truncateAddress(account) : ""}
      onDisconnect={onDisconnectHandler}
    />}
  </div>
}