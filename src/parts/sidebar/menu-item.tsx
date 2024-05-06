import { Link } from "react-router-dom"
import { AppRouteType } from "../../router/app-routes"
import { SIDEBAR_IMAGES } from "../../media/images/sidebar"
import styles from "./sidebar.module.scss"
import { memo } from "react"

type IMenuItemProps = {
  route: AppRouteType
  selected: boolean
}

export const MenuItem: React.FC<IMenuItemProps> = memo(({ route, selected }) => {
  return <Link
    key={route.path}
    to={route.path}
    className={`${styles.menu_item} ${selected ? styles.selected : ""}`}
  >
    <div className={styles.bgv} />
    <div className={styles.bgh} />
    {SIDEBAR_IMAGES[route.iconName]}
    <span>{route.diasplayName}</span>
  </Link>
})