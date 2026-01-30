"use client";
import * as buttonStyles from "./button.styles";
import { ButtonSize, ButtonType } from "./button.types";

interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export default function HiddenMenuButton({
  type,
  size,
  children,
  active,
  onClick,
}: ButtonProps): React.JSX.Element {
  const buttonType =
    type === ButtonType.Primary
      ? buttonStyles.primaryButtonTypeStyles
      : type === ButtonType.Secondary
        ? buttonStyles.secondaryButtonTypeStyles
        : active
          ? buttonStyles.selectedFilterTypeStyles
          : buttonStyles.filterButtonTypeStyles;

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
    <button className={clickButtonStyling} onClick={onClick}>
      <p className="flex items-center justify-center gap-1 pl-2 pr-0.5">
        {children}
      </p>
    </button>
  );
}
