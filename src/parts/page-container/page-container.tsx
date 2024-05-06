import style from "./page-container.module.scss"
import { Sidebar } from "../sidebar/sidebar"
import { PropsWithChildren, useState } from "react"
import { Header } from "../header/header"


export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const toggleMobileSidebar = () => setIsMobileSidebarOpen(prev => !prev)
  const closeSidebar = () => setIsMobileSidebarOpen(false)

  return <div className={style.page_container}>
    <Sidebar isMobileSidebarOpen={isMobileSidebarOpen} onClose={closeSidebar} />
    <Header toggleMobileSidebar={toggleMobileSidebar} />
    <div className={style.body}>{children}</div>
  </div>
}