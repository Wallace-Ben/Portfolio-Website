"use client";
import Link from "next/link";
import { ButtonType } from "./button.types";
import { primaryButtonStyles, secondaryButtonStyles } from "./button.styles";

interface LinkButtonProps {
  type: ButtonType;
  link: string;
  children: React.ReactNode;
}

export default function ClickButton({
  type,
  link,
  children,
}: LinkButtonProps): React.JSX.Element {
  const buttonStyles =
    type === ButtonType.Primary ? primaryButtonStyles : secondaryButtonStyles;
  return (
    <Link href={link} className={buttonStyles}>
      <p>{children}</p>
    </Link>
  );
}
