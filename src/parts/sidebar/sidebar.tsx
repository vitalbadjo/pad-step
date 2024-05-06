import { SIDEBAR_IMAGES } from "../../media/images/sidebar"
import logo from "../../media/images/logo.svg"
import telegram from "../../media/images/icons/telegram.svg"
import discord from "../../media/images/icons/discord.svg"
import xLogo from "../../media/images/icons/x.svg"
import styles from "./sidebar.module.scss"
import { APP_ROUTES } from "../../router/app-routes"
import { MenuItem } from "./menu-item"
import { useLocation } from "react-router-dom"
import { useRef } from "react"
import { useClickOutside } from "../../hooks/useClickOutside"

type ISidebarProps = {
  isMobileSidebarOpen: boolean
  onClose: () => void
}

export const Sidebar: React.FC<ISidebarProps> = ({ isMobileSidebarOpen, onClose }) => {
  const { pathname } = useLocation()
  const sidebarRef = useRef(null)
  useClickOutside(sidebarRef, onClose)

  return <div className={`${styles.sidebar_placeholder} ${isMobileSidebarOpen ? styles.sidebar_visible : ""}`}>
    <aside className={`${styles.sidebar_container}`} ref={sidebarRef}>
      <div className={styles.decoration}>
        {SIDEBAR_IMAGES.topLeft}
        <div className={styles.top} />
        {SIDEBAR_IMAGES.topRight}
      </div>
      <div className={styles.content}>
        <img className={styles.header} src={logo} alt="application-logo" />
        <div className={styles.body}>
          <nav>
            {Object.values(APP_ROUTES).map(route =>
              <MenuItem key={route.path} route={route} selected={pathname === route.path} />
            )}
          </nav>
          <div className={styles.addons}>Game Dock</div>
        </div>
        <div className={styles.footer}>
          <a href="/" target="_blank"><img src={telegram} alt="application-logo" /></a>
          <a href="/" target="_blank"><img src={xLogo} alt="application-logo" /></a>
          <a href="/" target="_blank"><img src={discord} alt="application-logo" /></a>
        </div>
      </div>
      <div className={styles.decoration}>
        {SIDEBAR_IMAGES.bottomLeft}
        <div className={styles.bottom} />
        {SIDEBAR_IMAGES.bottomRight}
      </div>
    </aside>
  </div>
}