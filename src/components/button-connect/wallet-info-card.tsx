import { LegacyRef, PropsWithRef, useEffect, useRef } from "react"
import { PixelBorderedContainer } from "../pixel-bordered-container/pixel-bordered-container"
import { ButtonDisconnect } from "./button-disconnect"
import styles from "./wallet-info-card.module.scss"

type IWalletInfoCardProps = {
  balance: string
  address: string
  onDisconnect: () => void
}

export const WalletInfoCard: React.FC<IWalletInfoCardProps> = ({ balance, address, onDisconnect }) => {
  return <PixelBorderedContainer className={styles.container}>
    <div className={styles.body}>
      <div className={styles.row}>
        <span className={styles.label}>Balance</span>
        <span className={styles.value}>{balance} <span>USDT</span></span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Address</span>
        <span className={styles.value}>{address}</span>
      </div>
      <ButtonDisconnect onClick={onDisconnect} />
    </div>
  </PixelBorderedContainer>
}