import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./pixel-bordered-container.module.scss"

type PixelBorderStyleKeys = "large" | "medium" | "small"
type PixelBorderStyleValues = "s" | "m" | "l"
type IPixelBorderedContainerType = {
  borderWidth?: PixelBorderStyleKeys
  backdropFilter?: boolean
} & HTMLAttributes<HTMLDivElement> & PropsWithChildren

//TOTO maybe use ENUM here
const styleDict: Record<PixelBorderStyleKeys, PixelBorderStyleValues> = {
  small: "s",
  medium: "m",
  large: "l"
}

export const PixelBorderedContainer:
  React.FC<IPixelBorderedContainerType> = ({
    children,
    borderWidth = "large",
    backdropFilter: backderopFilter = false,
    className,
    ...props
  }) => {
    return <div
      {...props}
      className={`${styles.px_container} ${backderopFilter ? styles.filter : ""} ${styleDict[borderWidth]} ${className}`}
    >{children}</div>
  }