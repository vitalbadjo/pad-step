import { FieldWithCopyAction } from "../../components/field-with-copy/field-with-copy"
import { PixelBorderedContainer } from "../../components/pixel-bordered-container/pixel-bordered-container"
import { StatisticsCard } from "../../components/stats-card/stats-card"
import styles from "./referrals.module.scss"

export const PageReferrals: React.FC = () => {
  return <div className={styles.referral_page}>
    <PixelBorderedContainer className={styles.content} backdropFilter={true}>
      <h3>Invite friends and earn more points</h3>
      <span>Your Code</span>
      <FieldWithCopyAction text="XHAT00SBIT7J" className="field-b-margin-m" />
      <span>referral link</span>
      <FieldWithCopyAction text="https://www.pixelverse.com/link#343434" className="field-b-margin-l" />
      <p>Describe the conditions of the referral system. The referral receives a percentage of his friend’s point earnings. Describe the conditions of the referral system. The referral receives a percentage of his friend’s point earningsreferral system. The referral receives a percentage of his friend’s point earningsreferral system. The referral receives a percentage of his friend’s point earnings</p>
    </PixelBorderedContainer>
    <StatisticsCard title="You have" score="13" units="Referrals" icon="iconReferral" />
    <StatisticsCard title="You Earned" score="135" units="Points" icon="coins" />
  </div>
}