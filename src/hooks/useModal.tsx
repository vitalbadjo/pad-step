import React, { SetStateAction, useState } from 'react';

type UseModal = () => [boolean, React.Dispatch<SetStateAction<boolean>>, () => void]

export const useModal: UseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return [
    isOpen,
    setIsOpen,
    toggle,
  ];
}
