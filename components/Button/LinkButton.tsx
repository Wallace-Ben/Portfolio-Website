"use client";
import Link from "next/link";
import { ButtonSize, ButtonType } from "./button.types";
import * as buttonStyles from "./button.styles";

interface LinkButtonProps {
  type: ButtonType;
  size: ButtonSize;
  link: string;
  children: React.ReactNode;
}

export default function ClickButton({
  type,
  size,
  link,
  children,
}: LinkButtonProps): React.JSX.Element {
  const buttonType =
    type === ButtonType.Primary
      ? buttonStyles.primaryButtonTypeStyles
      : type === ButtonType.Secondary
      ? buttonStyles.secondaryButtonTypeStyles
      : buttonStyles.submitButtonTypeStyles;

  const buttonSize =
    size === ButtonSize.Large
      ? buttonStyles.largeButtonSizeStyles
      : size === ButtonSize.Small
      ? buttonStyles.smallButtonSizeStyles
      : buttonStyles.defaultButtonSizeStyles;

  const linkButtonStyling = [
    buttonStyles.buttonBaseStyles,
    buttonType,
    buttonSize,
  ].join(" ");
  return (
    <Link href={link} className={linkButtonStyling}>
      <p>{children}</p>
    </Link>
  );
}
