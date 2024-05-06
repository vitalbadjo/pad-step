import { useEffect } from "react";

export const useClickOutside = (ref: React.RefObject<HTMLElement>, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutsideDropdown = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Node | null)) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutsideDropdown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown)
    }
  }, [ref, onClickOutside])
}