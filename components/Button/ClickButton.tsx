"use client";
import * as buttonStyles from "./button.styles";
import { ButtonSize, ButtonType } from "./button.types";

interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
  children: React.ReactNode;
  onClick: () => void;
}

export default function ClickButton({
  type,
  size,
  children,
  onClick,
}: ButtonProps): React.JSX.Element {
  const buttonType =
    type === ButtonType.Primary
      ? buttonStyles.primaryButtonTypeStyles
      : buttonStyles.secondaryButtonTypeStyles;

  const buttonSize =
    size === ButtonSize.Large
      ? buttonStyles.largeButtonSizeStyles
      : size === ButtonSize.Small
      ? buttonStyles.smallButtonSizeStyles
      : buttonStyles.defaultButtonSizeStyles;

  const clickButtonStyling = [
    buttonStyles.buttonBaseStyles,
    buttonType,
    buttonSize,
  ].join(" ");

  return (
    <button
      type="button"
      className={clickButtonStyling}
      onClick={() => onClick()}
    >
      <p>{children}</p>
    </button>
  );
}
