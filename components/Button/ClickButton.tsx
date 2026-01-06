"use client";
import { primaryButtonStyles, secondaryButtonStyles } from "./button.styles";
import { ButtonType } from "./button.types";

interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  onClick: () => void;
}

export default function ClickButton({
  type,
  children,
  onClick,
}: ButtonProps): React.JSX.Element {
  const buttonStyles =
    type === ButtonType.Primary ? primaryButtonStyles : secondaryButtonStyles;
  return (
    <button type="button" className={buttonStyles} onClick={() => onClick()}>
      <p>{children}</p>
    </button>
  );
}
