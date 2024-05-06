import { ICONS } from "../../../media/images/icons/icons"
import { PixelBorderedContainer } from "../../pixel-bordered-container/pixel-bordered-container"
import styles from "./wallet-connect-card.module.scss"

export type WalletsNameType = "metamask" | "wconnect"
type IWalletConnectCardProps = {
  type: WalletsNameType
  connectAction: (type: WalletsNameType) => void
}

type WalletsPropsType = Record<WalletsNameType, {
  displayName: string
}>

const wallets: WalletsPropsType = {
  metamask: {
    displayName: "Metamask"
  },
  wconnect: {
    displayName: "Wallet Connect"
  }
}

export const WalletConnectCard: React.FC<IWalletConnectCardProps> = ({ type, connectAction }) => {
  return <PixelBorderedContainer>
    <div className={styles.card_wallet}>
      <div className={styles.logo}>
        {ICONS[type]}
      </div>
      <div className={styles.footer}>
        <span className={styles.wallet_name}>{wallets[type].displayName}</span>
        <button className={styles.btn_action} onClick={() => connectAction(type)}>
          <span>Connect</span>
          {ICONS.arrowLeft}
        </button>
      </div>
    </div>
  </PixelBorderedContainer>
}