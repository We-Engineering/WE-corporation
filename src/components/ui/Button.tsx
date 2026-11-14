import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 rounded-sm";
  const styles = {
    primary:
      "bg-gold text-obsidian hover:bg-gold-polished focus-visible:bg-gold-polished",
    secondary:
      "border border-gold/40 text-ivory hover:border-gold hover:bg-gold/5",
    ghost: "text-ivory hover:text-gold-polished",
  }[variant];

  const content = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cn(base, styles, className)}>
      {content}
    </button>
  );
}