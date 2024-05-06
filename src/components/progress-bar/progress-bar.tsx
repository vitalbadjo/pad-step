import styles from "./progress-bar.module.scss"

type IProgressBarProps = {
  currentLevel: string
  nextLevel: string
  currentProgress: string
  pointsNeededForNextLevel: string
}
export const ProgressBar: React.FC<IProgressBarProps> = ({
  currentLevel,
  currentProgress,
  nextLevel,
  pointsNeededForNextLevel
}) => {
  const progress = Math.ceil(+currentProgress * 100 / +pointsNeededForNextLevel)
  return <div className={styles.progress_bar}>
    <div className={styles.star_counter}>
      <span>{currentLevel}</span>
    </div>
    <div className={styles.progress}>
      <div className={styles.text_row}>
        <span>{currentProgress}/{pointsNeededForNextLevel} EXP</span>
        <span>{nextLevel} LVL</span>
      </div>
      <div className={styles.graph_row}>
        <span className={styles.c1} />
        <span className={styles.c2} />
        <span className={styles.c3} />
        <span className={styles.c4} />
        <div
          className={styles.filler}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  </div>
}