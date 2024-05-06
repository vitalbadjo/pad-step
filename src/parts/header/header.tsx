import { useLocation } from "react-router-dom"
import { ConnectButton } from "../../components/button-connect/button-connect"
import { ProgressBar } from "../../components/progress-bar/progress-bar"
import styles from "./header.module.scss"
import { APP_ROUTES } from "../../router/app-routes"

type IHeaderProps = {
  toggleMobileSidebar: () => void
}

export const Header: React.FC<IHeaderProps> = ({ toggleMobileSidebar }) => {
  const { pathname } = useLocation()

  return <header className={styles.header}>
    {pathname === APP_ROUTES.referrals.path ? <ProgressBar
      currentLevel="24"
      currentProgress="250"
      nextLevel="25"
      pointsNeededForNextLevel="900"
    /> : <div />}
    <button className={styles.sidebar_toggler} onClick={toggleMobileSidebar} />
    <ConnectButton />
  </header>
}