"use client";
import * as buttonStyles from "./button.styles";
import { ButtonSize, ButtonType } from "./button.types";

interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
  submit?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ClickButton({
  type,
  size,
  submit,
  disabled,
  children,
  onClick,
}: ButtonProps): React.JSX.Element {
  const buttonType =
    type === ButtonType.Primary
      ? buttonStyles.primaryButtonTypeStyles
      : type === ButtonType.Secondary
        ? buttonStyles.secondaryButtonTypeStyles
        : type === ButtonType.Submit
          ? buttonStyles.submitButtonTypeStyles
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

  if (disabled) {
    return (
      <button
        type={submit ? "submit" : "button"}
        className={`${clickButtonStyling} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        <p>{children}</p>
      </button>
    );
  } else {
    return (
      <button
        type={submit ? "submit" : "button"}
        className={clickButtonStyling}
        onClick={onClick}
      >
        <p>{children}</p>
      </button>
    );
  }
}
