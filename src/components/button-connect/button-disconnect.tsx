import { BUTTON_PARTS } from "../../media/images/button"
import styles from "./button-disconnect.module.scss"

type IButtonDisconnectProps = {
  onClick: () => void
}

export const ButtonDisconnect: React.FC<IButtonDisconnectProps> = ({ onClick }) => {
  return <div
    className={styles.button}
    onClick={onClick}
  >
    {/* {BUTTON_PARTS.btn_red_outlined} */}
    <span>Disconnect</span>
  </div>
}