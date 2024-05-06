import { PixelBorderedContainer } from "../pixel-bordered-container/pixel-bordered-container"
import styles from "./stats-card.module.scss"

type IStatisticsCardProps = {
  title: string
  score: string
  units: string
  icon: "coins" | "iconReferral"
}

export const StatisticsCard: React.FC<IStatisticsCardProps> = ({ title, score, units, icon }) => {
  console.log("stats")
  return <PixelBorderedContainer backdropFilter={true}>
    <div className={`${styles.container} ${icon}`}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.icon} />
      </div>
      <div className={styles.footer}>
        <span className={styles.score}>{score}</span>
        <span className={styles.units}>{units}</span>
      </div>
    </div>
  </PixelBorderedContainer>
}