import { useState } from "react";
import { PixelBorderedContainer } from "../pixel-bordered-container/pixel-bordered-container";
import styles from "./field-with-copy.module.scss"
import { ICONS } from "../../media/images/icons/icons";

type IFieldWithCopyActionProps = {
  text: string
  className?: string
}

export const FieldWithCopyAction: React.FC<IFieldWithCopyActionProps> = ({ text, className }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false)
      }, 1000)
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return <PixelBorderedContainer borderWidth="medium" className={className}>
    <div className={styles.container}>
      {copySuccess &&
        <PixelBorderedContainer borderWidth="medium" className={styles.popover}>
          <span className={styles.popover_text}>Copied!</span>
        </PixelBorderedContainer>
      }
      <span className={styles.text}>{text}</span>
      <button className={styles.btn} onClick={copyToClipBoard}>{ICONS.copy}</button>
    </div>
  </PixelBorderedContainer>
}