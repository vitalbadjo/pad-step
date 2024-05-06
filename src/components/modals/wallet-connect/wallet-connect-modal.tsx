import { createPortal } from "react-dom";
import { PixelBorderedContainer } from "../../pixel-bordered-container/pixel-bordered-container";
import styles from "./wallet-connect-modal.module.scss";
import { WalletConnectCard, WalletsNameType } from "./wallet-connect-card";
import connectors from "../../../services/web3/connectors";
import { getWalletName } from "../../../services/web3/utils";
import { ICONS } from "../../../media/images/icons/icons";

type IWalletConnectModalProps = {
  isOpen: boolean
  onCloseButtonClick: () => void
  backdropClose?: boolean
  onConnect: (type: WalletsNameType) => void
}

export const WalletConnectModal: React.FC<IWalletConnectModalProps> = (
  { isOpen, onCloseButtonClick, backdropClose = true, onConnect }
) => {

  if (!isOpen) {
    return null;
  }

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.id === "wcmodal" && backdropClose) {
      onCloseButtonClick()
    }
  }

  return createPortal(
    <div id="wcmodal" className={styles.modal_wrapper} onClick={onBackdropClick}>
      <PixelBorderedContainer onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h4>Connect Wallet</h4>
            <PixelBorderedContainer borderWidth="small">
              <button onClick={onCloseButtonClick}>{ICONS.btnClose}</button>
            </PixelBorderedContainer>
          </div>
          <div className={styles.divider} />
          <div className={styles.body}>
            <span className={styles.description}>You can use 1 wallet at the same time</span>
            <div className={styles.wallet_cards}>
              {connectors.map(connector => {
                const walletName = getWalletName(connector[0])
                if (walletName === "Unknown") {
                  return null
                }
                return <WalletConnectCard key={walletName} type={walletName} connectAction={onConnect} />
              })}
            </div>
          </div>
        </div>
      </PixelBorderedContainer>

    </div>
    , document.body
  );
};
