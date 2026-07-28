import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type MarketplaceButtonProps = {
  href: string;
  variant?: "solid" | "outline" | "ghost" | "paper";
  size?: "md" | "sm";
  /** Full-width and centred — used inside card and modal button stacks. */
  block?: boolean;
  children: ReactNode;
};

const VARIANTS = {
  solid: "btn-ink",
  outline: "btn-line",
  ghost: "btn-ghost",
  paper: "btn-paper",
} as const;

/** Outbound link to a marketplace listing. Always opens in a new tab. */
export function MarketplaceButton({
  href,
  variant = "solid",
  size = "md",
  block = false,
  children,
}: MarketplaceButtonProps) {
  const classes = [
    "btn",
    VARIANTS[variant],
    size === "sm" && "btn-sm",
    block && "w-full justify-center",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
      <ArrowUpRight size={size === "sm" ? 14 : 16} aria-hidden="true" />
    </a>
  );
}
